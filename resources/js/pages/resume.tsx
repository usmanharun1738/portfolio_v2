import { useEffect } from 'react';
import { PortfolioNavbar } from '@/components/portfolio-navbar';
import { home } from '@/routes';

export default function Resume() {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
    }, []);

    return (
        <div className="min-h-screen bg-surface">
            <PortfolioNavbar
                homeUrl={home().url}
                projectsUrl="/projects"
                stackUrl="/stack"
                processUrl="/process"
                contactUrl="/contact"
                resumeUrl="/resume"
                activeItem="resume"
            />

            <main className="max-w-7xl mx-auto px-8 py-12 md:py-20">
                {/* Hero / Header Section */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                    <div className="lg:col-span-8">
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block font-medium">
                            Available for new opportunities
                        </span>
                        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
                            Building the <span className="text-primary italic">Intelligence</span> of the Next .
                        </h1>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="bg-surface-container-low px-4 py-1.5 rounded-full text-sm font-medium border border-outline-variant/15">
                                Full-Stack Developer
                            </span>
                            <span className="bg-surface-container-low px-4 py-1.5 rounded-full text-sm font-medium border border-outline-variant/15">
                                Mobile App Developer
                            </span>
                            <span className="bg-surface-container-low px-4 py-1.5 rounded-full text-sm font-medium border border-outline-variant/15">
                                AI Enthusiast
                            </span>
                        </div>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-end">
                        <div className="space-y-4 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                            <a className="flex items-center gap-3 group" href="mailto:contact@usmanharuna.com">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <span className="text-sm font-medium text-on-secondary-container">contact@usmanharuna.com</span>
                            </a>
                            <a className="flex items-center gap-3 group" href="#">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">code</span>
                                </div>
                                <span className="text-sm font-medium text-on-secondary-container">github.com/usman-haruna</span>
                            </a>
                            <a className="flex items-center gap-3 group" href="#">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">share</span>
                                </div>
                                <span className="text-sm font-medium text-on-secondary-container">linkedin.com/in/usmanharuna</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Professional Summary */}
                <section className="mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4">
                            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">Professional Summary</h2>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-xl md:text-2xl text-on-secondary-container leading-relaxed font-medium">
                                Focused on building <span className="text-on-surface">intelligent, cross-platform solutions</span> with artisanal precision. I bridge the gap between complex backend architectures and intuitive mobile experiences, specializing in high-performance biometric systems and retail analytics.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Left Column: Experience */}
                    <div className="lg:col-span-8 space-y-16">
                        <div>
                            <h3 className="font-label text-[11px] uppercase tracking-widest text-primary mb-12 font-bold flex items-center gap-4">
                                Professional Experience & Projects
                                <div className="h-px bg-outline-variant/30 flex-grow"></div>
                            </h3>
                            <div className="space-y-12">
                                {/* Experience Item 1 */}
                                <div className="group relative">
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                        <h4 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                                            Face Recognition System
                                        </h4>
                                        <span className="font-label text-xs text-on-secondary-container">2023 — Present</span>
                                    </div>
                                    <p className="text-on-secondary-container mb-6 leading-relaxed max-w-2xl">
                                        Developed an AI-powered attendance and identity verification tool. Engineered using OpenCV and FastAPI to provide sub-second recognition latency.
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex gap-3 items-start text-sm">
                                            <span className="material-symbols-outlined text-primary text-[18px]">
                                                check_circle
                                            </span>
                                            Integrated deep learning models for high-accuracy facial landmark detection.
                                        </li>
                                        <li className="flex gap-3 items-start text-sm">
                                            <span className="material-symbols-outlined text-primary text-[18px]">
                                                check_circle
                                            </span>
                                            Optimized real-time processing pipelines for multi-camera streams.
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience Item 2 */}
                                <div className="group relative">
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                        <h4 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                                            Car Rental Management System
                                        </h4>
                                        <span className="font-label text-xs text-on-secondary-container">2022 — 2023</span>
                                    </div>
                                    <p className="text-on-secondary-container mb-6 leading-relaxed max-w-2xl">
                                        Built a full-stack booking and fleet tracking ecosystem. Streamlined operations for medium-sized enterprises with automated logistics.
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex gap-3 items-start text-sm">
                                            <span className="material-symbols-outlined text-primary text-[18px]">
                                                check_circle
                                            </span>
                                            Secure financial transactions integrated via Stripe API.
                                        </li>
                                        <li className="flex gap-3 items-start text-sm">
                                            <span className="material-symbols-outlined text-primary text-[18px]">
                                                check_circle
                                            </span>
                                            Real-time fleet tracking and availability calendar logic.
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience Item 3 */}
                                <div className="group relative">
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                        <h4 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                                            Aura POS System
                                        </h4>
                                        <span className="font-label text-xs text-on-secondary-container">2021 — 2022</span>
                                    </div>
                                    <p className="text-on-secondary-container mb-6 leading-relaxed max-w-2xl">
                                        Engineered a high-performance retail inventory and sales analytics engine. Optimized for speed in high-traffic commercial environments.
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex gap-3 items-start text-sm">
                                            <span className="material-symbols-outlined text-primary text-[18px]">
                                                check_circle
                                            </span>
                                            Comprehensive reporting dashboard using D3.js and Laravel.
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience Item 4 */}
                                <div className="group relative">
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                        <h4 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                                            Learning Management System
                                        </h4>
                                        <span className="font-label text-xs text-on-secondary-container">2020 — 2021</span>
                                    </div>
                                    <p className="text-on-secondary-container mb-6 leading-relaxed max-w-2xl">
                                        A holistic educational platform designed for progress tracking and digital curriculum delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Skills & Education */}
                    <div className="lg:col-span-4 space-y-16">
                        {/* Skills Arsenal */}
                        <div>
                            <h3 className="font-label text-[11px] uppercase tracking-widest text-primary mb-8 font-bold">
                                Technical Arsenal
                            </h3>
                            <div className="space-y-8">
                                <div>
                                    <span className="text-xs font-bold uppercase text-on-secondary-container mb-4 block">
                                        Languages
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-surface-container text-xs px-3 py-1 rounded-md font-medium">Python</span>
                                        <span className="bg-surface-container text-xs px-3 py-1 rounded-md font-medium">
                                            JavaScript (ES6+)
                                        </span>
                                        <span className="bg-surface-container text-xs px-3 py-1 rounded-md font-medium">PHP</span>
                                        <span className="bg-surface-container text-xs px-3 py-1 rounded-md font-medium">
                                            TypeScript
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xs font-bold uppercase text-on-secondary-container mb-4 block">
                                        Frameworks
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-surface-container text-xs px-3 py-1 rounded-md font-medium">React</span>
                                        <span className="bg-surface-container text-xs px-3 py-1 rounded-md font-medium">Vue.js</span>
                                        <span className="bg-surface-container text-xs px-3 py-1 rounded-md font-medium">Next.js</span>
                                        <span className="bg-surface-container text-xs px-3 py-1 rounded-md font-medium">Laravel</span>
                                        <span className="bg-surface-container text-xs px-3 py-1 rounded-md font-medium">FastAPI</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xs font-bold uppercase text-on-secondary-container mb-4 block">
                                        Mobile
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-surface-container text-xs px-3 py-1 rounded-md font-medium">
                                            React Native
                                        </span>
                                        <span className="bg-surface-container text-xs px-3 py-1 rounded-md font-medium">Expo</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xs font-bold uppercase text-on-secondary-container mb-4 block">
                                        Specialties
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-md font-bold">
                                            AI / Machine Learning
                                        </span>
                                        <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-md font-bold">
                                            Biometric Systems
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 className="font-label text-[11px] uppercase tracking-widest text-primary mb-8 font-bold">
                                Education
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="font-bold text-on-surface">B.Sc. in Computer Science</p>
                                    <p className="text-sm text-on-secondary-container">Prestigious University of Technology</p>
                                    <p className="font-label text-[10px] text-on-secondary-container mt-1">Class of 2020</p>
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h3 className="font-label text-[11px] uppercase tracking-widest text-primary mb-8 font-bold">
                                Certifications
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary">workspace_premium</span>
                                    <div>
                                        <p className="text-sm font-bold text-on-surface leading-tight">
                                            AWS Certified Solutions Architect
                                        </p>
                                        <p className="text-[11px] text-on-secondary-container">Amazon Web Services</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary">workspace_premium</span>
                                    <div>
                                        <p className="text-sm font-bold text-on-surface leading-tight">Professional AI Engineer</p>
                                        <p className="text-[11px] text-on-secondary-container">Google Cloud / DeepLearning.AI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-[#e8bcb6]/15 bg-[#f9f9ff] dark:bg-slate-950 mt-20">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 py-12">
                    <div className="mb-6 md:mb-0">
                        <span className="font-label uppercase tracking-widest text-[10px] text-slate-500">
                            © 2024 Usman Haruna. Built with Precision Artisan.
                        </span>
                    </div>
                    <div className="flex gap-8">
                        <a className="font-label uppercase tracking-widest text-[10px] text-slate-500 hover:text-[#bc0003] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-all" href="#">
                            GitHub
                        </a>
                        <a className="font-label uppercase tracking-widest text-[10px] text-slate-500 hover:text-[#bc0003] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-all" href="#">
                            LinkedIn
                        </a>
                        <a className="font-label uppercase tracking-widest text-[10px] text-slate-500 hover:text-[#bc0003] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-all" href="#">
                            Email
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
