import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

type PortfolioNavItem = {
    label: string;
    href: string;
    key: string;
};

type PortfolioNavbarLinkProps = {
    item: PortfolioNavItem;
    isActive: boolean;
};

export function PortfolioNavbarLink({
    item,
    isActive,
}: PortfolioNavbarLinkProps) {
    return (
        <a
            href={item.href}
            className={cn(
                'font-display border-b-2 border-transparent font-medium tracking-tight transition-colors duration-300 hover:text-primary',
                isActive ? 'border-primary text-primary' : 'text-on-surface/60',
            )}
        >
            {item.label}
        </a>
    );
}

type PortfolioNavbarProps = {
    homeUrl: string;
    activeItem?: string;
};

export function PortfolioNavbar({
    homeUrl,
    activeItem = 'home',
}: PortfolioNavbarProps) {
    const navItems: PortfolioNavItem[] = [
        { label: 'Home', href: homeUrl, key: 'home' },
        { label: 'Projects', href: `${homeUrl}#projects`, key: 'projects' },
        { label: 'Stack', href: `${homeUrl}#stack`, key: 'stack' },
        { label: 'Process', href: `${homeUrl}#process`, key: 'process' },
        { label: 'Contact', href: `${homeUrl}#contact`, key: 'contact' },
        { label: 'Resume', href: `${homeUrl}#resume`, key: 'resume' },
    ];

    return (
        <header className="fixed top-0 z-50 w-full bg-background/80 shadow-[0_12px_40px_rgba(21,28,39,0.06)] backdrop-blur-xl">
            <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-8 py-4">
                <Link
                    href={homeUrl}
                    className="font-display text-xl font-black tracking-tighter text-on-surface"
                >
                    ARTISAN STACK
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <PortfolioNavbarLink
                            key={item.key}
                            item={item}
                            isActive={activeItem === item.key}
                        />
                    ))}
                </div>

                <a
                    href={`${homeUrl}#contact`}
                    className="rounded-lg bg-linear-to-r from-primary to-primary-container px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:scale-95"
                >
                    Connect
                </a>
            </nav>
        </header>
    );
}
