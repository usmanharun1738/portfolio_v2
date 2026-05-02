import { Head, useForm } from '@inertiajs/react';
import admin from '@/routes/admin';
import { dashboard } from '@/routes';

interface Page {
    id: number;
    slug: string;
    title: string;
}

const SECTION_TYPES = [
    'hero', 'projects', 'stack', 'process', 'testimonials', 'contact',
    'stack_hero', 'stack_languages', 'stack_skills', 'stack_certifications', 'stack_cta',
    'process_hero', 'process_steps', 'process_philosophy',
    'contact_hero', 'contact_info',
    'resume_hero', 'resume_summary', 'resume_experience', 'resume_skills', 'resume_education', 'resume_certifications',
] as const;

export default function AdminSectionsCreate({ page }: { page: Page }) {
    const { data, setData, post, processing, errors } = useForm({
        key: '',
        type: 'hero' as string,
        name: '',
        content: '{}',
        is_enabled: true,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(admin.pages.sections.store(page).url);
    }

    return (
        <>
            <Head title={`Add Section — ${page.title}`} />
            <div className="mx-auto max-w-2xl p-6">
                <h1 className="mb-6 text-2xl font-bold">Add Section to {page.title}</h1>
                <form onSubmit={submit} className="space-y-5">
                    <Field label="Name (Admin label)" error={errors.name}>
                        <input
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="e.g. Hero Section"
                        />
                    </Field>
                    <Field label="Key (unique within page)" error={errors.key}>
                        <input
                            value={data.key}
                            onChange={(e) => setData('key', e.target.value)}
                            className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="e.g. hero"
                        />
                    </Field>
                    <Field label="Type" error={errors.type}>
                        <select
                            value={data.type}
                            onChange={(e) => setData('type', e.target.value)}
                            className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            {SECTION_TYPES.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                    </Field>
                    <Field label="Content (JSON)" error={errors.content}>
                        <textarea
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value)}
                            rows={10}
                            className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-2 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </Field>
                    <label className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            checked={data.is_enabled}
                            onChange={(e) => setData('is_enabled', e.target.checked)}
                            className="h-4 w-4 rounded border-outline-variant accent-primary"
                        />
                        Enabled
                    </label>
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-on-primary hover:opacity-90 disabled:opacity-60"
                        >
                            Add Section
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

function Field({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label className="mb-1 block text-sm font-medium text-on-surface-variant">{label}</label>
            {children}
            {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        </div>
    );
}

AdminSectionsCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard.url() },
        { title: 'Pages', href: admin.pages.index.url() },
        { title: 'Add Section', href: '#' },
    ],
};
