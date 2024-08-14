'use client'

import { deleteAvatarAction } from "@/app/(dashboard)/settings/profile/action";
import { GetProfileUserResponse } from "@/backend/actions/auth";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/components/ui/uploadthing-button";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";

function extractImageName(url: string) {
    const parts = url.split('/');
    return parts[parts.length - 1];
}

export default function DeleteAvatarButton({ user }: { user: GetProfileUserResponse }) {
    const { execute, isPending } = useServerAction(deleteAvatarAction, {
        onError({ err }) {
            toast.error(err.message);
        },
        onSuccess() {
            toast.success("Avatar deleted successfully");
            // revalidatePath('/settings/profile')
        }
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
}