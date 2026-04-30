import { Head, Link } from '@inertiajs/react';
import {  useState } from 'react';
import type {FormEvent} from 'react';
import { PortfolioNavbar } from '@/components/portfolio-navbar';
import { home } from '@/routes';

type Metric = {
    value: string;
    label: string;
};

type ChallengeSolution = {
    title: string;
    items: string[];
    icon: string;
};

type Capability = {
    title: string;
    description: string;
    icon: string;
};

type Outcome = {
    label: string;
    before: string;
    after: string;
    improvement: string;
};

type Testimonial = {
    quote: string;
    name: string;
    role: string;
    company: string;
    icon?: string;
};

type ProjectCtaLinks = {
    videoDemoUrl: string;
    githubUrl: string;
    technicalBreakdownUrl?: string;
};

type CaseStudyTemplateProps = {
    pageTitle: string;
    activeItem?: 'projects' | 'home' | 'stack' | 'process' | 'contact' | 'resume';
    eyebrow: string;
    heading: string;
    headingAccent: string;
    summary: string;
    heroImageUrl: string;
    techStack: string[];
    overview: string[];
    metrics: Metric[];
    challenge: ChallengeSolution;
    solution: ChallengeSolution;
    outcomes?: Outcome[];
    testimonials?: Testimonial[];
    projectCtas: ProjectCtaLinks;
    quickContactEmail?: string;
    bookCallUrl?: string;
    capabilities: Capability[];
    galleryImageUrls: string[];
    backToProjectsUrl: string;
};

