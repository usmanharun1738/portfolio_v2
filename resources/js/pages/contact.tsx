import { useEffect } from 'react';
import { PortfolioNavbar } from '@/components/portfolio-navbar';
import { home } from '@/routes';

export default function Contact() {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <PortfolioNavbar
                homeUrl={home().url}
                projectsUrl="/projects"
                stackUrl="/stack"
                processUrl="/process"
                contactUrl="/contact"
                resumeUrl="/resume"
                activeItem="contact"
            />

            <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
                {/* Hero Section */}
                <section className="mb-20 relative">
                    <div className="max-w-3xl">
                        <label className="font-label text-primary uppercase tracking-[0.2em] text-[11px] mb-4 block">
                            Availability: Open for Projects
                        </label>
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-on-surface tracking-tight leading-[1.1] mb-8">
                            Let's Talk <span className="text-primary">Inquiries</span>
                        </h1>
                        <p className="font-body text-xl text-secondary max-w-xl leading-relaxed">
                            Whether you have a specific project in mind or just want to say hi, I'm always open to discussing new opportunities and creative collaborations.
                        </p>
                    </div>
                    {/* Origami Bird Image */}
                    <div className="absolute top-0 right-0 hidden lg:block opacity-10 pointer-events-none">
                        <svg className="w-96" viewBox="0 0 200 200" fill="currentColor">
                            <path d="M100 20 L140 80 L100 100 L60 80 Z" className="text-primary" />
                            <path d="M100 100 L140 80 L160 120 Z" className="text-primary" />
                            <path d="M100 100 L60 80 L40 120 Z" className="text-primary" />
                        </svg>
                    </div>
                </section>

                {/* Main Content: Form & Info */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Contact Form */}
                    <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12 transition-all hover:bg-surface-container">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-label text-[10px] uppercase tracking-widest text-secondary font-medium" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary rounded-lg py-4 px-5 text-on-surface placeholder:text-outline-variant transition-all"
                                        id="name"
                                        placeholder="John Doe"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-label text-[10px] uppercase tracking-widest text-secondary font-medium" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary rounded-lg py-4 px-5 text-on-surface placeholder:text-outline-variant transition-all"
                                        id="email"
                                        placeholder="john@example.com"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="font-label text-[10px] uppercase tracking-widest text-secondary font-medium" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary rounded-lg py-4 px-5 text-on-surface placeholder:text-outline-variant transition-all"
                                    id="subject"
                                    placeholder="Project Discussion"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="font-label text-[10px] uppercase tracking-widest text-secondary font-medium" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary rounded-lg py-4 px-5 text-on-surface placeholder:text-outline-variant transition-all resize-none"
                                    id="message"
                                    placeholder="How can I help you?"
                                    rows={6}
                                />
                            </div>
                            <button
                                className="group flex items-center justify-center gap-3 w-full md:w-auto bg-gradient-to-r from-primary to-primary-container text-white font-label text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-lg shadow-lg shadow-primary/10 hover:shadow-primary/25 active:scale-[0.98] transition-all"
                                type="submit"
                            >
                                Send Message
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </button>
                        </form>
                    </div>

                    {/* Sidebar Info */}
                    <aside className="lg:col-span-5 space-y-16">
                        {/* Contact Details */}
                        <div>
                            <h3 className="font-display text-2xl font-bold mb-6">Contact Details</h3>
                            <div className="space-y-6">
                                <a className="group flex items-start gap-4" href="mailto:hello@usmanharuna.pro">
                                    <div className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-lg group-hover:bg-primary/5 transition-colors">
                                        <span className="material-symbols-outlined text-primary">alternate_email</span>
                                    </div>
                                    <div>
                                        <span className="block font-label text-[10px] uppercase tracking-widest text-secondary mb-1">
                                            Email
                                        </span>
                                        <span className="block font-body text-lg font-medium text-on-surface border-b border-transparent group-hover:border-primary transition-all">
                                            hello@usmanharuna.pro
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Social Connect */}
                        <div>
                            <h3 className="font-display text-2xl font-bold mb-6">Social Connect</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a
                                    className="flex items-center gap-4 p-5 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors group"
                                    href="#"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded shadow-sm">
                                        <span className="material-symbols-outlined text-on-surface">code</span>
                                    </div>
                                    <span className="font-body font-medium">GitHub</span>
                                    <span className="material-symbols-outlined text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
                                        north_east
                                    </span>
                                </a>
                                <a
                                    className="flex items-center gap-4 p-5 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors group"
                                    href="#"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded shadow-sm">
                                        <span className="material-symbols-outlined text-[#0077b5]">person_add</span>
                                    </div>
                                    <span className="font-body font-medium">LinkedIn</span>
                                    <span className="material-symbols-outlined text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
                                        north_east
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Studio Image */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-on-surface/5">
                            <div className="w-full aspect-square bg-surface-container-low flex items-center justify-center">
                                <span className="material-symbols-outlined text-4xl text-surface-variant">image_not_supported</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-screen-2xl mx-auto border-t border-slate-200/50 dark:border-slate-800/50 pt-12">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        © 2024 Artisan Developer. Built with precision.
                    </div>
                    <div className="flex gap-8">
                        <a className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-red-600 dark:hover:text-red-400 transition-colors hover:translate-x-1 duration-200" href="#">
                            Twitter
                        </a>
                        <a className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-red-600 dark:hover:text-red-400 transition-colors hover:translate-x-1 duration-200" href="#">
                            GitHub
                        </a>
                        <a className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-red-600 dark:hover:text-red-400 transition-colors hover:translate-x-1 duration-200" href="#">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
