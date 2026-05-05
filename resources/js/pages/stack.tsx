import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { PortfolioNavbar } from '@/components/portfolio-navbar';
import { home } from '@/routes';

// ─── Types ───────────────────────────────────────────────────────────────────

interface PageData {
    id: number;
    slug: string;
    title: string;
    meta_title: string | null;
    meta_description: string | null;
    is_published: boolean;
}

interface Section {
    id: number;
    key: string;
    type: string;
    name: string;
    content: Record<string, unknown>;
    sort_order: number;
    is_enabled: boolean;
}

// ─── Content shapes ───────────────────────────────────────────────────────────

interface StackHeroContent {
    eyebrow: string;
    heading: string;
    bio: string;
    image_url: string;
}

interface LanguageItem {
    number: string;
    name: string;
    icon_class: string;
    proficiency: number;
}

interface ArtisanCard {
    heading: string;
    body: string;
}

interface StackLanguagesContent {
    label: string;
    heading: string;
    artisan_card: ArtisanCard;
    items: LanguageItem[];
}

interface SkillItem {
    name: string;
    icon_class: string;
}

interface SkillCategory {
    label: string;
    heading: string;
    items: SkillItem[];
}

interface StackSkillsContent {
    categories: SkillCategory[];
}

interface CertItem {
    year: string;
    issuer: string;
    title: string;
    description: string;
    badge_url: string;
}

interface StackCertificationsContent {
    eyebrow: string;
    heading: string;
    items: CertItem[];
}

interface StackCtaContent {
    heading: string;
    body: string;
    button: { label: string; href: string };
}

// ─── Section components ───────────────────────────────────────────────────────

