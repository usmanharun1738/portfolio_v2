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

interface ProcessHeroContent {
    eyebrow: string;
    heading: string;
    bio: string;
}

interface TechColumn {
    icon: string;
    title: string;
    items: string[];
}

interface StatCard {
    icon: string;
    title: string;
    body: string;
}

interface DeployTech {
    name: string;
    label: string;
}

interface ProcessStep {
    number: string;
    title: string;
    description: string;
    deliverables: string[];
    tools: string[];
    image_url?: string;
    image_alt?: string;
    tech_columns?: TechColumn[];
    stat_card?: StatCard;
    deploy_tech?: DeployTech[];
}

interface ProcessStepsContent {
    items: ProcessStep[];
}

interface StatItem {
    value: string;
    label: string;
}

interface ProcessPhilosophyContent {
    heading: string;
    body: string;
    button: { label: string; href: string };
    stats: StatItem[];
}

function normalizeProcessStep(step: ProcessStep, index: number) {
    const fallbackNumber = String(index + 1).padStart(2, '0');

    return {
        number: step.number || fallbackNumber,
        title: step.title || `Process Step ${fallbackNumber}`,
        description: step.description || '',
        deliverables: Array.isArray(step.deliverables) ? step.deliverables : [],
        tools: Array.isArray(step.tools) ? step.tools : [],
        tech_columns: Array.isArray(step.tech_columns) ? step.tech_columns : [],
        deploy_tech: Array.isArray(step.deploy_tech) ? step.deploy_tech : [],
        stat_card: step.stat_card,
        image_url: step.image_url,
        image_alt: step.image_alt,
    };
}

// ─── Section components ───────────────────────────────────────────────────────

function ProcessHeroSection({ content }: { content: ProcessHeroContent }) {
    return (
        <section className="max-w-7xl mx-auto px-8 mb-24">
            <div className="max-w-3xl">
                <p className="font-label text-primary uppercase tracking-widest text-[0.6875rem] mb-4">
                    {content.eyebrow}
                </p>
                <h1 className="font-display text-5xl md:text-7xl font-extrabold text-on-surface mb-8 leading-[1.1]">
                    {content.heading.split('\n').map((part, i, arr) => (
                        <span key={i}>{i === 0 ? part : <span className="text-primary-container">{part}</span>}{i < arr.length - 1 ? ' ' : ''}</span>
                    ))}
                </h1>
                <p className="text-xl text-on-surface/70 leading-relaxed">{content.bio}</p>
            </div>
        </section>
    );
}

function ProcessStepImage({ step }: { step: ProcessStep }) {
    if (!step.image_url) {
        return (
            <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-surface-container-low md:h-[22rem]">
                <div className="w-full h-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-5xl text-surface-variant">image_not_supported</span>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-surface-container-low via-transparent to-transparent"></div>
            </div>
        );
    }

    return (
        <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-surface-container-low md:h-[22rem]">
            <img
                src={step.image_url}
                alt={step.image_alt ?? step.title ?? 'Process step image'}
                className="block h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white/70 via-transparent to-transparent"></div>
        </div>
    );
}

