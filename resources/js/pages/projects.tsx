import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
import { PortfolioNavbar } from '@/components/portfolio-navbar';
import { home } from '@/routes';

interface Project {
    id: number;
    title: string;
    slug: string | null;
    display_number: string;
    category: string;
    description: string | null;
    tech_stack: string[] | null;
    case_study_route: string | null;
    image_url: string | null;
    icon_name: string | null;
    card_style: string;
    grid_span: number;
    is_featured_on_home: boolean;
    is_visible: boolean;
    sort_order: number;
}

function caseStudyUrl(project: Project): string | null {
    if (!project.slug) return null;
    return `/projects/${project.slug}`;
}

function FeaturedCard({ project }: { project: Project }) {
    const url = caseStudyUrl(project);
    const inner = (
        <article className="group relative overflow-hidden bg-surface-container-low transition-all duration-500 hover:shadow-2xl hover:shadow-on-surface/5 md:col-span-8">
            <div className="flex h-full min-h-125 flex-col justify-between p-10 md:p-16">
                <div>
                    <div className="mb-6 font-mono text-[10px] tracking-widest text-tertiary uppercase">
                        {project.display_number} - {project.category}
                    </div>
                    <h2 className="font-display mb-4 text-4xl font-bold transition-colors group-hover:text-primary">
                        {project.title}
                    </h2>
                    {project.description && (
                        <p className="mb-8 max-w-md leading-relaxed text-secondary">{project.description}</p>
                    )}
                    {project.tech_stack && (
                        <div className="flex flex-wrap gap-2">
                            {project.tech_stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-surface-container px-3 py-1 font-mono text-[10px] tracking-wider text-on-surface-variant uppercase"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                {url && (
                    <div className="mt-8 flex items-center gap-4">
                        View Case Study
                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
                            trending_flat
                        </span>
                    </div>
                )}
            </div>
            {project.image_url && (
                <div className="absolute right-0 bottom-0 opacity-10 transition-opacity group-hover:opacity-20">
                    <img
                        src={project.image_url}
                        alt={project.title}
                        className="h-auto w-64 rotate-12 transform"
                    />
                </div>
            )}
        </article>
    );

    if (url) {
        return (
            <Link
                className={`group overflow-hidden bg-surface-container transition-all duration-500 hover:bg-surface-container-high md:col-span-${project.grid_span}`}
                href={url}
            >
                {inner}
            </Link>
        );
    }

    return (
        <div className={`md:col-span-${project.grid_span}`}>
            {inner}
        </div>
    );
}

function CompactCard({ project }: { project: Project }) {
    const url = caseStudyUrl(project);

    if (url) {
        return (
            <Link
                href={url}
                className={`group overflow-hidden bg-surface-container transition-all duration-500 hover:bg-surface-container-high md:col-span-${project.grid_span}`}
            >
                <article className="flex h-full flex-col p-10">
                    <div className="mb-6 font-mono text-[10px] tracking-widest text-tertiary uppercase">
                        {project.display_number} - {project.category}
                    </div>
                    <h2 className="font-display mb-4 text-2xl font-bold">{project.title}</h2>
                    {project.description && (
                        <p className="mb-8 text-sm leading-relaxed text-secondary">{project.description}</p>
                    )}
                    <div className="mt-auto">
                        {project.tech_stack && (
                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.tech_stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="border border-outline-variant px-2 py-0.5 font-mono text-[9px] text-on-surface-variant uppercase"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                        <span className="material-symbols-outlined text-primary transition-transform group-hover:translate-x-2">
                            arrow_outward
                        </span>
                    </div>
                </article>
            </Link>
        );
    }

    return (
        <article
            className={`group overflow-hidden border border-outline-variant/15 bg-surface-container-lowest transition-all duration-500 hover:shadow-xl md:col-span-${project.grid_span}`}
        >
            <div className="flex h-full flex-col p-10">
                <div className="mb-6 font-mono text-[10px] tracking-widest text-tertiary uppercase">
                    {project.display_number} - {project.category}
                </div>
                <h2 className="font-display mb-4 text-2xl font-bold">{project.title}</h2>
                {project.description && (
                    <p className="mb-8 text-sm leading-relaxed text-secondary">{project.description}</p>
                )}
                {project.tech_stack && (
                    <div className="mt-auto flex flex-wrap gap-2">
                        {project.tech_stack.map((tech) => (
                            <span key={tech} className="font-mono text-[9px] font-bold text-primary uppercase">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}

function DarkCard({ project }: { project: Project }) {
    return (
        <article
            className={`group relative overflow-hidden bg-on-surface text-surface-bright transition-all duration-500 md:col-span-${project.grid_span}`}
        >
            <div className="flex h-full flex-col justify-center p-10 md:p-16">
                <div className="max-w-lg">
                    <div className="mb-6 font-mono text-[10px] tracking-widest text-surface-variant uppercase">
                        {project.display_number} - {project.category}
                    </div>
                    <h2 className="font-display mb-6 text-4xl font-bold text-white transition-colors group-hover:text-primary-fixed">
                        {project.title}
                    </h2>
                    {project.description && (
                        <p className="mb-8 leading-relaxed text-surface-variant">{project.description}</p>
                    )}
                    {project.tech_stack && (
                        <div className="flex flex-wrap gap-4">
                            {project.tech_stack.map((tech) => (
                                <div key={tech} className="flex items-center gap-2 font-mono text-[10px] uppercase">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    {tech}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {project.icon_name && (
                <div className="absolute top-0 right-0 p-8">
                    <span className="material-symbols-outlined text-6xl text-surface-variant/20">
                        {project.icon_name}
                    </span>
                </div>
            )}
        </article>
    );
}

function StandardCard({ project }: { project: Project }) {
    if (project.icon_name) {
        return (
            <article
                className={`group overflow-hidden border border-outline-variant/15 bg-white transition-all duration-500 hover:shadow-xl md:col-span-${project.grid_span}`}
            >
                <div className="flex h-full flex-col p-10">
                    <div className="mb-6 font-mono text-[10px] tracking-widest text-tertiary uppercase">
                        {project.display_number} - {project.category}
                    </div>
                    <h2 className="font-display mb-4 text-2xl font-bold">{project.title}</h2>
                    {project.description && (
                        <p className="mb-8 leading-relaxed text-secondary">{project.description}</p>
                    )}
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex gap-4">
                            <span className="material-symbols-outlined text-on-surface-variant">{project.icon_name}</span>
                        </div>
                        {project.tech_stack && (
                            <span className="font-mono text-[10px] font-bold text-primary transition-all group-hover:mr-4">
                                {project.tech_stack.join(' / ')}
                            </span>
                        )}
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article
            className={`group overflow-hidden bg-surface-container-low transition-all duration-500 hover:bg-surface-container md:col-span-${project.grid_span}`}
        >
            <div className="flex h-full flex-col p-10">
                <div className="mb-6 font-mono text-[10px] tracking-widest text-tertiary uppercase">
                    {project.display_number} - {project.category}
                </div>
                <h2 className="font-display mb-4 text-2xl font-bold">{project.title}</h2>
                {project.description && (
                    <p className="mb-8 leading-relaxed text-secondary">{project.description}</p>
                )}
                <div className="mt-auto">
                    <div className="mb-6 h-1 w-12 bg-primary transition-all group-hover:w-24" />
                    {project.tech_stack && (
                        <div className="font-mono text-[10px] text-on-surface-variant uppercase">
                            {project.tech_stack.join(' / ')}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

function ProjectCard({ project }: { project: Project }) {
    switch (project.card_style) {
        case 'featured':
            return <FeaturedCard project={project} />;
        case 'compact':
            return <CompactCard project={project} />;
        case 'dark':
            return <DarkCard project={project} />;
        default:
            return <StandardCard project={project} />;
    }
}

export default function Projects({ projects }: { projects: Project[] }) {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        document.documentElement.style.colorScheme = 'light';
    }, []);

    return (
        <>
            <Head title="Projects | Usman Haruna Portfolio">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&family=Inter:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
                <PortfolioNavbar
                    homeUrl={home.url()}
                    projectsUrl="/projects"
                    stackUrl="/stack"
                    processUrl="/process"
                    contactUrl="/contact"
                    resumeUrl="/resume"
                    activeItem="projects"
                />

                <main className="mx-auto max-w-screen-2xl px-8 pt-32 pb-24">
                    <header className="relative mb-20">
                        <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
                            <div className="max-w-3xl">
                                <div className="mb-4 font-mono text-xs tracking-[0.2em] text-primary uppercase">
                                    Precision Engineering
                                </div>
                                <h1 className="font-display text-on-surface text-5xl leading-none font-bold tracking-tight md:text-7xl">
                                    Selected <br /> <span className="text-primary-container">Works.</span>
                                </h1>
                            </div>
                            <div className="hidden lg:block">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAruqLq7QsYRM2v1ioSkL_-CIGbofTjBwB7gtEGU1nZwNxz1Z2lROXepTvDCP1VpZTJ6UgBLHZyQELVAH_To6H3co6KV4te8_SVt_SMRRofS7p22tGvsygBy6nJ_bYKZ073xNAZdSAeNCh4MvZgVlD-GxTHZxxjJ39yvLnZ6pgRuqcspHVtyXt8qSyhWJ0xefmrens6dZuCTiuCYya5y4AoUmO8T8JerD2Vwfca15NZd5R9Uz8939m5y_mITWWTRkYvhUVF7-z199M"
                                    alt="origami bird"
                                    className="h-auto w-48 opacity-80"
                                />
                            </div>
                        </div>
                        <div className="mt-8 h-px w-full bg-outline-variant opacity-20" />
                    </header>

                    <section>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </section>

                    <section className="mt-32 text-center">
                        <div className="relative overflow-hidden bg-surface-container-high px-8 py-24">
                            <div className="relative z-10">
                                <h2 className="font-display mb-8 text-4xl font-bold md:text-5xl">Ready to start a project?</h2>
                                <p className="mx-auto mb-12 max-w-xl text-secondary">
                                    Whether it&apos;s an AI tool or a global management system, let&apos;s build something exceptional together.
                                </p>
                                <a
                                    className="inline-block bg-primary px-10 py-4 font-mono text-sm tracking-[0.2em] text-white uppercase transition-all hover:bg-primary-container hover:shadow-2xl"
                                    href={`${home.url()}#contact`}
                                >
                                    Get in Touch
                                </a>
                            </div>
                            <div className="absolute -bottom-10 -left-10 opacity-5">
                                <span className="material-symbols-outlined text-[300px]">ink_pen</span>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="w-full bg-slate-50 px-8 py-12">
                    <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-6 border-t border-slate-100 pt-12 md:flex-row">
                        <div className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                            © 2024 Artisan Developer. Built with precision.
                        </div>
                        <div className="flex gap-8 font-mono text-[10px] tracking-widest uppercase">
                            <a className="text-slate-400 transition-colors duration-200 hover:translate-x-1 hover:text-red-600" href="#">
                                Twitter
                            </a>
                            <a className="text-slate-400 transition-colors duration-200 hover:translate-x-1 hover:text-red-600" href="#">
                                GitHub
                            </a>
                            <a className="text-slate-400 transition-colors duration-200 hover:translate-x-1 hover:text-red-600" href="#">
                                LinkedIn
                            </a>
                            <a className="text-slate-400 transition-colors duration-200 hover:translate-x-1 hover:text-red-600" href="#">
                                RSS
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
