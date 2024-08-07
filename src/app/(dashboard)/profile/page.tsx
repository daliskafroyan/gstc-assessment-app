import PageContainer from '@/components/layout/PageContainer';

import { getCurrentProfile } from '@/lib/authenticated-utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import UploadAvatarButton from '@/components/app/profile/UploadAvatarButton';
import DeleteAvatarButton from './DeleteProfileButton';

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

const PROFILE_PAGE_STRINGS = {
    profileAvatarLabel: 'Change Avatar'
}

async function ProfilePage() {
    const profile = await getCurrentProfile();
    console.log('#debug profile', profile);

    return (
        <PageContainer>
            <h2 className="mb-2 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Profile
            </h2>
            <div
                className="relative flex-col items-start gap-8 md:flex"
            >
                {PROFILE_PAGE_STRINGS.profileAvatarLabel}
                <div className="flex flex-row gap-6 items-center">
                    <ProfileAvatar userIMG={profile?.image ?? undefined} />
                    <div className="flex gap-2">
                        <UploadAvatarButton user={profile} />
                        <DeleteAvatarButton user={profile} />
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

async function ChangeAvatarSection() {
    const profile = await getCurrentProfile();
    return (
        <div className="flex flex-row gap-6 items-center">
            <ProfileAvatar userIMG={profile?.image ?? undefined} />
            <div className="flex gap-2">
                <UploadAvatarButton user={profile} />
                <DeleteAvatarButton user={profile} />
            </div>
        </div>
    );
}

export { ChangeAvatarSection }

export default ProfilePage