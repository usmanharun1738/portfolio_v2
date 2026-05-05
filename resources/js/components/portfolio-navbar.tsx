import { Link } from '@inertiajs/react';
import { useState } from 'react';
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
        <Link
            href={item.href}
            className={cn(
                'font-display border-b-2 border-transparent font-medium tracking-tight transition-colors duration-300 hover:text-primary',
                isActive ? 'border-primary text-primary' : 'text-on-surface/60',
            )}
        >
            {item.label}
        </Link>
    );
}

type PortfolioNavbarProps = {
    homeUrl: string;
    projectsUrl?: string;
    stackUrl?: string;
    processUrl?: string;
    contactUrl?: string;
    resumeUrl?: string;
    activeItem?: string;
};

export function PortfolioNavbar({
    homeUrl,
    projectsUrl,
    stackUrl,
    processUrl,
    contactUrl,
    resumeUrl,
    activeItem = 'home',
}: PortfolioNavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const projectsLink = projectsUrl ?? `${homeUrl}#projects`;
    const stackLink = stackUrl ?? `${homeUrl}#stack`;
    const processLink = processUrl ?? `${homeUrl}#process`;
    const contactLink = contactUrl ?? `${homeUrl}#contact`;
    const resumeLink = resumeUrl ?? `${homeUrl}#resume`;

    const navItems: PortfolioNavItem[] = [
        { label: 'Home', href: homeUrl, key: 'home' },
        { label: 'Projects', href: projectsLink, key: 'projects' },
        { label: 'Stack', href: stackLink, key: 'stack' },
        { label: 'Process', href: processLink, key: 'process' },
        { label: 'Contact', href: contactLink, key: 'contact' },
        { label: 'Resume', href: resumeLink, key: 'resume' },
    ];

    return (
        <header className="fixed top-0 z-50 w-full bg-background/80 shadow-[0_12px_40px_rgba(21,28,39,0.06)] backdrop-blur-xl">
            <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link
                    href={homeUrl}
                    className="font-display text-base font-black tracking-tighter text-on-surface sm:text-xl"
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

                <Link
                    href={contactLink}
                    className="hidden rounded-lg bg-linear-to-r from-primary to-primary-container px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:scale-95 md:inline-flex"
                >
                    Connect
                </Link>

                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen((open) => !open)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-low text-on-surface md:hidden"
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    <span className="material-symbols-outlined text-[20px]">
                        {isMobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </nav>

            {isMobileMenuOpen && (
                <div className="border-t border-outline-variant/15 bg-background/95 px-4 pb-4 pt-3 shadow-[0_20px_60px_rgba(21,28,39,0.08)] backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.key}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    'rounded-xl px-4 py-3 font-display text-base font-medium tracking-tight transition-colors',
                                    activeItem === item.key
                                        ? 'bg-surface-container text-primary'
                                        : 'text-on-surface/70 hover:bg-surface-container-low',
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href={contactLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-2 inline-flex items-center justify-center rounded-xl bg-linear-to-r from-primary to-primary-container px-5 py-3 text-sm font-semibold text-white shadow-lg"
                        >
                            Connect
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
