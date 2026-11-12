import { Head } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';
import SiteFooter from '@/components/site-footer';
import Header2 from '@/components/ui/Header2';

export default function SiteLayout({
    title,
    children,
}: PropsWithChildren<{ title?: string }>) {
    return (
        <div className="flex min-h-screen flex-col bg-[#F7F6F2] text-foreground">
            <Head title={title} />
            <Header2/>
            {/* header is fixed, so offset the content */}
            <main className="flex-1 pt-0">{children}</main>
            <SiteFooter />
        </div>
    );
}