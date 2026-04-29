import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
import { PortfolioNavbar } from '@/components/portfolio-navbar';
import { home } from '@/routes';
import { faceRecognition } from '@/routes/projects';

export default function Projects() {
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
                            <article className="group relative overflow-hidden bg-surface-container-low transition-all duration-500 hover:shadow-2xl hover:shadow-on-surface/5 md:col-span-8">
                                <div className="flex h-full min-h-125 flex-col justify-between p-10 md:p-16">
                                    <div>
                                        <div className="mb-6 font-mono text-[10px] tracking-widest text-tertiary uppercase">
                                            01 - Artificial Intelligence
                                        </div>
                                        <h2 className="font-display mb-4 text-4xl font-bold transition-colors group-hover:text-primary">
                                            Face Recognition System
                                        </h2>
                                        <p className="mb-8 max-w-md leading-relaxed text-secondary">
                                            Advanced neural network implementation for real-time identity verification and security access management.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-surface-container px-3 py-1 font-mono text-[10px] tracking-wider text-on-surface-variant uppercase">Python</span>
                                            <span className="bg-surface-container px-3 py-1 font-mono text-[10px] tracking-wider text-on-surface-variant uppercase">OpenCV</span>
                                            <span className="bg-surface-container px-3 py-1 font-mono text-[10px] tracking-wider text-on-surface-variant uppercase">TensorFlow</span>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex items-center gap-4">
                                        <Link
                                            className="group/btn font-mono text-on-surface flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
                                            href={faceRecognition.url()}
                                        >
                                            View Case Study
                                            <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">trending_flat</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="absolute right-0 bottom-0 opacity-10 transition-opacity group-hover:opacity-20">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyCvteD7YHdxRILVMhbmAq9_ucsqwrZyccYo0h_k4KOC3nxV6AaSdwr6YoNec6vF-s-bBp1R60My5jq9ipXvbqPJSgdMwXn5ckYcTWeD16sZ36jgpTclPLkWYbazH0iJU96du8TFWqYCse5xyFSCBZQBvHPwBsKG8LAc2n-oTe1W0RMNTH8g6WczXJETw6xcTAynNsu3AUu8dqmETtdWsVIFymr78UgTjvWMqcww54NnDi9ZqImpcso9JDzfp8KxHBpVwjgsiIxBo"
                                        alt="origami bird detail"
                                        className="h-auto w-64 rotate-12 transform"
                                    />
                                </div>
                            </article>

                            <article className="group overflow-hidden bg-surface-container transition-all duration-500 hover:bg-surface-container-high md:col-span-4">
                                <div className="flex h-full flex-col p-10">
                                    <div className="mb-6 font-mono text-[10px] tracking-widest text-tertiary uppercase">02 - Fintech</div>
                                    <h2 className="font-display mb-4 text-2xl font-bold">Car Rental Management</h2>
                                    <p className="mb-8 text-sm leading-relaxed text-secondary">
                                        Fleet logistics and payment gateway integration for modern mobility services.
                                    </p>
                                    <div className="mt-auto">
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            <span className="border border-outline-variant px-2 py-0.5 font-mono text-[9px] text-on-surface-variant uppercase">Laravel</span>
                                            <span className="border border-outline-variant px-2 py-0.5 font-mono text-[9px] text-on-surface-variant uppercase">MySQL</span>
                                        </div>
                                        <span className="material-symbols-outlined text-primary transition-transform group-hover:translate-x-2">arrow_outward</span>
                                    </div>
                                </div>
                            </article>

                            <article className="group overflow-hidden border border-outline-variant/15 bg-surface-container-lowest transition-all duration-500 hover:shadow-xl md:col-span-4">
                                <div className="flex h-full flex-col p-10">
                                    <div className="mb-6 font-mono text-[10px] tracking-widest text-tertiary uppercase">03 - Commerce</div>
                                    <h2 className="font-display mb-4 text-2xl font-bold">Point of Sales (POS)</h2>
                                    <p className="mb-8 text-sm leading-relaxed text-secondary">
                                        Cloud-based inventory management with real-time analytics and reporting dashboards.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        <span className="font-mono text-[9px] font-bold text-primary uppercase">React</span>
                                        <span className="font-mono text-[9px] font-bold text-primary uppercase">Node.js</span>
                                        <span className="font-mono text-[9px] font-bold text-primary uppercase">PostgreSQL</span>
                                    </div>
                                </div>
                            </article>

                            <article className="group relative overflow-hidden bg-on-surface text-surface-bright transition-all duration-500 md:col-span-8">
                                <div className="flex h-full flex-col justify-center p-10 md:p-16">
                                    <div className="max-w-lg">
                                        <div className="mb-6 font-mono text-[10px] tracking-widest text-surface-variant uppercase">04 - EdTech</div>
                                        <h2 className="font-display mb-6 text-4xl font-bold text-white transition-colors group-hover:text-primary-fixed">Learning Management System</h2>
                                        <p className="mb-8 leading-relaxed text-surface-variant">
                                            Scalable educational platform featuring automated progress tracking, course curation, and interactive quizzes.
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            <div className="flex items-center gap-2 font-mono text-[10px] uppercase"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Next.js</div>
                                            <div className="flex items-center gap-2 font-mono text-[10px] uppercase"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> GraphQL</div>
                                            <div className="flex items-center gap-2 font-mono text-[10px] uppercase"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> AWS</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 p-8">
                                    <span className="material-symbols-outlined text-6xl text-surface-variant/20">school</span>
                                </div>
                            </article>

                            <article className="group overflow-hidden bg-surface-container-low transition-all duration-500 hover:bg-surface-container md:col-span-6">
                                <div className="flex h-full flex-col p-10">
                                    <div className="mb-6 font-mono text-[10px] tracking-widest text-tertiary uppercase">05 - PropTech</div>
                                    <h2 className="font-display mb-4 text-2xl font-bold">Real Estate Management</h2>
                                    <p className="mb-8 leading-relaxed text-secondary">
                                        High-end property marketplace with agent CRM, automated listing sync, and client portals.
                                    </p>
                                    <div className="mt-auto">
                                        <div className="mb-6 h-1 w-12 bg-primary transition-all group-hover:w-24" />
                                        <div className="font-mono text-[10px] text-on-surface-variant uppercase">Vue.js / Django / Docker</div>
                                    </div>
                                </div>
                            </article>

                            <article className="group overflow-hidden border border-outline-variant/15 bg-white transition-all duration-500 hover:shadow-xl md:col-span-6">
                                <div className="flex h-full flex-col p-10">
                                    <div className="mb-6 font-mono text-[10px] tracking-widest text-tertiary uppercase">06 - Hospitality</div>
                                    <h2 className="font-display mb-4 text-2xl font-bold">Restaurant Management</h2>
                                    <p className="mb-8 leading-relaxed text-secondary">
                                        Streamlined booking engine and digital order management optimized for high-volume kitchens.
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex gap-4">
                                            <span className="material-symbols-outlined text-on-surface-variant">restaurant_menu</span>
                                            <span className="material-symbols-outlined text-on-surface-variant">table_bar</span>
                                        </div>
                                        <span className="font-mono text-[10px] font-bold text-primary transition-all group-hover:mr-4">Flutter / Firebase</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>

                    <section className="mt-32 text-center">
                        <div className="relative overflow-hidden bg-surface-container-high px-8 py-24">
                            <div className="relative z-10">
                                <h2 className="font-display mb-8 text-4xl font-bold md:text-5xl">Ready to start a project?</h2>
                                <p className="mx-auto mb-12 max-w-xl text-secondary">
                                    Whether it&apos;s an AI tool or a global management system, let&apos;s build something exceptional together.
                                </p>
                                <a className="inline-block bg-primary px-10 py-4 font-mono text-sm tracking-[0.2em] text-white uppercase transition-all hover:bg-primary-container hover:shadow-2xl" href={`${home.url()}#contact`}>
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
                            <a className="text-slate-400 transition-colors duration-200 hover:translate-x-1 hover:text-red-600" href="#">Twitter</a>
                            <a className="text-slate-400 transition-colors duration-200 hover:translate-x-1 hover:text-red-600" href="#">GitHub</a>
                            <a className="text-slate-400 transition-colors duration-200 hover:translate-x-1 hover:text-red-600" href="#">LinkedIn</a>
                            <a className="text-slate-400 transition-colors duration-200 hover:translate-x-1 hover:text-red-600" href="#">RSS</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
