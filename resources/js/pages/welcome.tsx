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

// ─── Section content shapes ──────────────────────────────────────────────────

interface HeroContent {
    eyebrow: string;
    heading: string;
    tags: string[];
    bio: string;
    cta_primary: { label: string; href: string };
    cta_secondary: { label: string; href: string };
    hero_image: string;
    status_card: { label: string; value: string };
    watermark: string;
}

interface ProjectsContent {
    eyebrow: string;
    heading: string;
    count: string;
}

interface FeaturedProject {
    id: number;
    title: string;
    category: string;
    description: string | null;
    image_url: string | null;
    icon_name: string | null;
    home_span: number | null;
    home_height: string | null;
    sort_order: number;
}

interface StatItem { value: string; label: string }
interface SkillGroup { name: string; icon: string; techs: string[] }
interface StackContent {
    eyebrow: string;
    heading: string;
    bio: string;
    stats: StatItem[];
    skill_groups: SkillGroup[];
}

interface ProcessStep { number: string; title: string; description: string }
interface ProcessContent { eyebrow: string; heading: string; steps: ProcessStep[] }

interface TestimonialItem {
    quote: string;
    name: string;
    role: string;
    company: string;
    icon: string;
}
interface TestimonialsContent {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: TestimonialItem[];
}

interface ContactContent {
    heading: string;
    subtitle: string;
    email: string;
    location: string;
}

// ─── Section components ──────────────────────────────────────────────────────

