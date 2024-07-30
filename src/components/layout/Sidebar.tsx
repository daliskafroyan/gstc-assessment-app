'use client';
// import { site } from '@/config/site';
// import { cn } from '@/lib/utils';
// import { LeafIcon } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { FC } from 'react';
// import { MENU_ICONS } from './mobileMenu/MenuIcons';

// type SidebarProps = {
//   isUserAdmin: boolean;
// };

// const Sidebar: FC<SidebarProps> = ({ isUserAdmin }) => {
//   const pathname = usePathname();
//   const handleClass = (path: string) => {
//     return path === pathname
//       ? 'bg-muted text-primary'
//       : 'text-muted-foreground';
//   };
//   return (
//     <aside className='hidden border-r bg-muted/40 md:block'>
//       <div className='flex h-full max-h-screen flex-col gap-2'>
//         <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
//           <Link href='/' className='flex items-center gap-2 font-semibold'>
//             <LeafIcon className='h-6 w-6 text-primary' />
//             <span className=''>{site.title}</span>
//           </Link>
//         </div>
//         <div className='flex-1'>
//           <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
//             {site.menus.links.map(({ href, label, icon, admin }) => (
//               <Link
//                 key={`sidebar-link-${href}`}
//                 href={href}
//                 className={cn(
//                   'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary',
//                   handleClass(href),
//                   !isUserAdmin && admin && 'hidden'
//                 )}>
//                 {MENU_ICONS[icon] || MENU_ICONS.default}
//                 <span>{label}</span>
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </aside>
//   );
// };

'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useSidebar } from '@/lib/hooks/use-sidebar';
import { navItems } from '@/constants/data';
import { DashboardNav } from './DashboardNav';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();

  const handleToggle = () => {
    toggle();
  };

  return (
    <aside
      className={cn(
        `relative  hidden h-screen flex-none border-r bg-card transition-[width] duration-500 md:block`,
        !isMinimized ? 'w-72' : 'w-[72px]',
        className
      )}
    >
      <div className="hidden p-5 pt-10 lg:block">
        <Link
          href={'https://github.com/Kiranism/next-shadcn-dashboard-starter'}
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
        </Link>
      </div>
      <ChevronLeft
        className={cn(
          'absolute -right-3 top-10 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground',
          isMinimized && 'rotate-180'
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </aside>
  );
}
