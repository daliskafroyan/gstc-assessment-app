'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { useServerAction } from 'zsa-react';
import PageContainer from '@/components/layout/PageContainer';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { updateCertificationBodyAction, getCertificationBodyAction, createCertificationBodyAction } from './action';
import { useServerActionQuery } from '@/lib/hooks/server-action-hooks';

const CertificationBodySchema = z.object({
    name: z.string().min(1, 'CB Name is required'),
    address: z.string().min(1, 'Address is required'),
    headquarters: z.string().min(1, 'CB Headquarters is required'),
    affiliateOffices: z.string().min(1, 'Affiliate Offices are required'),
    website: z.string().url('Invalid URL'),
    mainContact: z.string().min(1, 'CB Main Contact is required'),
});

type CertificationBodyFormData = z.infer<typeof CertificationBodySchema>;

const CB_FORM_STRINGS = {
    title: 'Certification Body',
    subtitle: 'Certification Body (CB) Information',
    loadingMessage: 'Updating certification body information...',
    successMessage: 'Certification body information updated successfully',
    errorMessage: 'Failed to update certification body information',
    submitButton: 'Save Changes',
    pendingButton: 'Saving...',
};

const useCertificationBody = () => {
    const query = useServerActionQuery(getCertificationBodyAction, { queryKey: ['certificationBody'], input: undefined });
    return query;
};

export default function CertificationBodyPage() {
    const { isPending: isUpdating, execute: executeUpdate } = useServerAction(updateCertificationBodyAction, {
        onSuccess() {
            toast.success(CB_FORM_STRINGS.successMessage);
        },
        onError(error) {
            toast.error(CB_FORM_STRINGS.errorMessage);
            console.error(error);
        },
    });

    const { data: cbData, isFetching } = useCertificationBody();

    const form = useForm<CertificationBodyFormData>({
        resolver: zodResolver(CertificationBodySchema),
        defaultValues: {
            name: '',
            address: '',
            headquarters: '',
            affiliateOffices: '',
            website: '',
            mainContact: '',
        },
    });

    useEffect(() => {
        if (cbData) {
            form.reset({
                name: cbData.name ?? '',
                address: cbData.address ?? '',
                headquarters: cbData.headquarters ?? '',
                affiliateOffices: cbData.affiliateOffices ?? '',
                website: cbData.website ?? '',
                mainContact: cbData.mainContact ?? '',
            });
        }
    }, [cbData, form]);

    if (isFetching) {
        return (
            <PageContainer>
                <h2 className="mb-2 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    {CB_FORM_STRINGS.title}
                </h2>
                <Card>
                    <CardHeader>
                        <CardTitle>{CB_FORM_STRINGS.subtitle}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="space-y-2">
                                    <Skeleton className="h-4 w-[100px]" />
                                    <Skeleton className="h-10 w-full" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Skeleton className="h-10 w-[120px] mt-8" />
            </PageContainer>
        );
    }

    async function onSubmit(values: CertificationBodyFormData) {
        toast.loading(CB_FORM_STRINGS.loadingMessage);
        await executeUpdate(values);
        toast.dismiss();
    }

    return (
        <PageContainer>
            <h2 className="mb-2 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {CB_FORM_STRINGS.title}
            </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>{CB_FORM_STRINGS.subtitle}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>CB Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} required />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input {...field} required />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="headquarters"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>CB Headquarters</FormLabel>
                                            <FormControl>
                                                <Input {...field} required />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="affiliateOffices"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Affiliate Office(s)</FormLabel>
                                            <FormControl>
                                                <Input {...field} required />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="website"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Website</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="url" required />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="mainContact"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>CB Main Contact</FormLabel>
                                            <FormControl>
                                                <Input {...field} required />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </CardContent>
                    </Card>
                    <Button type="submit" disabled={isUpdating}>
                        {isUpdating ? CB_FORM_STRINGS.pendingButton : CB_FORM_STRINGS.submitButton}
                    </Button>
                </form>
            </Form>
        </PageContainer>
    );
}