function HeroSection({ content }: { content: HeroContent }) {
    return (
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-surface pt-20">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
                <div className="z-10 lg:col-span-7">
                    <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
                        {content.eyebrow}
                    </p>
                    <h1 className="font-display mb-8 text-6xl leading-[0.9] font-bold tracking-tight text-on-surface md:text-8xl">
                        {content.heading.split('\n').map((line, i) => (
                            <span key={i}>{line}{i < content.heading.split('\n').length - 1 && <br />}</span>
                        ))}
                    </h1>
                    <div className="mb-10 flex flex-wrap gap-4">
                        {content.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-surface-container-low px-4 py-1 font-mono text-[10px] tracking-widest text-on-surface-variant uppercase"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="mb-12 max-w-xl text-xl leading-relaxed text-on-surface-variant">
                        {content.bio}
                    </p>
                    <div className="flex items-center gap-8">
                        <a
                            className="rounded-lg bg-primary px-8 py-4 text-sm font-bold tracking-tight text-on-primary transition-all hover:shadow-xl hover:shadow-primary/20"
                            href={content.cta_primary.href}
                        >
                            {content.cta_primary.label}
                        </a>
                        <a
                            className="group flex items-center gap-2 font-mono text-xs tracking-widest text-on-surface uppercase"
                            href={content.cta_secondary.href}
                        >
                            {content.cta_secondary.label}{' '}
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </a>
                    </div>
                </div>

                <div className="relative lg:col-span-5">
                    <div className="relative aspect-4/5 w-full rotate-2 overflow-hidden rounded-2xl shadow-2xl transition-transform duration-700 hover:rotate-0">
                        <img src={content.hero_image} alt="Artisan Showcase" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-on-surface/40 to-transparent" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 z-20 hidden rounded-xl bg-surface-container-highest p-6 shadow-xl md:block">
                        <div className="mb-2 font-mono text-[10px] text-primary">{content.status_card.label}</div>
                        <div className="font-display text-2xl font-bold tracking-tight text-on-surface">
                            {content.status_card.value}
                        </div>
                        <div className="mt-3 h-1 w-16 bg-primary" />
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute -bottom-24 select-none text-[20rem] font-bold text-on-surface/3">
                {content.watermark}
            </div>
        </section>
    );
}

function ProjectsSection({ content, featuredProjects }: { content: ProjectsContent; featuredProjects: FeaturedProject[] }) {
    const [first, ...rest] = featuredProjects;

    return (
        <section id="projects" className="bg-surface-container-low py-32">
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="mb-20 flex flex-col items-end justify-between gap-6 md:flex-row">
                    <div>
                        <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
                            {content.eyebrow}
                        </p>
                        <h2 className="font-display text-4xl font-bold tracking-tight text-on-surface">
                            {content.heading}
                        </h2>
                    </div>
                    <div className="mx-8 hidden h-px grow bg-outline-variant/15 md:block" />
                    <p className="font-mono text-xs tracking-widest text-on-surface-variant uppercase">
                        {content.count}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    {first && (
                        <div className={`group relative ${first.home_height ?? 'h-100'} overflow-hidden rounded-2xl bg-surface-container md:col-span-${first.home_span ?? 8}`}>
                            {first.image_url && (
                                <img src={first.image_url} alt={first.title} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-on-surface via-on-surface/20 to-transparent opacity-80" />
                            <div className="absolute bottom-0 w-full p-10">
                                <span className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-primary-fixed uppercase">{first.category}</span>
                                <h3 className="font-display mb-4 text-3xl font-bold tracking-tight text-on-primary-container">{first.title}</h3>
                                {first.description && (
                                    <p className="mb-6 max-w-md text-on-primary-container/70">{first.description}</p>
                                )}
                            </div>
                        </div>
                    )}
                    {rest.map((item) => (
                        <div key={item.id} className={`group relative ${item.home_height ?? 'h-100'} overflow-hidden rounded-2xl bg-surface-container md:col-span-${item.home_span ?? 4}`}>
                            {item.image_url && (
                                <img src={item.image_url} alt={item.title} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                            )}
                            <div className="absolute inset-0 bg-on-surface/40 transition-colors group-hover:bg-on-surface/20" />
                            <div className="absolute inset-0 flex flex-col justify-end p-10">
                                <span className="mb-2 font-mono text-[10px] tracking-[0.2em] text-white uppercase">{item.category}</span>
                                <h3 className="font-display text-2xl font-bold tracking-tight text-white">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StackSection({ content }: { content: StackContent }) {
    return (
        <section id="stack" className="bg-surface py-32">
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                    <div>
                        <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-primary uppercase">{content.eyebrow}</p>
                        <h2 className="font-display mb-8 text-5xl leading-tight font-bold tracking-tight text-on-surface">{content.heading}</h2>
                        <p className="mb-10 text-lg leading-relaxed text-on-surface-variant">{content.bio}</p>
                        <div className="grid grid-cols-2 gap-8">
                            {content.stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="mb-1 text-4xl font-bold text-primary">{stat.value}</div>
                                    <div className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {content.skill_groups.map((group) => (
                            <div key={group.name} className="group rounded-xl bg-surface-container-low p-8 transition-colors hover:bg-surface-container">
                                <div className="mb-4 flex items-center justify-between">
                                    <h4 className="font-display text-xl font-bold text-on-surface">{group.name}</h4>
                                    <span className="material-symbols-outlined text-primary transition-transform group-hover:rotate-45">{group.icon}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.techs.map((tech) => (
                                        <span key={tech} className="rounded border border-outline-variant/30 px-2 py-1 font-mono text-[10px]">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProcessSection({ content }: { content: ProcessContent }) {
    return (
        <section id="process" className="relative overflow-hidden bg-surface-container-low py-32 text-background">
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-primary uppercase">{content.eyebrow}</p>
                <h2 className="font-display mb-20 text-4xl font-bold tracking-tight text-on-surface md:text-6xl">{content.heading}</h2>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {content.steps.map((step) => (
                        <div key={step.number} className="relative">
                            <span className="font-display absolute -top-12 -left-6 text-8xl font-bold text-on-secondary-container/30">
                                {step.number}
                            </span>
                            <div className="relative">
                                <h4 className="font-display mb-4 text-2xl font-bold text-primary">{step.title}</h4>
                                <p className="leading-relaxed text-on-surface">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute -top-64 -right-64 h-150 w-150 rounded-full border border-primary/20 opacity-20" />
        </section>
    );
}

function TestimonialsSection({ content }: { content: TestimonialsContent }) {
    return (
        <section id="social-proof" className="bg-surface py-32">
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="mb-16">
                    <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-primary uppercase">{content.eyebrow}</p>
                    <h2 className="font-display mb-4 text-4xl font-bold tracking-tight text-on-surface md:text-5xl">{content.heading}</h2>
                    <p className="max-w-3xl text-lg text-on-surface-variant">{content.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {content.items.map((t) => (
                        <article
                            key={`${t.name}-${t.company}`}
                            className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-8 shadow-sm"
                        >
                            <div className="mb-6 flex items-start justify-between">
                                <span className="material-symbols-outlined text-3xl text-primary/30">format_quote</span>
                                <span className="material-symbols-outlined text-xl text-primary">{t.icon}</span>
                            </div>
                            <blockquote className="mb-8 text-on-surface">{t.quote}</blockquote>
                            <div className="border-t border-outline-variant/30 pt-5">
                                <div className="font-display text-lg font-bold text-on-surface">{t.name}</div>
                                <div className="text-sm text-on-surface-variant">{t.role}</div>
                                <div className="mt-1 font-mono text-[10px] tracking-widest text-primary uppercase">{t.company}</div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactSection({ content }: { content: ContactContent }) {
    return (
        <section id="contact" className="bg-background py-32">
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="relative overflow-hidden rounded-3xl bg-surface-container-low p-8 md:p-20">
                    <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
                        <div>
                            <h2 className="font-display mb-6 text-5xl font-bold tracking-tight text-on-surface">{content.heading}</h2>
                            <p className="mb-10 text-lg text-on-surface-variant">{content.subtitle}</p>

                            <div className="mb-10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                        <span className="material-symbols-outlined text-xl text-primary">mail</span>
                                    </div>
                                    <span className="font-mono text-sm">{content.email}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                        <span className="material-symbols-outlined text-xl text-primary">location_on</span>
                                    </div>
                                    <span className="font-mono text-sm">{content.location}</span>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">Name</label>
                                    <input type="text" className="w-full rounded-lg border-none bg-surface-container-lowest p-4 transition-all focus:ring-2 focus:ring-primary/20" />
                                </div>
                                <div>
                                    <label className="mb-2 block font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">Email</label>
                                    <input type="email" className="w-full rounded-lg border-none bg-surface-container-lowest p-4 transition-all focus:ring-2 focus:ring-primary/20" />
                                </div>
                            </div>
                            <div>
                                <label className="mb-2 block font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">Message</label>
                                <textarea rows={4} className="w-full rounded-lg border-none bg-surface-container-lowest p-4 transition-all focus:ring-2 focus:ring-primary/20" />
                            </div>
                            <button type="button" className="w-full rounded-lg bg-primary py-4 font-bold text-xs tracking-widest text-on-primary uppercase transition-colors hover:bg-primary-container">
                                Send Transmission
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Section renderer ─────────────────────────────────────────────────────────

function SectionRenderer({ section, featuredProjects }: { section: Section; featuredProjects: FeaturedProject[] }) {
    const c = section.content;
    switch (section.type) {
        case 'hero': return <HeroSection content={c as unknown as HeroContent} />;
        case 'projects': return <ProjectsSection content={c as unknown as ProjectsContent} featuredProjects={featuredProjects} />;
        case 'stack': return <StackSection content={c as unknown as StackContent} />;
        case 'process': return <ProcessSection content={c as unknown as ProcessContent} />;
        case 'testimonials': return <TestimonialsSection content={c as unknown as TestimonialsContent} />;
        case 'contact': return <ContactSection content={c as unknown as ContactContent} />;
        default: return null;
    }
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function Welcome({
    page,
    sections,
    featuredProjects,
}: {
    page: PageData | null;
    sections: Section[];
    featuredProjects: FeaturedProject[];
}) {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        document.documentElement.style.colorScheme = 'light';
    }, []);

    const metaTitle = page?.meta_title ?? 'ARTISAN | Usman Haruna Portfolio';

    return (
        <>
            <Head title={metaTitle}>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="bg-background font-sans text-on-surface antialiased">
                <PortfolioNavbar
                    homeUrl={home.url()}
                    projectsUrl="/projects"
                    stackUrl="/stack"
                    processUrl="/process"
                    contactUrl="/contact"
                    resumeUrl="/resume"
                    activeItem="home"
                />

                <main>
                    {sections.map((section) => (
                        <SectionRenderer key={section.id} section={section} featuredProjects={featuredProjects} />
                    ))}
                </main>

                <footer className="bg-surface-container-low text-on-surface/50">
                    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-8 py-12 md:flex-row">
                        <div className="font-display text-lg font-black tracking-tight text-on-surface">ARTISAN</div>
                        <div className="font-mono text-center text-[10px] tracking-widest uppercase md:text-left">
                            © 2026 The Artisan Stack . Built for performance.
                        </div>
                        <div className="flex gap-6">
                            {(['LinkedIn', 'GitHub', 'Twitter'] as const).map((social) => (
                                <a
                                    key={social}
                                    className="font-mono text-[10px] tracking-widest text-on-surface/50 uppercase transition-colors hover:text-primary"
                                    href="https://github.com/usmanharun1738"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

