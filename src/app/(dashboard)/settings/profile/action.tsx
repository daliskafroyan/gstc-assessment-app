'use server';

import { updateProfile } from "@/backend/repositories/profilesRepository";
import { getProfileUserService } from "@/backend/services/authenticationService";
import { assertAuthenticated } from "@/lib/session";
import { ProfileFormSchema } from "@/lib/validations/profile";
import { baseAction } from "@/lib/zsa-procedures";
import { deleteAvatar, updateAvatar } from "@/backend/repositories/profilesRepository";
import { SaveAvatarSchema } from "@/lib/validations/profile";
import { UTApi } from "uploadthing/server";
import { z } from "zod";

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

const utapi = new UTApi();

export const saveAvatarAction = baseAction
    .input(SaveAvatarSchema)
    .handler(async ({ input }) => {
        const user = await assertAuthenticated();

        await updateAvatar({ data: { image: input.url }, userID: user.id })
    })

export const deleteAvatarAction = baseAction
    .input(z.object({
        imageUrl: z.string()
    }))
    .handler(async ({ input }) => {
        const user = await assertAuthenticated();

        await deleteAvatar(user.id);
        await utapi.deleteFiles(input.imageUrl);
    })
