// Ensures Node 25+ provides a Storage-like interface during SSR.
// Node exposes localStorage/sessionStorage globals, but they are non-functional
// unless a backing file is configured. We inject an in-memory fallback so
// server code that checks storage APIs does not crash.

// At some point during maintaining this project, pnpm dev decided that my project was trying to access localstorage from the server side. Which is rediculous because this website does not use localstorage. I asked chatgpt to fix my problem and this is what it came up with. So far it seems to be working. Don't ask me why.

const ensureStorage = (storageKey: 'localStorage' | 'sessionStorage') => {
	if (typeof globalThis === 'undefined') {
		return
	}

	const existing = (globalThis as Record<string, unknown>)[storageKey] as
		| Storage
		| undefined

	const isFunctional =
		existing &&
		typeof existing.getItem === 'function' &&
		typeof existing.setItem === 'function' &&
		typeof existing.removeItem === 'function' &&
		typeof existing.clear === 'function'

	if (isFunctional) {
		return
	}

	const store = new Map<string, string>()

	const memoryStorage: Storage = {
		getItem: (key: string) => store.get(key) ?? null,
		setItem: (key: string, value: string) => {
			store.set(key, String(value))
		},
		removeItem: (key: string) => {
			store.delete(key)
		},
		clear: () => {
			store.clear()
		},
		key: (index: number) => Array.from(store.keys())[index] ?? null,
		get length() {
			return store.size
		},
	}

	Object.defineProperty(globalThis, storageKey, {
		value: memoryStorage,
		configurable: true,
		writable: true,
	})
}

if (typeof window === 'undefined') {
	ensureStorage('localStorage')
	ensureStorage('sessionStorage')
}