function StackHeroSection({ content }: { content: StackHeroContent }) {
    return (
        <section className="max-w-screen-2xl mx-auto mb-16 px-4 sm:px-6 lg:px-8 md:mb-24">
            <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:gap-12">
                <div className="flex-1">
                    <span className="font-label text-[11px] uppercase tracking-[0.2em] text-primary mb-4 block">
                        {content.eyebrow}
                    </span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] text-on-surface mb-8">
                        {content.heading.split('\n').map((line, i, arr) => (
                            <span key={i}>{i === 0 ? line : <><br /><span className="text-primary-container">{line}</span></>}{i < arr.length - 1 && i > 0 ? '' : ''}</span>
                        ))}
                    </h1>
                    <p className="text-base sm:text-xl text-on-surface/70 max-w-xl font-light leading-relaxed">
                        {content.bio}
                    </p>
                </div>
                <div className="hidden md:block w-1/3 aspect-square bg-surface-container-low rounded-xl overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                        <img
                            src={content.image_url}
                            alt="Artisan Showcase"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function StackLanguagesSection({ content }: { content: StackLanguagesContent }) {
    return (
        <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 bg-surface-container-low p-6 sm:p-8 md:p-12 rounded-xl flex flex-col justify-between group hover:bg-surface-container transition-colors duration-500">
                    <div>
                        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface/40 mb-2 block">
                            {content.label}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-6">
                            {content.heading}
                        </h2>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-6 sm:gap-10 md:mt-12 md:gap-12">
                        {content.items.map((item) => (
                            <div key={item.number} className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <i className={`${item.icon_class} text-xl`}></i>
                                    <span className="font-label text-sm text-primary">{item.number}. {item.name}</span>
                                </div>
                                <div className="h-0.5 w-full max-w-48 bg-surface-dim overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: `${item.proficiency}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-4 bg-primary p-6 sm:p-8 md:p-12 rounded-xl text-white flex flex-col justify-center">
                    <span className="material-symbols-outlined text-5xl mb-6">terminal</span>
                    <h3 className="text-2xl font-display font-bold mb-4">{content.artisan_card.heading}</h3>
                    <p className="font-light opacity-80 leading-relaxed">
                        {content.artisan_card.body}
                    </p>
                </div>
            </div>
        </section>
    );
}

function StackSkillsSection({ content }: { content: StackSkillsContent }) {
    return (
        <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24 md:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
                {content.categories.map((cat) => (
                    <div key={cat.label} className="flex flex-col border-t border-outline-variant/15 pt-8">
                        <span className="font-label text-[10px] uppercase tracking-widest text-primary mb-6">
                            {cat.label}
                        </span>
                        <h3 className="text-2xl font-display font-bold mb-8 tracking-tight">{cat.heading}</h3>
                        <ul className="space-y-4 font-label text-on-surface/60">
                            {cat.items.map((item) => (
                                <li key={item.name} className="flex items-center gap-4 group cursor-default">
                                    <i className={`${item.icon_class} text-xl opacity-50 group-hover:opacity-100 transition-opacity shrink-0`}></i>
                                    <span className="group-hover:text-on-surface transition-colors">{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

function StackCertificationsSection({ content }: { content: StackCertificationsContent }) {
    return (
        <section className="bg-surface-container-low py-20 sm:py-24 md:py-32">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 sm:mb-16">
                    <span className="font-label text-[11px] uppercase tracking-widest text-on-surface/40 block mb-2">
                        {content.eyebrow}
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">{content.heading}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
                    {content.items.map((cert) => (
                        <div key={cert.title} className="bg-surface p-6 sm:p-8 md:p-12 rounded-xl shadow-[0_12px_40px_rgba(21,28,39,0.06)] hover:-translate-y-2 transition-transform duration-300">
                            <span className="font-label text-[10px] text-primary mb-4 block">{cert.year} — {cert.issuer}</span>
                            <h4 className="text-xl font-bold font-display mb-4">{cert.title}</h4>
                            <p className="text-on-surface/60 text-sm leading-relaxed mb-6">{cert.description}</p>
                            <a className="font-label text-xs uppercase tracking-widest text-primary flex items-center group" href={cert.badge_url}>
                                View Badge <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StackCtaSection({ content }: { content: StackCtaContent }) {
    return (
        <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-48 mb-20 md:mb-24">
            <div className="bg-[#151c27] rounded-3xl p-10 sm:p-16 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-linear-to-br from-primary via-transparent to-primary"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-8 z-10">
                    {content.heading.split('\n').map((line, i, arr) => (
                        <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                    ))}
                </h2>
                <p className="text-white/60 text-base sm:text-lg max-w-2xl mb-12 font-light leading-relaxed z-10">
                    {content.body}
                </p>
                <a href={content.button.href} className="group bg-primary text-white font-display font-bold px-12 py-5 rounded-lg text-lg flex items-center gap-4 hover:bg-primary-container transition-all z-10">
                    {content.button.label}
                    <span className="font-label group-hover:translate-x-2 transition-transform">→</span>
                </a>
            </div>
        </section>
    );
}

function renderSection(section: Section) {
    const c = section.content;

    switch (section.type) {
        case 'stack_hero': return <StackHeroSection key={section.id} content={c as unknown as StackHeroContent} />;
        case 'stack_languages': return <StackLanguagesSection key={section.id} content={c as unknown as StackLanguagesContent} />;
        case 'stack_skills': return <StackSkillsSection key={section.id} content={c as unknown as StackSkillsContent} />;
        case 'stack_certifications': return <StackCertificationsSection key={section.id} content={c as unknown as StackCertificationsContent} />;
        case 'stack_cta': return <StackCtaSection key={section.id} content={c as unknown as StackCtaContent} />;
        default: return null;
    }
}

export default function Stack({ page, sections }: { page: PageData | null; sections: Section[] }) {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Head title={page?.meta_title ?? 'Stack'}>
                {page?.meta_description && <meta name="description" content={page.meta_description} />}
            </Head>
            <PortfolioNavbar
                homeUrl={home.url()}
                projectsUrl="/projects"
                stackUrl="/stack"
                processUrl="/process"
                contactUrl="/contact"
                resumeUrl="/resume"
                activeItem="stack"
            />

            <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
                {sections.map(renderSection)}
            </main>

            {/* Footer */}
            <footer className="w-full py-12 bg-surface-container-low">
                <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-12 max-w-screen-2xl mx-auto">
                    <p className="font-label text-[11px] uppercase tracking-widest text-[#151c27]/40 text-center md:text-left mb-6 md:mb-0">
                        © 2024 Precision Artisan. Built with High-Performance Intent.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
                        <a className="font-label text-[11px] uppercase tracking-widest text-[#151c27]/40 hover:text-[#bc0003] transition-all opacity-80 hover:opacity-100" href="#">
                            GitHub
                        </a>
                        <a className="font-label text-[11px] uppercase tracking-widest text-[#151c27]/40 hover:text-[#bc0003] transition-all opacity-80 hover:opacity-100" href="#">
                            LinkedIn
                        </a>
                        <a className="font-label text-[11px] uppercase tracking-widest text-[#151c27]/40 hover:text-[#bc0003] transition-all opacity-80 hover:opacity-100" href="#">
                            Source
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

