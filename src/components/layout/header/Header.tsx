import MobileMenu from '@/components/layout/mobileMenu/MobileMenu';
import { protectedRoute } from '@/lib/session';
import HeaderActions from './HeaderActions';

import { cn } from '@/lib/utils';
import { MobileSidebar } from './MobileSidebar';
import UserNav from './UserNav';
import ProfileDropdown from '@/components/auth/ProfileDropdown';

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
          {/* <UserNav /> */}
          <ProfileDropdown />
          {/* <ThemeToggle /> */}
        </div>
      </nav>
    </header>
  );
}


// const Header = async () => {
//   const user = await protectedRoute();
//   return (
//     <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 justify-between md:justify-end '>
//       <MobileMenu isUserAdmin={user.role == 'admin'} />
//       <div className='flex items-center justify-between'>
//         <HeaderActions />
//       </div>
//     </header>
//   );
// };

// export default Header;