function ProcessStepItem({ step, index }: { step: ProcessStep; index: number }) {
    const normalizedStep = normalizeProcessStep(step, index);
    const isEven = index % 2 === 0;

    if (normalizedStep.tech_columns.length > 0) {
        return (
            <div className="relative p-12 md:p-20">
                <div className="max-w-4xl mx-auto relative">
                    <div className="pointer-events-none absolute -top-10 -left-6 z-0 font-label text-[7rem] leading-none font-bold text-primary/20 select-none md:-top-12 md:-left-8 md:text-[10rem]">
                        {normalizedStep.number}
                    </div>
                    <div className="relative z-10 pt-8">
                        <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8">{normalizedStep.title}</h2>
                        <p className="text-xl text-on-surface/70 mb-12 leading-relaxed">{normalizedStep.description}</p>
                        <div className="mb-12">
                            <ProcessStepImage step={normalizedStep} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {normalizedStep.tech_columns.map((col) => (
                                <div key={col.title} className="group bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default text-center">
                                    <span className="material-symbols-outlined text-primary mb-4 block text-3xl group-hover:scale-110 transition-transform duration-300">{col.icon}</span>
                                    <h5 className="font-display font-bold mb-4">{col.title}</h5>
                                    <ul className="space-y-2 text-sm text-on-surface/60">
                                        {col.items.map((item) => (
                                            <li key={item} className="group-hover:text-on-surface/80 transition-colors duration-200">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (normalizedStep.deploy_tech.length > 0) {
        return (
            <div className="max-w-4xl mx-auto text-center space-y-8 relative">
                <div className="pointer-events-none font-label text-[6rem] leading-none font-bold text-primary/20 select-none md:text-[8rem]">
                    {normalizedStep.number}
                </div>
                <h2 className="font-display text-4xl font-extrabold -mt-16">{normalizedStep.title}</h2>
                <p className="text-xl text-on-surface/70">{normalizedStep.description}</p>
                <div className="mx-auto w-full max-w-3xl">
                    <ProcessStepImage step={normalizedStep} />
                </div>
                <div className="flex flex-wrap justify-center gap-12 pt-8">
                    {normalizedStep.deploy_tech.map((tech) => (
                        <div key={tech.name} className="text-center">
                            <p className="font-label text-2xl font-bold text-primary">{tech.name}</p>
                            <p className="text-[10px] uppercase tracking-widest text-on-surface/50 font-label">{tech.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-start${normalizedStep.stat_card ? ' items-center' : ''}`}>
            <div className={`md:col-span-5 relative${isEven ? '' : ' order-1 md:order-2 md:pl-12'}`}>
                <div className={`pointer-events-none absolute -top-10 z-0 font-label text-[7rem] leading-none font-bold text-primary/20 select-none md:-top-12 md:text-[10rem] ${isEven ? '-left-6 md:-left-8' : '-right-6 md:right-0'}`}>
                    {normalizedStep.number}
                </div>
                <div className="relative z-10 pt-8">
                    <h2 className="font-display text-3xl font-bold mb-6">{normalizedStep.title}</h2>
                    <p className="text-on-surface/70 text-lg mb-8 leading-relaxed">{normalizedStep.description}</p>
                    {normalizedStep.deliverables.length > 0 && (
                        <div className="space-y-4">
                            <h4 className="font-label text-xs uppercase tracking-widest text-primary font-bold">Deliverables</h4>
                            <ul className="space-y-2 font-body text-sm text-on-surface/80">
                                {normalizedStep.deliverables.map((d) => (
                                    <li key={d} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {normalizedStep.tools.length > 0 && (
                        <div className="space-y-4">
                            <h4 className="font-label text-xs uppercase tracking-widest text-primary font-bold">Tools Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {normalizedStep.tools.map((tool) => (
                                    <span key={tool} className="bg-surface-container-lowest px-3 py-1 rounded-full font-label text-[10px] border border-outline-variant/20">{tool}</span>
                                ))}
                            </div>
                        </div>
                    )}
                    {normalizedStep.stat_card && (
                        <div className="p-6 bg-surface-container-low rounded-xl flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary">{normalizedStep.stat_card.icon}</span>
                            <div>
                                <p className="font-display font-bold text-sm">{normalizedStep.stat_card.title}</p>
                                <p className="text-xs text-on-surface/60">{normalizedStep.stat_card.body}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={`md:col-span-7 self-center${isEven ? '' : ' order-2 md:order-1'}`}>
                <ProcessStepImage step={normalizedStep} />
            </div>
        </div>
    );
}

function ProcessStepsSection({ content }: { content: ProcessStepsContent }) {
    return (
        <section className="max-w-7xl mx-auto px-8 space-y-32">
            {content.items.map((step, index) => (
                <ProcessStepItem key={step.number ?? `step-${index}`} step={step} index={index} />
            ))}
        </section>
    );
}

function ProcessPhilosophySection({ content }: { content: ProcessPhilosophyContent }) {
    return (
        <section className="max-w-7xl mx-auto px-8 mt-48">
            <div className="bg-on-surface text-surface rounded-[4rem] p-12 md:p-32 relative overflow-hidden text-center md:text-left">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
                            The <span className="text-primary-fixed-dim">{content.heading.replace('The ', '')}</span>
                        </h2>
                        <p className="text-xl text-surface/70 leading-relaxed mb-12">{content.body}</p>
                        <a href={content.button.href} className="bg-primary text-on-primary px-10 py-5 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-3 mx-auto md:mx-0 w-fit">
                            {content.button.label} <span className="material-symbols-outlined">trending_flat</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="grid grid-cols-2 gap-6">
                            {content.stats.map((stat, i) => (
                                <div key={stat.label} className={`bg-surface/10 backdrop-blur-md p-8 rounded-3xl border border-surface/5${i % 2 !== 0 ? ' mt-12' : ''}`}>
                                    <p className="font-label text-3xl font-bold text-primary-fixed-dim mb-2">{stat.value}</p>
                                    <p className="text-xs uppercase tracking-widest font-label text-surface/50">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function renderSection(section: Section) {
    const c = section.content;

    switch (section.type) {
        case 'process_hero': return <ProcessHeroSection key={section.id} content={c as unknown as ProcessHeroContent} />;
        case 'process_steps': return <ProcessStepsSection key={section.id} content={c as unknown as ProcessStepsContent} />;
        case 'process_philosophy': return <ProcessPhilosophySection key={section.id} content={c as unknown as ProcessPhilosophyContent} />;

        default: return null;
    }
}

export default function Process({ page, sections }: { page: PageData | null; sections: Section[] }) {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
    }, []);

    return (
        <div className="min-h-screen bg-surface">
            <Head title={page?.meta_title ?? 'Process'}>
                {page?.meta_description && <meta name="description" content={page.meta_description} />}
            </Head>
            <PortfolioNavbar
                homeUrl={home.url()}
                projectsUrl="/projects"
                stackUrl="/stack"
                processUrl="/process"
                contactUrl="/contact"
                resumeUrl="/resume"
                activeItem="process"
            />

            <main className="pt-32 pb-20">
                {sections.map(renderSection)}
            </main>

            {/* Footer */}
            <footer className="w-full rounded-t-3xl bg-[#f0f3ff] dark:bg-[#151c27]">
                <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full font-label text-xs uppercase tracking-widest">
                    <div className="font-display font-bold text-[#151c27] dark:text-surface text-lg mb-8 md:mb-0">
                        Usman Haruna.
                    </div>
                    <div className="flex gap-12 mb-8 md:mb-0 text-[#151c27]/50 dark:text-[#f9f9ff]/50">
                        <a className="hover:text-[#bc0003] underline underline-offset-4 transition-all duration-200" href="#">Github</a>
                        <a className="hover:text-[#bc0003] underline underline-offset-4 transition-all duration-200" href="#">LinkedIn</a>
                        <a className="hover:text-[#bc0003] underline underline-offset-4 transition-all duration-200" href="#">Twitter</a>
                        <a className="hover:text-[#bc0003] underline underline-offset-4 transition-all duration-200" href="#">Resume</a>
                    </div>
                    <div className="text-[#151c27]/50 dark:text-[#f9f9ff]/50">© 2024 Usman Haruna. Built with Precision.</div>
                </div>
            </footer>
        </div>
    );
}
