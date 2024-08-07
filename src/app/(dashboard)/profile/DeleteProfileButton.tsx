'use client'

import { deleteAvatarAction } from "@/app/(dashboard)/profile/action";
import { GetProfileUserResponse } from "@/backend/actions/auth";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/components/ui/uploadthing-button";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";

function extractImageName(url: string) {
    // Split the URL by '/' and get the last part
    const parts = url.split('/');
    // Return the last part, which should be the image name
    return parts[parts.length - 1];
}

export default function DeleteAvatarButton({ user }: { user: GetProfileUserResponse }) {
    const { execute, isPending } = useServerAction(deleteAvatarAction, {
        onError({ err }) {
            toast.error(err.message);
        },
    });

    const handleDeleteAvatar = async () => {
        await execute({ imageUrl: extractImageName(user.image ?? '') });
    };


    return <Button
        className='mb-[16px]'
        variant="destructive"
        onClick={handleDeleteAvatar}
        disabled={isPending || !user.image}
    >
        {isPending ? 'Deleting...' : 'Delete Avatar'}
    </Button>

    // return <UploadButton
    //     className="mt-2 w-[120px] ut-button:w-full ut-button:border-primary ut-button:bg-primary ut-button:ring-primary"
    //     endpoint='imageUploader'
    //     onBeforeUploadBegin={(files) => {
    //         return files.map(
    //             (f) =>
    //                 new File([f], `${user.email}-${f.name}`, { type: f.type })
    //         )
    //     }}
    //     onClientUploadComplete={(res) => {
    //         execute({ url: res[0].url })
    //     }}
    // />
}