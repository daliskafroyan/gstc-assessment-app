'use client'

import { z } from 'zod'
import { useFieldArray, useForm } from 'react-hook-form'
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import Link from 'next/link'
import PageContainer from '@/components/layout/PageContainer'
import ChangeAvatarSection from './ChangeAvatarSection'
import { ProfileFormSchema } from '@/lib/validations/profile'
import { useServerAction } from 'zsa-react'
import { editProfileAction, getProfileAction } from '@/app/(dashboard)/settings/profile/action'
import { useServerActionQuery } from '@/lib/hooks/server-action-hooks'
import { useEffect } from 'react'


type ProfileFormValues = z.infer<typeof ProfileFormSchema>

const defaultValues: Partial<ProfileFormValues> = {
    firstName: '',
    lastName: '',
    phone: '',
    extras: {},
}

const useProfile = () => {
    const query = useServerActionQuery(getProfileAction, { queryKey: ['profile'], input: undefined })
    console.log('#debug query', query)
    return query
}

export default function ProfileForm() {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(ProfileFormSchema),
        defaultValues,
        mode: 'onChange',
    })

    const { isPending, execute, error } = useServerAction(editProfileAction, {
        onError({ err }) {
            toast.error(err.message);
        },
        onSuccess() {
            toast.success('Profile updated successfully');
        },
    });

    async function onSubmit(data: ProfileFormValues) {
        toast.loading('Updating profile...')
        await execute(data)
        toast.dismiss()
    }

    const { data: profileData, isFetching } = useProfile()

    useEffect(() => {
        if (profileData) {
            form.reset({
                firstName: profileData.firstName || '',
                lastName: profileData.lastName || '',
                phone: profileData.phone || '',
                extras: profileData.extras || {},
            })
        }
    }, [profileData, form])

    if (isFetching) {
        return <div>Loading...</div>
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input  {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your phone number in international format.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isPending} type="submit">Update Profile</Button>
            </form>
        </Form>
    )
}
