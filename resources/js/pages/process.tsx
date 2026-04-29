import { useEffect } from 'react';
import { PortfolioNavbar } from '@/components/portfolio-navbar';
import { home } from '@/routes';

export default function Process() {
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
                activeItem="process"
            />

            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-8 mb-24">
                    <div className="max-w-3xl">
                        <p className="font-label text-primary uppercase tracking-widest text-[0.6875rem] mb-4">
                            How I Work
                        </p>
                        <h1 className="font-display text-5xl md:text-7xl font-extrabold text-on-surface mb-8 leading-[1.1]">
                            Engineering  <span className="text-primary-container">Solutions.</span>
                        </h1>
                        <p className="text-xl text-on-surface/70 leading-relaxed">
                            My methodology is a blend of meticulous architecture and high-performance engineering. Every system is built to scale, designed for longevity, and optimized for maximum efficiency.
                        </p>
                    </div>
                </section>

                {/* Process Steps */}
                <section className="max-w-7xl mx-auto px-8 space-y-32">
                    {/* Step 01 */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        <div className="md:col-span-5 relative">
                            <div className="font-label text-[10rem] font-bold text-surface-container-highest leading-none select-none absolute -top-12 -left-8 -z-10">
                                01
                            </div>
                            <div className="pt-8">
                                <h2 className="font-display text-3xl font-bold mb-6">Discovery & Architecture</h2>
                                <p className="text-on-surface/70 text-lg mb-8 leading-relaxed">
                                    Before a single line of code is written, I dive deep into the problem space. We define technical constraints, scalability requirements, and the fundamental data architecture that will support the system's growth.
                                </p>
                                <div className="space-y-4">
                                    <h4 className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                                        Deliverables
                                    </h4>
                                    <ul className="space-y-2 font-body text-sm text-on-surface/80">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                            System Infrastructure Diagrams
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                            Technical Specification Documents
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                            Scalability Strategy
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-7">
                            <div className="bg-surface-container-low rounded-3xl overflow-hidden aspect-video relative group">
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-5xl text-surface-variant">image_not_supported</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Step 02 */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        <div className="md:col-span-7 order-2 md:order-1">
                            <div className="bg-surface-container rounded-3xl overflow-hidden aspect-[4/3] relative group">
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-5xl text-surface-variant">image_not_supported</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-5 order-1 md:order-2 relative md:pl-12">
                            <div className="font-label text-[10rem] font-bold text-surface-container-highest leading-none select-none absolute -top-12 -right-8 -z-10 md:right-0">
                                02
                            </div>
                            <div className="pt-8">
                                <h2 className="font-display text-3xl font-bold mb-6">Design & Prototyping</h2>
                                <p className="text-on-surface/70 text-lg mb-8 leading-relaxed">
                                    Utility meets aesthetic. I create high-fidelity prototypes that mirror the final performance. The focus is on a seamless developer experience and an intuitive user interface that feels native to the brand's identity.
                                </p>
                                <div className="space-y-4">
                                    <h4 className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                                        Tools Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-surface-container-lowest px-3 py-1 rounded-full font-label text-[10px] border border-outline-variant/20">
                                            Figma
                                        </span>
                                        <span className="bg-surface-container-lowest px-3 py-1 rounded-full font-label text-[10px] border border-outline-variant/20">
                                            Framer
                                        </span>
                                        <span className="bg-surface-container-lowest px-3 py-1 rounded-full font-label text-[10px] border border-outline-variant/20">
                                            Adobe CC
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 03 */}
                    <div className="bg-surface-container-low rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                        <div className="max-w-4xl mx-auto relative z-10">
                            <div className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-6 flex items-center gap-4">
                                <span>03 Phase</span>
                                <div className="h-px flex-grow bg-outline-variant/30"></div>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8">Engineering & Implementation</h2>
                            <p className="text-xl text-on-surface/70 mb-12 leading-relaxed">
                                This is where precision meets production. I leverage modern frameworks to build modular, maintainable, and lightning-fast codebases. Clean code is not just a standard—it's a requirement.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
                                    <span className="material-symbols-outlined text-primary mb-4">terminal</span>
                                    <h5 className="font-display font-bold mb-2">Clean Stack</h5>
                                    <p className="text-sm text-on-surface/60">
                                        React, Next.js, and TypeScript for robust front-end systems.
                                    </p>
                                </div>
                                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
                                    <span className="material-symbols-outlined text-primary mb-4">database</span>
                                    <h5 className="font-display font-bold mb-2">Back-end Excellence</h5>
                                    <p className="text-sm text-on-surface/60">
                                        Node.js and PostgreSQL optimized for high concurrent loads.
                                    </p>
                                </div>
                                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
                                    <span className="material-symbols-outlined text-primary mb-4">speed</span>
                                    <h5 className="font-display font-bold mb-2">Performance First</h5>
                                    <p className="text-sm text-on-surface/60">
                                        Edge computing and intelligent caching layers for sub-100ms response.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 04 */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-5 relative">
                            <div className="font-label text-[10rem] font-bold text-surface-container-highest leading-none select-none absolute -top-12 -left-8 -z-10">
                                04
                            </div>
                            <div className="pt-8">
                                <h2 className="font-display text-3xl font-bold mb-6">Testing & QA</h2>
                                <p className="text-on-surface/70 text-lg mb-8 leading-relaxed">
                                    Zero-compromise quality assurance. I implement automated testing suites including Unit, Integration, and E2E tests to ensure every deploy is as stable as the last.
                                </p>
                                <div className="p-6 bg-surface-container-low rounded-xl flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary">verified_user</span>
                                    <div>
                                        <p className="font-display font-bold text-sm">99.9% Build Reliability</p>
                                        <p className="text-xs text-on-surface/60">
                                            Automated CI/CD pipelines with rigid linting and test coverage.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-7">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-square bg-surface-container-highest rounded-2xl flex items-center justify-center p-8">
                                    <span className="material-symbols-outlined text-4xl text-surface-variant">image_not_supported</span>
                                </div>
                                <div className="aspect-square bg-surface-container-low rounded-2xl overflow-hidden mt-8 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-4xl text-surface-variant">image_not_supported</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 05 */}
                    <div className="max-w-4xl mx-auto text-center space-y-8 relative">
                        <div className="font-label text-[8rem] font-bold text-surface-container-highest leading-none opacity-40">
                            05
                        </div>
                        <h2 className="font-display text-4xl font-extrabold -mt-16">Deployment & Scale</h2>
                        <p className="text-xl text-on-surface/70">
                            The launch is just the beginning. I deploy using globally distributed infrastructure with automated scaling to handle traffic spikes effortlessly.
                        </p>
                        <div className="flex flex-wrap justify-center gap-12 pt-8">
                            <div className="text-center">
                                <p className="font-label text-2xl font-bold text-primary">AWS</p>
                                <p className="text-[10px] uppercase tracking-widest text-on-surface/50 font-label">Cloud Infrastructure</p>
                            </div>
                            <div className="text-center">
                                <p className="font-label text-2xl font-bold text-primary">Docker</p>
                                <p className="text-[10px] uppercase tracking-widest text-on-surface/50 font-label">Containerization</p>
                            </div>
                            <div className="text-center">
                                <p className="font-label text-2xl font-bold text-primary">Vercel</p>
                                <p className="text-[10px] uppercase tracking-widest text-on-surface/50 font-label">Edge Deployment</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="max-w-7xl mx-auto px-8 mt-48">
                    <div className="bg-on-surface text-surface rounded-[4rem] p-12 md:p-32 relative overflow-hidden text-center md:text-left">
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
                                    The <span className="text-primary-fixed-dim">Philosophy</span>
                                </h2>
                                <p className="text-xl text-surface/70 leading-relaxed mb-12">
                                    Building for the web isn't just about pixels or scripts; it's about engineering resilience. My work is guided by three core pillars: Performance without compromise, Scalability by default, and Precision as a standard.
                                </p>
                                <button className="bg-primary text-on-primary px-10 py-5 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-3 mx-auto md:mx-0">
                                    Start a Project <span className="material-symbols-outlined">trending_flat</span>
                                </button>
                            </div>
                            <div className="hidden md:block">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-surface/10 backdrop-blur-md p-8 rounded-3xl border border-surface/5">
                                        <p className="font-label text-3xl font-bold text-primary-fixed-dim mb-2">100</p>
                                        <p className="text-xs uppercase tracking-widest font-label text-surface/50">
                                            Lighthouse Score
                                        </p>
                                    </div>
                                    <div className="bg-surface/10 backdrop-blur-md p-8 rounded-3xl border border-surface/5 mt-12">
                                        <p className="font-label text-3xl font-bold text-primary-fixed-dim mb-2">10ms</p>
                                        <p className="text-xs uppercase tracking-widest font-label text-surface/50">
                                            Database Latency
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full rounded-t-3xl bg-[#f0f3ff] dark:bg-[#151c27]">
                <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full font-label text-xs uppercase tracking-widest">
                    <div className="font-display font-bold text-[#151c27] dark:text-surface text-lg mb-8 md:mb-0">
                        Usman Haruna.
                    </div>
                    <div className="flex gap-12 mb-8 md:mb-0 text-[#151c27]/50 dark:text-[#f9f9ff]/50">
                        <a className="hover:text-[#bc0003] underline underline-offset-4 transition-all duration-200" href="#">
                            Github
                        </a>
                        <a className="hover:text-[#bc0003] underline underline-offset-4 transition-all duration-200" href="#">
                            LinkedIn
                        </a>
                        <a className="hover:text-[#bc0003] underline underline-offset-4 transition-all duration-200" href="#">
                            Twitter
                        </a>
                        <a className="hover:text-[#bc0003] underline underline-offset-4 transition-all duration-200" href="#">
                            Resume
                        </a>
                    </div>
                    <div className="text-[#151c27]/50 dark:text-[#f9f9ff]/50">© 2024 Usman Haruna. Built with Precision.</div>
                </div>
            </footer>
        </div>
    );
}
