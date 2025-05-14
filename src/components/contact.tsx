'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema } from '@/lib/types'
import Image from 'next/image'

type FormSchema = z.infer<typeof formSchema>

export default function Contact() {
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            favoriteColor: '',
        },
    })

    // 2. Define a submit handler.
    // async function onSubmit(value: FormSchema) {
    //     try {
    //         const res = await fetch('/api/contact', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(value),
    //         })
    //         if (!res.ok) throw new Error('Network response was not ok')
    //         // Optional: show a success toast or reset form
    //         alert('Message sent!')
    //         form.reset()
    //     } catch (error) {
    //         console.error(error)
    //         alert('Failed to send message.')
    //     }
    // }

    async function onSubmit(value: FormSchema) {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(value),
        })

        const data = await res.json()

        if (!res.ok || !data.success) {
            alert(data?.message || 'An error occurred. Please try again later.')
            throw new Error('Form failed')
        }

        // ✅ Only trigger GA if server confirms real submission
        if (
            data.formSent &&
            typeof window !== 'undefined' &&
            'gtag' in window
        ) {
            window.gtag('event', 'contact_form_submit', {
                event_category: 'engagement',
                event_label: 'Contact Page',
            })
            // console.log('gtag', window.gtag)
        }
        // Optional: show a success toast or reset form
        alert('Message sent!')
        form.reset()
    }

    return (
        <Form {...form}>
            <div
                className='px-5 flex flex-col justify-center items-center pt-40'
                id='contact'
            >
                <h2 className='text-center text-3xl md:text-5xl font-bold pb-20 text-slate-700 max-w-4xl'>
                    Contact
                    <div className='relative w-full'>
                        <Image
                            src='/rob.jpg'
                            alt='Overlapping Graphic'
                            width={100}
                            height={100}
                            className='absolute top-3 md:top-0 lg:top-0 left-20 md:left-60 lg:left-80 z-10  border-b-4 border-r-4 rounded-lg'
                        />
                    </div>
                </h2>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='gap-10 sm:px-7 px-4 max-w-screen-xl py-20 border-b-6 border-r-6 bg-white/96 rounded-lg shadow-lg md:min-w-xl lg:min-w-4xl'
                >
                    <div className='grid grid-cols-1 md:grid-cols-1 gap-6 max-w-[90vw] md:max-w-[80vw] lg:max-w-[60vw] mx-auto'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem className='col-span-1'>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder='Your name'
                                            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] border-r-4 border-b-4'
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        What should we call you?
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem className='col-span-1'>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type='email'
                                            placeholder='you@example.com'
                                            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] border-r-4 border-b-4'
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        We&apos;ll never share your email.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='favoriteColor'
                            render={({ field }) => (
                                <FormItem
                                    className='col-span-1 hidden'
                                    tabIndex={-1}
                                >
                                    <FormLabel>Favorite Color</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder='e.g. Blue'
                                            className='w-full '
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Just for fun!
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='message'
                            render={({ field }) => (
                                <FormItem className='col-span-full'>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <textarea
                                            {...field}
                                            placeholder='I would like to repaint my garage.'
                                            className='w-full h-32 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] border-r-4 border-b-4'
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        If you prefer to call or text, you can
                                        reach me at:{' '}
                                        <a href='tel:9043105196'>
                                            (904) 310-5196
                                        </a>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type='submit'
                            className='flex cursor-pointer w-full md:w-50 bg-[var(--primary)] hover:bg-[var(--foreground)] font-medium transition-colors justify-center items-center border-b-4 border-r-4 text-black hover:text-[var(--primary)]'
                        >
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
        </Form>
    )
}
