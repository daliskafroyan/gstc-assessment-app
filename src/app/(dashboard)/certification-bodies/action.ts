'use server';

import { updateCertificationBody, getCertificationBody, createCertificationBody } from '@/backend/repositories/certificationBodyRepository';
import { assertAuthenticated } from '@/lib/session';
import { baseAction } from '@/lib/zsa-procedures';
import { z } from 'zod';

const CertificationBodySchema = z.object({
    name: z.string().min(1, 'CB Name is required'),
    address: z.string().min(1, 'Address is required'),
    headquarters: z.string().min(1, 'CB Headquarters is required'),
    affiliateOffices: z.string().min(1, 'Affiliate Offices are required'),
    website: z.string().url('Invalid URL'),
    mainContact: z.string().min(1, 'CB Main Contact is required'),
});

export const updateCertificationBodyAction = baseAction
    .input(CertificationBodySchema)
    .handler(async ({ input }) => {
        const user = await assertAuthenticated();

        await updateCertificationBody({ userID: user.id, data: input });
        return { success: true };
    });

export const getCertificationBodyAction = baseAction
    .handler(async () => {
        const user = await assertAuthenticated();

        const certificationBody = await getCertificationBody(user.id);
        return certificationBody;
    });

export const createCertificationBodyAction = baseAction
    .input(CertificationBodySchema)
    .handler(async ({ input }) => {
        const user = await assertAuthenticated();

        const certificationBody = await createCertificationBody({
            userID: user.id,
            ...input
        });
        return { success: true, certificationBody };
    });