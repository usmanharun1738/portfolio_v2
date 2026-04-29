import { useEffect } from 'react';
import { PortfolioNavbar } from '@/components/portfolio-navbar';
import { home } from '@/routes';


const stackImgUrl = '/stack-img.png'
export default function Stack() {
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
                activeItem="stack"
            />

            <main className="pt-32 pb-24">
                {/* Hero Section */}
                <section className="max-w-screen-2xl mx-auto px-8 mb-24">
                    <div className="flex flex-col md:flex-row gap-12 items-end">
                        <div className="flex-1">
                            <span className="font-label text-[11px] uppercase tracking-[0.2em] text-primary mb-4 block">
                                Technical Arsenal
                            </span>
                            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] text-on-surface mb-8">
                                Precision <br /> <span className="text-primary-container">Engineering.</span>
                            </h1>
                            <p className="text-xl text-on-surface/70 max-w-xl font-light leading-relaxed">
                                Architecture of high-performance systems and editorial-grade interfaces. A continuous journey of mastering the machine through scalable code and human-centric design.
                            </p>
                        </div>
                        <div className="hidden md:block w-1/3 aspect-square bg-surface-container-low rounded-xl overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={stackImgUrl}
                                    alt="Artisan Showcase"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Languages: Bento Grid */}
                <section className="max-w-screen-2xl mx-auto px-8 mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-8 bg-surface-container-low p-12 rounded-xl flex flex-col justify-between group hover:bg-surface-container transition-colors duration-500">
                            <div>
                                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface/40 mb-2 block">
                                    Core Logic
                                </span>
                                <h2 className="text-4xl font-display font-bold tracking-tight mb-6">
                                    Foundational Languages
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-12 mt-12">
                                <div className="flex flex-col gap-2">
                                    <span className="font-label text-sm text-primary">01. Python</span>
                                    <div className="h-0.5 w-48 bg-surface-dim overflow-hidden">
                                        <div className="h-full bg-primary w-[95%]"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="font-label text-sm text-primary">02. JavaScript</span>
                                    <div className="h-0.5 w-48 bg-surface-dim overflow-hidden">
                                        <div className="h-full bg-primary w-[90%]"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="font-label text-sm text-primary">03. PHP</span>
                                    <div className="h-0.5 w-48 bg-surface-dim overflow-hidden">
                                        <div className="h-full bg-primary w-[85%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-4 bg-primary p-12 rounded-xl text-white flex flex-col justify-center">
                            <span className="material-symbols-outlined text-5xl mb-6">terminal</span>
                            <h3 className="text-2xl font-display font-bold mb-4">The Artisan Approach</h3>
                            <p className="font-light opacity-80 leading-relaxed">
                                I treat code as a craft, prioritizing readability, performance, and long-term maintainability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skill Categories */}
                <section className="max-w-screen-2xl mx-auto px-8 mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Frontend */}
                        <div className="flex flex-col border-t border-outline-variant/15 pt-8">
                            <span className="font-label text-[10px] uppercase tracking-widest text-primary mb-6">
                                01 — Interface
                            </span>
                            <h3 className="text-2xl font-display font-bold mb-8 tracking-tight">Frontend Engineering</h3>
                            <ul className="space-y-4 font-label text-on-surface/60">
                                <li className="flex items-center gap-4 group cursor-default">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="group-hover:text-on-surface transition-colors">React / Next.js</span>
                                </li>
                                <li className="flex items-center gap-4 group cursor-default">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="group-hover:text-on-surface transition-colors">Vue.js</span>
                                </li>
                                <li className="flex items-center gap-4 group cursor-default">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="group-hover:text-on-surface transition-colors">Tailwind CSS</span>
                                </li>
                                <li className="flex items-center gap-4 group cursor-default">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="group-hover:text-on-surface transition-colors">Framer Motion</span>
                                </li>
                            </ul>
                        </div>

                        {/* Backend */}
                        <div className="flex flex-col border-t border-outline-variant/15 pt-8">
                            <span className="font-label text-[10px] uppercase tracking-widest text-primary mb-6">
                                02 — Architecture
                            </span>
                            <h3 className="text-2xl font-display font-bold mb-8 tracking-tight">Backend & Mobile</h3>
                            <ul className="space-y-4 font-label text-on-surface/60">
                                <li className="flex items-center gap-4 group cursor-default">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="group-hover:text-on-surface transition-colors">Laravel (Eloquent/API)</span>
                                </li>
                                <li className="flex items-center gap-4 group cursor-default">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="group-hover:text-on-surface transition-colors">FastAPI / Node.js</span>
                                </li>
                                <li className="flex items-center gap-4 group cursor-default">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="group-hover:text-on-surface transition-colors">SQL / NoSQL Systems</span>
                                </li>
                                <li className="flex items-center gap-4 group cursor-default">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="group-hover:text-on-surface transition-colors">React Native / Expo</span>
                                </li>
                            </ul>
                        </div>

                        {/* Intelligence */}
                        <div className="flex flex-col border-t border-outline-variant/15 pt-8">
                            <span className="font-label text-[10px] uppercase tracking-widest text-primary mb-6">
                                03 — Intelligence
                            </span>
                            <h3 className="text-2xl font-display font-bold mb-8 tracking-tight">AI & Data Science</h3>
                            <ul className="space-y-4 font-label text-on-surface/60">
                                <li className="flex items-center gap-4 group cursor-default">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="group-hover:text-on-surface transition-colors">Computer Vision</span>
                                </li>
                                <li className="flex items-center gap-4 group cursor-default">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="group-hover:text-on-surface transition-colors">OpenCV Integration</span>
                                </li>
                                <li className="flex items-center gap-4 group cursor-default">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="group-hover:text-on-surface transition-colors">LLM Fine-tuning</span>
                                </li>
                                <li className="flex items-center gap-4 group cursor-default">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="group-hover:text-on-surface transition-colors">PyTorch / TensorFlow</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="bg-surface-container-low py-32">
                    <div className="max-w-screen-2xl mx-auto px-8">
                        <div className="mb-16">
                            <span className="font-label text-[11px] uppercase tracking-widest text-on-surface/40 block mb-2">
                                Constant Evolution
                            </span>
                            <h2 className="text-5xl font-display font-bold tracking-tight">Always Learning</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Cert 1 */}
                            <div className="bg-surface p-12 rounded-xl shadow-[0_12px_40px_rgba(21,28,39,0.06)] hover:-translate-y-2 transition-transform duration-300">
                                <span className="font-label text-[10px] text-primary mb-4 block">2023 — Google Cloud</span>
                                <h4 className="text-xl font-bold font-display mb-4">Cloud Architect Professional</h4>
                                <p className="text-on-surface/60 text-sm leading-relaxed mb-6">
                                    Specializing in microservices deployment and scalable cloud infrastructure.
                                </p>
                                <a className="font-label text-xs uppercase tracking-widest text-primary flex items-center group" href="#">
                                    View Badge <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </a>
                            </div>
                            {/* Cert 2 */}
                            <div className="bg-surface p-12 rounded-xl shadow-[0_12px_40px_rgba(21,28,39,0.06)] hover:-translate-y-2 transition-transform duration-300">
                                <span className="font-label text-[10px] text-primary mb-4 block">2022 — AWS</span>
                                <h4 className="text-xl font-bold font-display mb-4">Machine Learning Specialty</h4>
                                <p className="text-on-surface/60 text-sm leading-relaxed mb-6">
                                    Designing and implementing high-scale ML solutions for vision and NLP.
                                </p>
                                <a className="font-label text-xs uppercase tracking-widest text-primary flex items-center group" href="#">
                                    View Badge <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </a>
                            </div>
                            {/* Cert 3 */}
                            <div className="bg-surface p-12 rounded-xl shadow-[0_12px_40px_rgba(21,28,39,0.06)] hover:-translate-y-2 transition-transform duration-300">
                                <span className="font-label text-[10px] text-primary mb-4 block">2021 — Meta</span>
                                <h4 className="text-xl font-bold font-display mb-4">Advanced React Patterns</h4>
                                <p className="text-on-surface/60 text-sm leading-relaxed mb-6">
                                    Modern frontend architecture, state management, and performance optimization.
                                </p>
                                <a className="font-label text-xs uppercase tracking-widest text-primary flex items-center group" href="#">
                                    View Badge <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-screen-2xl mx-auto px-8 mt-48 mb-24">
                    <div className="bg-[#151c27] rounded-3xl p-16 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-primary"></div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-8 z-10">
                            Looking for a specific <br /> tech stack?
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mb-12 font-light leading-relaxed z-10">
                            Whether it's a legacy system migration or a greenfield AI project, let's discuss how my technical arsenal can bring your vision to life.
                        </p>
                        <button className="group bg-primary text-white font-display font-bold px-12 py-5 rounded-lg text-lg flex items-center gap-4 hover:bg-primary-container transition-all z-10">
                            Let's talk
                            <span className="font-label group-hover:translate-x-2 transition-transform">-&gt;</span>
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full py-12 bg-[#f0f3ff]">
                <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-screen-2xl mx-auto">
                    <p className="font-label text-[11px] uppercase tracking-widest text-[#151c27]/40 text-center md:text-left mb-6 md:mb-0">
                        © 2024 Precision Artisan. Built with High-Performance Intent.
                    </p>
                    <div className="flex gap-8">
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
