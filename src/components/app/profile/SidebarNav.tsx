'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string;
        title: string;
        icon: JSX.Element;
    }[];
}

export default function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    const path = usePathname();
    const router = useRouter()


    const [val, setVal] = useState(path ?? '/settings');

    useEffect(() => {
        setVal(path);
    }, [path]);

    const handleSelect = (e: string) => {
        setVal(e);
        router.push(e);
    };

    return (
        <>
            <div className='p-1 md:hidden '>
                <Select value={val} onValueChange={handleSelect}>
                    <SelectTrigger className='h-12 sm:w-48'>
                        <SelectValue placeholder='Theme' />
                    </SelectTrigger>
                    <SelectContent>
                        {items.map((item) => (
                            <SelectItem key={item.href} value={item.href}>
                                <div className='flex gap-x-4 px-2 py-1'>
                                    <span className='scale-125'>{item.icon}</span>
                                    <span className='text-md'>{item.title}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className='rounded-xl border bg-card text-card-foreground shadow hidden w-full overflow-x-auto p-2 md:block'>
                <nav
                    className={cn(
                        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
                        className
                    )}
                    {...props}
                >
                    {items.map((item) => (
                        <Link key={item.href} href={item.href} passHref>
                            <div
                                className={cn(
                                    buttonVariants({ variant: 'ghost' }),
                                    path === item.href
                                        ? 'bg-muted hover:bg-muted'
                                        : 'hover:bg-transparent hover:underline',
                                    'justify-start',
                                    'w-full'
                                )}
                            >
                                <span className='mr-2'>{item.icon}</span>
                                {item.title}
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
