import { getCurrentProfile } from "@/lib/authenticated-utils";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { User } from "lucide-react";
import UploadAvatarButton from "./UploadAvatarButton";
import DeleteAvatarButton from "./DeleteAvatarButton";

async function ProfileAvatar(
    { userIMG }: { userIMG?: string } = { userIMG: 'user.webp' }
) {
    return (
        <Avatar className='h-32 w-32'>
            <AvatarImage src={userIMG} />
            <AvatarFallback>
                <User className='w-32 h-32' />
            </AvatarFallback>
        </Avatar>
    );
}

async function ChangeAvatarSection() {
    const profile = await getCurrentProfile();
    return (
        <div className="flex flex-col gap-2 mb-8">
            <label className="text-sm font-medium leading-none ">
                Avatar
            </label>
            <div className="flex flex-row gap-6 items-center">
                <ProfileAvatar userIMG={profile?.image ?? undefined} />
                <div className="flex gap-2">
                    <UploadAvatarButton user={profile} />
                    <DeleteAvatarButton user={profile} />
                </div>
            </div>
        </div>
    );
}

export default ChangeAvatarSection