import React from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { cn } from '@/lib/utils';

export default function PageContainer({
    children,
    scrollable = true,
    isSettingsPage = false,
    noPadding = false
}: {
    children: React.ReactNode;
    scrollable?: boolean;
    isSettingsPage?: boolean;
    noPadding?: boolean;
}) {
    return (
        <>
            {scrollable ? (
                <ScrollArea className={cn(isSettingsPage ? "h-[calc(100dvh-200px)] w-full" : "h-[calc(100dvh-52px)] w-full")}>
                    <div className={cn("h-full", noPadding ? "" : "p-4 md:px-8")}>{children}</div>
                </ScrollArea>
            ) : (
                <div className="h-full  p-4 md:px-8">{children}</div>
            )}
        </>
    );
}
