import { assertAuthenticated } from "@/lib/session";
import { createUploadthing, type FileRouter as UploadThingFileRouter } from "uploadthing/next"

const f = createUploadthing()

export const fileRouter = {
    imageUploader: f({ image: { maxFileSize: "1MB", maxFileCount: 1 } })
        .middleware(async () => {
            const user = await assertAuthenticated();

            return { userId: user.id }
        })
        .onUploadComplete(async (res) => {
            return res
        }),
} satisfies UploadThingFileRouter

export type FileRouter = typeof fileRouter
