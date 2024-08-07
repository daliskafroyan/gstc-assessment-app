'use server';

import { deleteAvatar, updateAvatar } from "@/backend/repositories/profilesRepository";
import { assertAuthenticated, getCurrentUser } from "@/lib/session";
import { SaveAvatarSchema } from "@/lib/validations/profile";
import { baseAction } from "@/lib/zsa-procedures";
import { UTApi } from "uploadthing/server";
import { z } from "zod";

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