export function CaseStudyTemplate({
    pageTitle,
    activeItem = 'projects',
    eyebrow,
    heading,
    headingAccent,
    summary,
    heroImageUrl,
    techStack,
    overview,
    metrics,
    challenge,
    solution,
    outcomes,
    testimonials,
    projectCtas,
    quickContactEmail = 'hello@usmanharuna.pro',
    bookCallUrl = 'https://calendly.com/',
    capabilities,
    galleryImageUrls,
    backToProjectsUrl,
}: CaseStudyTemplateProps) {
    const [quickContactName, setQuickContactName] = useState('');
    const [quickContactSender, setQuickContactSender] = useState('');
    const [quickContactMessage, setQuickContactMessage] = useState('');

    const handleQuickContactSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const subject = `[Portfolio Inquiry] ${pageTitle}`;
        const body = `Name: ${quickContactName || 'N/A'}\nEmail: ${quickContactSender || 'N/A'}\n\nMessage:\n${quickContactMessage || 'Hi, I would like to discuss this project.'}`;

        window.location.href = `mailto:${quickContactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <>
            <Head title={pageTitle}>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
                <PortfolioNavbar
                    homeUrl={home.url()}
                    projectsUrl="/projects"
                    stackUrl="/stack"
                    processUrl="/process"
                    contactUrl="/contact"
                    resumeUrl="/resume"
                    activeItem={activeItem}
                />

                <main className="pt-24">
                    <section className="relative px-8 pt-20 pb-32">
                        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
                            <div className="lg:col-span-7">
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
                                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary"></span>
                                    <span className="font-mono text-[10px] font-bold tracking-widest text-primary uppercase">
                                        {eyebrow}
                                    </span>
                                </div>
                                <h1 className="mb-8 text-6xl leading-[0.9] font-extrabold tracking-tight text-on-surface md:text-8xl">
                                    {heading} <span className="text-primary italic">{headingAccent}</span>
                                </h1>
                                <p className="mb-12 max-w-2xl text-xl leading-relaxed text-secondary">{summary}</p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href={backToProjectsUrl}
                                        className="rounded-lg bg-primary px-8 py-4 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
                                    >
                                        View All Projects
                                    </Link>
                                    <a
                                        href="#overview"
                                        className="rounded-lg border border-outline-variant bg-white px-8 py-4 font-bold text-on-surface transition-all hover:bg-surface-container-low"
                                    >
                                        Read Process
                                    </a>
                                </div>
                                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    <a
                                        href={projectCtas.videoDemoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant bg-white px-4 py-3 font-mono text-[11px] tracking-widest text-on-surface uppercase transition-all hover:-translate-y-0.5 hover:border-primary"
                                    >
                                        <span className="material-symbols-outlined text-base">play_circle</span>
                                        Video Demo
                                    </a>
                                    <a
                                        href={projectCtas.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant bg-white px-4 py-3 font-mono text-[11px] tracking-widest text-on-surface uppercase transition-all hover:-translate-y-0.5 hover:border-primary"
                                    >
                                        <span className="material-symbols-outlined text-base">code</span>
                                        GitHub / Code
                                    </a>
                                    <a
                                        href={projectCtas.technicalBreakdownUrl ?? '#overview'}
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant bg-white px-4 py-3 font-mono text-[11px] tracking-widest text-on-surface uppercase transition-all hover:-translate-y-0.5 hover:border-primary"
                                    >
                                        <span className="material-symbols-outlined text-base">article</span>
                                        Breakdown
                                    </a>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-xl border border-outline-variant bg-white p-2 shadow-[0_8px_30px_rgba(21,28,39,0.08)]">
                                    <img
                                        alt="Case study hero"
                                        className="h-full w-full rounded-md object-cover"
                                        src={heroImageUrl}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="border-y border-outline-variant/40 bg-white py-12">
                        <div className="mx-auto max-w-7xl px-8">
                            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                                <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-secondary uppercase">
                                    Engine Core
                                </span>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {techStack.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-md border border-outline-variant bg-surface-container-low px-5 py-2 font-mono text-xs text-on-surface"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="overview" className="px-8 py-32">
                        <div className="mx-auto max-w-7xl">
                            <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
                                <div className="lg:col-span-8">
                                    <h2 className="mb-6 font-mono text-xs font-bold tracking-[0.4em] text-primary uppercase">
                                        01. Project Overview
                                    </h2>
                                    <div className="space-y-6 text-lg leading-relaxed text-secondary">
                                        {overview.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center gap-6 lg:col-span-4">
                                    {metrics.map((metric) => (
                                        <div key={metric.label} className="rounded-lg border-l-4 border-l-primary bg-white p-8 shadow-[0_8px_30px_rgba(21,28,39,0.08)]">
                                            <div className="mb-1 text-5xl font-extrabold text-on-surface">{metric.value}</div>
                                            <div className="font-mono text-[11px] tracking-widest text-secondary uppercase">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-surface-container-low px-8 py-32">
                        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-outline-variant/50 bg-outline-variant/40 md:grid md:grid-cols-2 md:gap-px">
                            {[challenge, solution].map((block) => (
                                <div key={block.title} className="bg-white p-12 lg:p-16">
                                    <span className="material-symbols-outlined mb-6 text-5xl text-primary">{block.icon}</span>
                                    <h3 className="mb-6 text-3xl font-bold text-on-surface">{block.title}</h3>
                                    <ul className="space-y-4 text-secondary">
                                        {block.items.map((item) => (
                                            <li key={item} className="flex gap-4">
                                                <span className="font-mono font-bold text-primary">+</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {outcomes && outcomes.length > 0 && (
                        <section className="px-8 py-32">
                            <div className="mx-auto max-w-7xl">
                                <h2 className="mb-16 font-mono text-xs font-bold tracking-[0.4em] text-primary uppercase">
                                    03. Measurable Outcomes
                                </h2>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {outcomes.map((outcome) => (
                                        <div
                                            key={outcome.label}
                                            className="rounded-xl border border-outline-variant bg-white p-8 shadow-[0_8px_30px_rgba(21,28,39,0.08)]"
                                        >
                                            <h3 className="mb-8 text-lg font-bold text-on-surface">{outcome.label}</h3>
                                            <div className="space-y-6">
                                                <div>
                                                    <div className="font-mono text-xs font-semibold tracking-widest text-secondary uppercase">
                                                        Before
                                                    </div>
                                                    <div className="mt-2 text-2xl font-bold text-secondary">{outcome.before}</div>
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-primary">arrow_downward</span>
                                                </div>
                                                <div>
                                                    <div className="font-mono text-xs font-semibold tracking-widest text-secondary uppercase">
                                                        After
                                                    </div>
                                                    <div className="mt-2 text-2xl font-bold text-on-surface">{outcome.after}</div>
                                                </div>
                                                <div className="rounded-lg bg-primary/10 px-4 py-3">
                                                    <div className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
                                                        Improvement
                                                    </div>
                                                    <div className="mt-2 text-2xl font-bold text-primary">{outcome.improvement}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {testimonials && testimonials.length > 0 && (
                        <section className="bg-white px-8 py-32">
                            <div className="mx-auto max-w-7xl">
                                <h2 className="mb-4 font-mono text-xs font-bold tracking-[0.4em] text-primary uppercase">
                                    Social Proof
                                </h2>
                                <p className="mb-16 max-w-2xl text-xl text-secondary">What stakeholders and team members are saying about the impact</p>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    {testimonials.map((testimonial) => (
                                        <div
                                            key={`${testimonial.name}-${testimonial.company}`}
                                            className="relative rounded-xl border border-outline-variant bg-surface-container-low p-10 shadow-[0_8px_30px_rgba(21,28,39,0.08)] transition-all hover:-translate-y-0.5"
                                        >
                                            <div className="mb-6 flex items-start justify-between">
                                                <span className="material-symbols-outlined text-4xl text-primary/20">format_quote</span>
                                                {testimonial.icon && (
                                                    <span className="material-symbols-outlined text-2xl text-primary">{testimonial.icon}</span>
                                                )}
                                            </div>
                                            <blockquote className="mb-8 text-lg leading-relaxed text-on-surface italic">
                                                "{testimonial.quote}"
                                            </blockquote>
                                            <div className="border-t border-outline-variant/30 pt-6">
                                                <div className="font-bold text-on-surface">{testimonial.name}</div>
                                                <div className="text-sm text-secondary">{testimonial.role}</div>
                                                <div className="font-mono text-xs tracking-wider text-tertiary uppercase">{testimonial.company}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    <section className="px-8 py-32">
                        <div className="mx-auto max-w-7xl">
                            <h2 className="mb-16 text-center font-mono text-xs font-bold tracking-[0.4em] text-primary uppercase">
                                05. Core Capabilities
                            </h2>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                {capabilities.map((feature) => (
                                    <div
                                        key={feature.title}
                                        className="rounded-xl border border-outline-variant bg-white p-10 shadow-[0_8px_30px_rgba(21,28,39,0.08)] transition-all hover:-translate-y-0.5"
                                    >
                                        <span className="material-symbols-outlined mb-6 text-primary">{feature.icon}</span>
                                        <h4 className="mb-4 text-2xl font-bold text-on-surface">{feature.title}</h4>
                                        <p className="text-secondary">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="bg-surface-container-low px-8 py-24">
                        <div className="mx-auto max-w-7xl space-y-10">
                            {galleryImageUrls[0] ? (
                                <div className="rounded-xl border border-outline-variant bg-white p-2 shadow-[0_8px_30px_rgba(21,28,39,0.08)]">
                                    <img
                                        alt="Case study gallery"
                                        className="h-[600px] w-full rounded-md object-cover"
                                        src={galleryImageUrls[0]}
                                    />
                                </div>
                            ) : null}
                            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                                {galleryImageUrls.slice(1, 3).map((imageUrl) => (
                                    <div
                                        key={imageUrl}
                                        className="rounded-xl border border-outline-variant bg-white p-2 shadow-[0_8px_30px_rgba(21,28,39,0.08)]"
                                    >
                                        <img
                                            alt="Case study detail"
                                            className="h-80 w-full rounded-md object-cover"
                                            src={imageUrl}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="border-t border-outline-variant/30 bg-white px-8 py-40 text-center">
                        <div className="mx-auto max-w-3xl">
                            <h2 className="mb-10 text-4xl font-extrabold text-on-surface">
                                Interested in the architecture?
                            </h2>
                            <Link
                                href={backToProjectsUrl}
                                className="group inline-flex items-center gap-4 font-mono text-[13px] font-bold tracking-[0.2em] text-primary uppercase transition-colors hover:text-on-surface"
                            >
                                <span className="material-symbols-outlined transition-transform group-hover:-translate-x-2">
                                    arrow_back
                                </span>
                                Back to Portfolio
                            </Link>
                        </div>
                    </section>
                </main>

                <footer className="mt-20 w-full bg-[#f0f3ff]">
                    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-12 py-16 md:flex-row">
                        <div className="font-display text-xl font-bold tracking-tighter text-primary">ARTISAN STACK</div>
                        <p className="text-center font-mono text-[11px] tracking-widest text-secondary uppercase">
                            Copyright 2024 Artisan Developer. Built with precision.
                        </p>
                        <div className="mt-4 flex gap-8 md:mt-0">
                            <a className="font-mono text-[11px] tracking-widest text-secondary uppercase transition-transform hover:translate-x-1 hover:text-primary" href="#">
                                Github
                            </a>
                            <a className="font-mono text-[11px] tracking-widest text-secondary uppercase transition-transform hover:translate-x-1 hover:text-primary" href="#">
                                LinkedIn
                            </a>
                            <a className="font-mono text-[11px] tracking-widest text-secondary uppercase transition-transform hover:translate-x-1 hover:text-primary" href="#">
                                Twitter
                            </a>
                        </div>
                    </div>
                </footer>

                <aside className="fixed right-4 bottom-4 z-50 w-[min(92vw,380px)] rounded-xl border border-outline-variant bg-white p-4 shadow-2xl shadow-on-surface/10">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase">Quick Contact</p>
                    <h3 className="mt-2 text-lg font-bold text-on-surface">Start a project conversation</h3>
                    <p className="mt-1 text-sm text-secondary">Replies within 24 hours.</p>

                    <form className="mt-4 space-y-2" onSubmit={handleQuickContactSubmit}>
                        <input
                            value={quickContactName}
                            onChange={(event) => setQuickContactName(event.target.value)}
                            type="text"
                            placeholder="Your name"
                            className="w-full rounded-md border border-outline-variant bg-surface px-3 py-2 text-sm text-on-surface"
                        />
                        <input
                            value={quickContactSender}
                            onChange={(event) => setQuickContactSender(event.target.value)}
                            type="email"
                            placeholder="Your email"
                            className="w-full rounded-md border border-outline-variant bg-surface px-3 py-2 text-sm text-on-surface"
                            required
                        />
                        <textarea
                            value={quickContactMessage}
                            onChange={(event) => setQuickContactMessage(event.target.value)}
                            rows={3}
                            placeholder="Quick project brief"
                            className="w-full resize-none rounded-md border border-outline-variant bg-surface px-3 py-2 text-sm text-on-surface"
                            required
                        />
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                type="submit"
                                className="rounded-md bg-primary px-3 py-2 text-xs font-bold tracking-wider text-white uppercase"
                            >
                                Send Message
                            </button>
                            <a
                                href={bookCallUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md border border-outline-variant bg-white px-3 py-2 text-xs font-bold tracking-wider text-on-surface uppercase"
                            >
                                Book a Call
                            </a>
                        </div>
                    </form>
                </aside>
            </div>
        </>
    );
}
