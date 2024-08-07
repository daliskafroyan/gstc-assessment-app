'use server';

import { updateProfile } from "@/backend/repositories/profilesRepository";
import { getProfileUserService } from "@/backend/services/authenticationService";
import { assertAuthenticated } from "@/lib/session";
import { ProfileFormSchema } from "@/lib/validations/profile";
import { baseAction } from "@/lib/zsa-procedures";

export const editProfileAction = baseAction
    .input(ProfileFormSchema)
    .handler(async ({ input }) => {
        const user = await assertAuthenticated();

        await updateProfile({ userID: user.id, data: input })
    })

export const getProfileAction = baseAction
    .handler(async () => {
        const user = await assertAuthenticated();

        return await getProfileUserService(user.id)
    })