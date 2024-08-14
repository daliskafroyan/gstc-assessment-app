'use client'

import { saveAvatarAction } from "@/app/(dashboard)/settings/profile/action";
import { GetProfileUserResponse } from "@/backend/actions/auth";
import { UploadButton } from "@/components/ui/uploadthing-button";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";

export default function UploadAvatarButton({ user }: { user: GetProfileUserResponse }) {
    const { execute } = useServerAction(saveAvatarAction, {
        onError({ err }) {
            toast.error(err.message);
        },
        onSuccess() {
            toast.success("Avatar uploaded successfully");
            // revalidatePath('/settings/profile')
        }
    });

    return <UploadButton
        className="w-[120px] ut-button:w-full ut-button:border-primary ut-button:bg-primary ut-button:ring-primary"
        endpoint='imageUploader'
        onBeforeUploadBegin={(files) => {
            return files.map(
                (f) =>
                    new File([f], `${user.email}-${f.name}`, { type: f.type })
            )
        }}
        onClientUploadComplete={(res) => {
            execute({ url: res[0].url })
        }}
    />
}