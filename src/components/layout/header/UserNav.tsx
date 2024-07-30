import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { getCurrentProfile } from '@/lib/authenticated-utils';
import { LogOut, User } from 'lucide-react';
import Link from 'next/link';

async function ProfileAvatar(
    { userIMG }: { userIMG?: string } = { userIMG: 'user.webp' }
) {
    return (
        <Avatar className='h-8 w-8'>
            <AvatarImage src={userIMG} />
            <AvatarFallback>
                <User className='w-6 h-6' />
            </AvatarFallback>
        </Avatar>
    );
}

const PROFILE_STRINGS = {
    signOut: 'Sign Out',
    profile: 'Profile'
};


async function UserNav() {
    const profile = await getCurrentProfile();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <ProfileAvatar userIMG={profile?.image ?? undefined} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {profile.email}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {profile.phone ?? '-'}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className='cursor-pointer'>
                    <Link className='flex items-center' href={'/api/sign-out'}>
                        <LogOut className='w-4 h-4 mr-2' />
                        {PROFILE_STRINGS.signOut}
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserNav