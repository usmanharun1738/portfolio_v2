import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

const heroImageUrl = '/hero-img.png';

export default function Welcome() {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        document.documentElement.style.colorScheme = 'light';
    }, []);

    return (
        <>
            <Head title="ARTISAN | Usman Haruna Portfolio">
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
                <header className="glass-nav fixed top-0 right-0 left-0 z-50 border-b border-outline-variant/15">
                    <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
                        <div className="font-display text-xl font-bold tracking-tight">
                            ARTISAN
                        </div>
                        <nav className="hidden items-center gap-8 md:flex">
                            <a className="font-mono text-[10px] tracking-[0.2em] text-primary" href="#home">
                                HOME
                            </a>
                            <a className="font-mono text-[10px] tracking-[0.2em] text-on-surface-variant hover:text-on-surface" href="#stack">
                                STACK
                            </a>
                            <a className="font-mono text-[10px] tracking-[0.2em] text-on-surface-variant hover:text-on-surface" href="#process">
                                PROCESS
                            </a>
                            <a className="font-mono text-[10px] tracking-[0.2em] text-on-surface-variant hover:text-on-surface" href="#contact">
                                CONTACT
                            </a>
                            <a className="font-mono text-[10px] tracking-[0.2em] text-on-surface-variant hover:text-on-surface" href="#projects">
                                PROJECTS
                            </a>
                        </nav>
                        <a
                            className="rounded-md bg-primary px-5 py-2 font-mono text-[10px] font-semibold tracking-[0.2em] text-on-primary transition-colors hover:bg-primary-container"
                            href="#contact"
                        >
                            HIRE ME
                        </a>
                    </div>
                </header>

                <main>
                    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-surface pt-20">
                        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
                            <div className="z-10 lg:col-span-7">
                                <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
                                    Precision Web &amp; App Engineering
                                </p>
                                <h1 className="font-display mb-8 text-6xl leading-[0.9] font-bold tracking-tight text-on-surface md:text-8xl">
                                    Usman <br /> Haruna.
                                </h1>
                                <div className="mb-10 flex flex-wrap gap-4">
                                    <span className="rounded-full bg-surface-container-low px-4 py-1 font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
                                        Web Developer
                                    </span>
                                    <span className="rounded-full bg-surface-container-low px-4 py-1 font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
                                        Mobile App Developer
                                    </span>
                                    <span className="rounded-full bg-surface-container-low px-4 py-1 font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
                                        AI Enthusiast
                                    </span>
                                </div>
                                <p className="mb-12 max-w-xl text-xl leading-relaxed text-on-surface-variant">
                                    Crafting high-performance digital ecosystems with an artisan&apos;s touch.
                                    Specializing in technical precision and editorial-grade user experiences.
                                </p>
                                <div className="flex items-center gap-8">
                                    <a
                                        className="rounded-lg bg-primary px-8 py-4 text-sm font-bold tracking-tight text-on-primary transition-all hover:shadow-xl hover:shadow-primary/20"
                                        href="#projects"
                                    >
                                        View Portfolio
                                    </a>
                                    <a className="group flex items-center gap-2 font-mono text-xs tracking-widest text-on-surface uppercase" href="#process">
                                        The Process{' '}
                                        <span className="transition-transform group-hover:translate-x-1">→</span>
                                    </a>
                                </div>
                            </div>

                            <div className="relative lg:col-span-5">
                                <div className="relative aspect-4/5 w-full rotate-2 overflow-hidden rounded-2xl shadow-2xl transition-transform duration-700 hover:rotate-0">
                                    <img
                                        src={heroImageUrl}
                                        alt="Artisan Showcase"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-on-surface/40 to-transparent" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 z-20 hidden rounded-xl bg-surface-container-highest p-6 shadow-xl md:block">
                                    <div className="mb-2 font-mono text-[10px] text-primary">
                                        SYSTEM_STATUS
                                    </div>
                                    <div className="font-display text-2xl font-bold tracking-tight text-on-surface">
                                        Optimized
                                    </div>
                                    <div className="mt-3 h-1 w-16 bg-primary" />
                                </div>
                            </div>
                        </div>

                        <div className="pointer-events-none absolute -bottom-24 -left-20 select-none text-[20rem] font-bold text-on-surface/2">
                            PRECISION
                        </div>
                    </section>

                    <section id="projects" className="bg-surface-container-low py-32">
                        <div className="mx-auto w-full max-w-7xl px-6">
                            <div className="mb-20 flex flex-col items-end justify-between gap-6 md:flex-row">
                                <div>
                                    <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
                                        Selected Output
                                    </p>
                                    <h2 className="font-display text-4xl font-bold tracking-tight text-on-surface">
                                        Signature Work
                                    </h2>
                                </div>
                                <div className="mx-8 hidden h-px grow bg-outline-variant/15 md:block" />
                                <p className="font-mono text-xs tracking-widest text-on-surface-variant uppercase">
                                    projects (24)
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                                <div className="group relative h-125 overflow-hidden rounded-2xl bg-surface-container md:col-span-8">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa6VQ6S5mtQ9G1k94B7wj9siRI5U9h8rwtr5cnmGAbLj9eJZCLw1HgZxgBOtkz0KhfXdUkj78ZvALPctcGVVVzXTgnpXZxaCKfsJoKXIl5pArNEh2WI7vcAGAlZd2_76_QHax2WtGWo3kGyHdbf25o1rpP1XmewueeXAHoCth1GmmY9PMwGx6Pu4N4OHjsLnR02R-dP5EIYC6lLH8AEQrNBDOZPlLVuTT-k9NWf_yHQLxEujXP1Ec9KcyYUsb3-C0FZGfreTFTxr0"
                                        alt="Fintech Platform"
                                        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-on-surface via-on-surface/20 to-transparent opacity-80" />
                                    <div className="absolute bottom-0 w-full p-10">
                                        <span className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-primary-fixed uppercase">
                                            Fintech / Mobile
                                        </span>
                                        <h3 className="font-display mb-4 text-3xl font-bold tracking-tight text-on-primary-container">
                                            Vanguard Assets
                                        </h3>
                                        <p className="mb-6 max-w-md text-on-primary-container/70">
                                            A high-performance wealth management platform built for speed and visual clarity.
                                        </p>
                                        <a className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-on-primary-container uppercase" href="#">
                                            Case Study{' '}
                                            <span className="material-symbols-outlined text-sm">
                                                arrow_forward
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <div className="group relative h-125 overflow-hidden rounded-2xl bg-surface-container md:col-span-4">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxggUAggawb5IbPFv2WkUcFz3lzBYj7c-iXjyNlp2hv-6TOTNFsLHBlaqz9upGHJVgikoGC3Z0WndFkLbrmda25wl-hvWLLix5slqEcXbUYvooDS5nzdbsqfruo64ONPdbA1xSprHYwOB_AcD4bPakp3X3XXVub0WjBrfLMc1wT6Bw-hmKUi9S54OFNz3ugpdj3NISDZvm98hDdK7dz1IPCd2XMXP6oPN4i6Ri9vfSXf0wa3v__QVFkeDs-x2LbqarkGhiubVAEwY"
                                        alt="Lifestyle App"
                                        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-on-surface/40 transition-colors group-hover:bg-on-surface/20" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-10">
                                        <span className="mb-2 font-mono text-[10px] tracking-[0.2em] text-white uppercase">
                                            E-Commerce
                                        </span>
                                        <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                                            Noir Studio
                                        </h3>
                                    </div>
                                </div>

                                <div className="group relative h-100 overflow-hidden rounded-2xl bg-surface-container md:col-span-5">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC00Jg72DLiC22hsTtlqr667iB8mnxtfMzVJ5KteR4KdU174AvubB5YIGzn4A4_jRWryF3KGQ0V7mE23SUIB-Zdee0817h6RVP1MuKi_T4rysUbX_ldmiNVBp8gYP56fg7eTJnsd_ZiTDHQ-WwAWFUzz02eD1AC7s_UIDHb-dz0yrHWGCL4dLK4zo5D9Lt1OYaqiWLhmNH1rL9jZIqgJHWflzVBUSAwY7--fwQ9NYO3fxDYC2V1eqTemNa1uNXe26wifnSKoLDq72U"
                                        alt="AI Experiment"
                                        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-on-surface/60 transition-colors group-hover:bg-on-surface/30" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-10">
                                        <span className="mb-2 font-mono text-[10px] tracking-[0.2em] text-white uppercase">
                                            Research / AI
                                        </span>
                                        <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                                            Neural Canvas
                                        </h3>
                                    </div>
                                </div>

                                <div className="group relative h-100 overflow-hidden rounded-2xl bg-surface-container md:col-span-7">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRA234YGYhVfPxVK8if-tV9Nmp1Kkn1byLx2D0ddSjMwwvrtdGNDVcdSrfIRB6KNJSnTisTB6-DfgSQbUXNt6BKzoqkowBlzPZaw6VEkw4eUyfo41_0KNqFPW8kzDT3rKFmhQ6FHpYVJY6QQmKQYRKlTk2xB8rxTxSm791yTRTgg44TYrrDq0jJ1HYyldh5Kj61dtnAKmNdJBl4fTqMtld5VWp9Ja82mJ7yj5ukGtT9uPJ7YJolZ07LFChOnw6mGVi7TzwtH-DzDE"
                                        alt="SaaS Platform"
                                        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-on-surface/60 transition-colors group-hover:bg-on-surface/30" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-10">
                                        <span className="mb-2 font-mono text-[10px] tracking-[0.2em] text-white uppercase">
                                            Web Application
                                        </span>
                                        <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                                            Quantify Pro
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="stack" className="bg-surface py-32">
                        <div className="mx-auto w-full max-w-7xl px-6">
                            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                                <div>
                                    <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
                                        Engineering Toolkit
                                    </p>
                                    <h2 className="font-display mb-8 text-5xl leading-tight font-bold tracking-tight text-on-surface">
                                        Built on a foundation of performance.
                                    </h2>
                                    <p className="mb-10 text-lg leading-relaxed text-on-surface-variant">
                                        The artisan&apos;s tools are as important as the hand that wields them. I leverage a modern stack focused on scalability, security, and exceptional user delight.
                                    </p>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <div className="mb-1 text-4xl font-bold text-primary">08+</div>
                                            <div className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
                                                Years Experience
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mb-1 text-4xl font-bold text-primary">120+</div>
                                            <div className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
                                                Projects Shipped
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="group rounded-xl bg-surface-container-low p-8 transition-colors hover:bg-surface-container">
                                        <div className="mb-4 flex items-center justify-between">
                                            <h4 className="font-display text-xl font-bold text-on-surface">
                                                Web Architecture
                                            </h4>
                                            <span className="material-symbols-outlined text-primary transition-transform group-hover:rotate-45">
                                                code
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="rounded border border-outline-variant/30 px-2 py-1 font-mono text-[10px]">
                                                React
                                            </span>
                                            <span className="rounded border border-outline-variant/30 px-2 py-1 font-mono text-[10px]">
                                                Next.js
                                            </span>
                                            <span className="rounded border border-outline-variant/30 px-2 py-1 font-mono text-[10px]">
                                                TypeScript
                                            </span>
                                            <span className="rounded border border-outline-variant/30 px-2 py-1 font-mono text-[10px]">
                                                Tailwind CSS
                                            </span>
                                        </div>
                                    </div>

                                    <div className="group rounded-xl bg-surface-container-low p-8 transition-colors hover:bg-surface-container">
                                        <div className="mb-4 flex items-center justify-between">
                                            <h4 className="font-display text-xl font-bold text-on-surface">
                                                Mobile Systems
                                            </h4>
                                            <span className="material-symbols-outlined text-primary transition-transform group-hover:rotate-45">
                                                smartphone
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="rounded border border-outline-variant/30 px-2 py-1 font-mono text-[10px]">
                                                React Native
                                            </span>
                                            <span className="rounded border border-outline-variant/30 px-2 py-1 font-mono text-[10px]">
                                                Flutter
                                            </span>
                                            <span className="rounded border border-outline-variant/30 px-2 py-1 font-mono text-[10px]">
                                                Swift
                                            </span>
                                        </div>
                                    </div>

                                    <div className="group rounded-xl bg-surface-container-low p-8 transition-colors hover:bg-surface-container">
                                        <div className="mb-4 flex items-center justify-between">
                                            <h4 className="font-display text-xl font-bold text-on-surface">
                                                AI &amp; Logic
                                            </h4>
                                            <span className="material-symbols-outlined text-primary transition-transform group-hover:rotate-45">
                                                neurology
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="rounded border border-outline-variant/30 px-2 py-1 font-mono text-[10px]">
                                                TensorFlow
                                            </span>
                                            <span className="rounded border border-outline-variant/30 px-2 py-1 font-mono text-[10px]">
                                                PyTorch
                                            </span>
                                            <span className="rounded border border-outline-variant/30 px-2 py-1 font-mono text-[10px]">
                                                LLM Integration
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="process" className="relative overflow-hidden bg-on-surface py-32 text-background">
                        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                            <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
                                Methodology
                            </p>
                            <h2 className="font-display mb-20 text-4xl font-bold tracking-tight md:text-6xl">
                                How I Architect Value.
                            </h2>

                            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                                <div className="relative">
                                    <span className="font-display absolute -top-12 -left-6 text-8xl font-bold text-background/10">
                                        01
                                    </span>
                                    <div className="relative">
                                        <h4 className="font-display mb-4 text-2xl font-bold text-primary">
                                            Discovery
                                        </h4>
                                        <p className="leading-relaxed text-background/60">
                                            Deep diving into the business logic, user pain points, and technical requirements before a single line of code is written.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <span className="font-display absolute -top-12 -left-6 text-8xl font-bold text-background/10">
                                        02
                                    </span>
                                    <div className="relative">
                                        <h4 className="font-display mb-4 text-2xl font-bold text-primary">
                                            Execution
                                        </h4>
                                        <p className="leading-relaxed text-background/60">
                                            Rapid prototyping followed by high-fidelity development using clean, modular, and well-documented codebases.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <span className="font-display absolute -top-12 -left-6 text-8xl font-bold text-background/10">
                                        03
                                    </span>
                                    <div className="relative">
                                        <h4 className="font-display mb-4 text-2xl font-bold text-primary">
                                            Refinement
                                        </h4>
                                        <p className="leading-relaxed text-background/60">
                                            Continuous testing, optimization for lighthouse scores, and performance tuning to ensure 99.9% uptime and speed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-64 -right-64 h-150 w-150 rounded-full border border-primary/20 opacity-20" />
                    </section>

                    <section id="contact" className="bg-background py-32">
                        <div className="mx-auto w-full max-w-7xl px-6">
                            <div className="relative overflow-hidden rounded-3xl bg-surface-container-low p-8 md:p-20">
                                <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
                                    <div>
                                        <h2 className="font-display mb-6 text-5xl font-bold tracking-tight text-on-surface">
                                            Ready to build something elite?
                                        </h2>
                                        <p className="mb-10 text-lg text-on-surface-variant">
                                            Currently accepting new projects for Q3 2024. Let&apos;s discuss your next breakthrough.
                                        </p>

                                        <div className="mb-10 space-y-6">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                    <span className="material-symbols-outlined text-xl text-primary">
                                                        mail
                                                    </span>
                                                </div>
                                                <span className="font-mono text-sm">
                                                    hello@usmanharuna.pro
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                    <span className="material-symbols-outlined text-xl text-primary">
                                                        location_on
                                                    </span>
                                                </div>
                                                <span className="font-mono text-sm">Global / Remote</span>
                                            </div>
                                        </div>
                                    </div>

                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full rounded-lg border-none bg-surface-container-lowest p-4 transition-all focus:ring-2 focus:ring-primary/20"
                                                />
                                            </div>

                                            <div>
                                                <label className="mb-2 block font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="w-full rounded-lg border-none bg-surface-container-lowest p-4 transition-all focus:ring-2 focus:ring-primary/20"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
                                                Message
                                            </label>
                                            <textarea
                                                rows={4}
                                                className="w-full rounded-lg border-none bg-surface-container-lowest p-4 transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            className="w-full rounded-lg bg-primary py-4 font-bold text-xs tracking-widest text-on-primary uppercase transition-colors hover:bg-primary-container"
                                        >
                                            Send Transmission
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="bg-surface-container-low text-on-surface/50">
                    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-8 py-12 md:flex-row">
                        <div className="font-display text-lg font-black tracking-tight text-on-surface">
                            ARTISAN
                        </div>
                        <div className="font-mono text-center text-[10px] tracking-widest uppercase md:text-left">
                            © 2024 Precision Artisan Portfolio. Built for performance.
                        </div>
                        <div className="flex gap-6">
                            <a className="font-mono text-[10px] tracking-widest text-on-surface/50 uppercase transition-colors hover:text-primary" href="#">
                                LinkedIn
                            </a>
                            <a className="font-mono text-[10px] tracking-widest text-on-surface/50 uppercase transition-colors hover:text-primary" href="#">
                                GitHub
                            </a>
                            <a className="font-mono text-[10px] tracking-widest text-on-surface/50 uppercase transition-colors hover:text-primary" href="#">
                                Twitter
                            </a>
                            <a className="font-mono text-[10px] tracking-widest text-on-surface/50 uppercase transition-colors hover:text-primary" href="#">
                                Dribbble
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
