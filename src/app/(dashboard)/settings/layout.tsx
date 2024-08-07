import SidebarNav from '@/components/app/profile/SidebarNav'
import PageContainer from '@/components/layout/PageContainer'
import { Separator } from '@/components/ui/separator'
import { UserIcon } from 'lucide-react'
import { FC } from 'react'

type LayoutAppProps = {
    children: React.ReactNode;
};

const SettingsLayout: FC<LayoutAppProps> = async ({ children }) => {
    return (
        <section className='px-6 pt-6'>
            <div className='space-y-0.5'>
                <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
                    Settings
                </h1>
                <p className='text-muted-foreground'>
                    Manage your account settings
                </p>
            </div>
            <Separator className='my-4 lg:my-6' />
            <div className='flex flex-1 flex-col space-y-8 md:space-y-2 md:overflow-hidden lg:flex-row lg:space-x-4 lg:space-y-0'>
                <aside className='top-0 lg:sticky lg:w-1/5'>
                    <SidebarNav items={sidebarNavItems} />
                </aside>

                <div className='flex w-full p-1 md:overflow-y-hidden'>
                    {children}
                </div>
            </div>
        </section>
    )
}

const sidebarNavItems = [
    {
        title: 'Profile',
        icon: <UserIcon size={18} />,
        href: '/settings/profile',
    },

]

export default SettingsLayout
