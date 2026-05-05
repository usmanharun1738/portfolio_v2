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

interface ResumeHeroContent {
    availability_label: string;
    heading: string;
    email: string;
    github_url: string;
    linkedin_url: string;
    roles: string[];
}

interface ResumeSummaryContent {
    body: string;
}

interface ExperienceItem {
    title: string;
    dates: string;
    description: string;
    highlights: string[];
}

interface ResumeExperienceContent {
    items: ExperienceItem[];
}

interface ResumeSkillsContent {
    languages: string[];
    frameworks: string[];
    mobile: string[];
    specialties: string[];
}

interface EducationItem {
    degree: string;
    institution: string;
    year: string;
}

interface ResumeEducationContent {
    items: EducationItem[];
}

interface CertificationItem {
    title: string;
    issuer: string;
}

interface ResumeCertificationsContent {
    items: CertificationItem[];
}

// ─── Section components ───────────────────────────────────────────────────────

function ResumeHeroSection({ content }: { content: ResumeHeroContent }) {
    return (
        <section className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 md:mb-24">
            <div className="lg:col-span-8">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block font-medium">
                    {content.availability_label}
                </span>
                <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
                    {content.heading.split('Intelligence').map((part, i, arr) => (
                        <span key={i}>{part}{i < arr.length - 1 && <span className="text-primary italic">Intelligence</span>}</span>
                    ))}
                </h1>
                <div className="flex flex-wrap gap-3 mb-8">
                    {content.roles.map((role) => (
                        <span key={role} className="bg-surface-container-low px-4 py-1.5 rounded-full text-sm font-medium border border-outline-variant/15">{role}</span>
                    ))}
                </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
                <div className="space-y-4 rounded-xl border border-outline-variant/10 bg-surface-container-low p-6 sm:p-8">
                    <a className="flex items-center gap-3 group" href={`mailto:${content.email}`}>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                        <span className="text-sm font-medium text-on-secondary-container">{content.email}</span>
                    </a>
                    <a className="flex items-center gap-3 group" href={content.github_url}>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined">code</span>
                        </div>
                        <span className="text-sm font-medium text-on-secondary-container">github.com/usman-haruna</span>
                    </a>
                    <a className="flex items-center gap-3 group" href={content.linkedin_url}>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined">share</span>
                        </div>
                        <span className="text-sm font-medium text-on-secondary-container">linkedin.com/in/usmanharuna</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

function ResumeSummarySection({ content }: { content: ResumeSummaryContent }) {
    return (
        <section className="mb-16 md:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">Professional Summary</h2>
                </div>
                <div className="lg:col-span-8">
                    <p className="text-lg sm:text-xl md:text-2xl text-on-secondary-container leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: content.body }} />
                </div>
            </div>
        </section>
    );
}

function ResumeExperienceSection({ content }: { content: ResumeExperienceContent }) {
    return (
        <div className="lg:col-span-8 space-y-16">
            <div>
                <h3 className="font-label text-[11px] uppercase tracking-widest text-primary mb-12 font-bold flex items-center gap-4">
                    Professional Experience & Projects
                    <div className="h-px grow bg-outline-variant/30"></div>
                </h3>
                <div className="space-y-12">
                    {content.items.map((item) => (
                        <div key={item.title} className="group relative">
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                <h4 className="text-xl sm:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">{item.title}</h4>
                                <span className="font-label text-xs text-on-secondary-container">{item.dates}</span>
                            </div>
                            <p className="text-on-secondary-container mb-6 leading-relaxed max-w-2xl">{item.description}</p>
                            {item.highlights.length > 0 && (
                                <ul className="space-y-2 mb-6">
                                    {item.highlights.map((h) => (
                                        <li key={h} className="flex gap-3 items-start text-sm">
                                            <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ResumeSkillsSection({ content }: { content: ResumeSkillsContent }) {
    const groups = [
        { label: 'Languages', items: content.languages, specialty: false },
        { label: 'Frameworks', items: content.frameworks, specialty: false },
        { label: 'Mobile', items: content.mobile, specialty: false },
        { label: 'Specialties', items: content.specialties, specialty: true },
    ];

    return (
        <div className="space-y-8">
            <h3 className="font-label text-[11px] uppercase tracking-widest text-primary mb-8 font-bold">Technical Arsenal</h3>
            {groups.map((g) => (
                <div key={g.label}>
                    <span className="text-xs font-bold uppercase text-on-secondary-container mb-4 block">{g.label}</span>
                    <div className="flex flex-wrap gap-2">
                        {g.items.map((item) => (
                            <span key={item} className={g.specialty ? 'bg-primary/10 text-primary text-xs px-3 py-1 rounded-md font-bold' : 'bg-surface-container text-xs px-3 py-1 rounded-md font-medium'}>{item}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function ResumeEducationSection({ content }: { content: ResumeEducationContent }) {
    return (
        <div className="space-y-6">
            <h3 className="font-label text-[11px] uppercase tracking-widest text-primary mb-8 font-bold">Education</h3>
            {content.items.map((item) => (
                <div key={item.degree}>
                    <p className="font-bold text-on-surface">{item.degree}</p>
                    <p className="text-sm text-on-secondary-container">{item.institution}</p>
                    <p className="font-label text-[10px] text-on-secondary-container mt-1">{item.year}</p>
                </div>
            ))}
        </div>
    );
}

function ResumeCertificationsSection({ content }: { content: ResumeCertificationsContent }) {
    return (
        <div className="space-y-4">
            <h3 className="font-label text-[11px] uppercase tracking-widest text-primary mb-8 font-bold">Certifications</h3>
            {content.items.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">workspace_premium</span>
                    <div>
                        <p className="text-sm font-bold text-on-surface leading-tight">{item.title}</p>
                        <p className="text-[11px] text-on-secondary-container">{item.issuer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

// The resume page uses a two-column layout; experience goes left, skills/education/certs go right.
// We collect sidebar sections and render them together.
function renderMainLayout(sections: Section[]) {
    const heroSection = sections.find((s) => s.type === 'resume_hero');
    const summarySection = sections.find((s) => s.type === 'resume_summary');
    const experienceSection = sections.find((s) => s.type === 'resume_experience');
    const skillsSection = sections.find((s) => s.type === 'resume_skills');
    const educationSection = sections.find((s) => s.type === 'resume_education');
    const certSection = sections.find((s) => s.type === 'resume_certifications');

    return (
        <>
            {heroSection && <ResumeHeroSection content={heroSection.content as unknown as ResumeHeroContent} />}
            {summarySection && <ResumeSummarySection content={summarySection.content as unknown as ResumeSummaryContent} />}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
                {experienceSection && <ResumeExperienceSection content={experienceSection.content as unknown as ResumeExperienceContent} />}
                <div className="lg:col-span-4 space-y-16">
                    {skillsSection && <ResumeSkillsSection content={skillsSection.content as unknown as ResumeSkillsContent} />}
                    {educationSection && <ResumeEducationSection content={educationSection.content as unknown as ResumeEducationContent} />}
                    {certSection && <ResumeCertificationsSection content={certSection.content as unknown as ResumeCertificationsContent} />}
                </div>
            </div>
        </>
    );
}

export default function Resume({ page, sections }: { page: PageData | null; sections: Section[] }) {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
    }, []);

    return (
        <div className="min-h-screen bg-surface">
            <Head title={page?.meta_title ?? 'Resume'}>
                {page?.meta_description && <meta name="description" content={page.meta_description} />}
            </Head>
            <PortfolioNavbar
                homeUrl={home.url()}
                projectsUrl="/projects"
                stackUrl="/stack"
                processUrl="/process"
                contactUrl="/contact"
                resumeUrl="/resume"
                activeItem="resume"
            />

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 md:py-20">
                {renderMainLayout(sections)}
            </main>

            {/* Footer */}
            <footer className="mt-20 w-full border-t border-outline-variant/15 bg-[#f9f9ff] dark:bg-slate-950">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-12 sm:px-6 lg:px-8 md:flex-row">
                    <div className="mb-6 md:mb-0">
                        <span className="font-label uppercase tracking-widest text-[10px] text-slate-500">
                            © 2024 Usman Haruna. Built with Precision Artisan.
                        </span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
                        <a className="font-label uppercase tracking-widest text-[10px] text-slate-500 hover:text-[#bc0003] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-all" href="#">GitHub</a>
                        <a className="font-label uppercase tracking-widest text-[10px] text-slate-500 hover:text-[#bc0003] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-all" href="#">LinkedIn</a>
                        <a className="font-label uppercase tracking-widest text-[10px] text-slate-500 hover:text-[#bc0003] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-all" href="#">Email</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
