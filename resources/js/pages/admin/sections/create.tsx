import { Head, router, useForm } from '@inertiajs/react';
import { useState } from 'react';
import admin from '@/routes/admin';
import { dashboard } from '@/routes';

interface Page {
    id: number;
    slug: string;
    title: string;
}

interface MediaItem {
    id: number;
    original_name: string;
    url: string;
}

const SECTION_TYPES = [
    'hero', 'projects', 'stack', 'process', 'testimonials', 'contact',
    'stack_hero', 'stack_languages', 'stack_skills', 'stack_certifications', 'stack_cta',
    'process_hero', 'process_steps', 'process_philosophy',
    'contact_hero', 'contact_info',
    'resume_hero', 'resume_summary', 'resume_experience', 'resume_skills', 'resume_education', 'resume_certifications',
] as const;

export default function AdminSectionsCreate({ page, media }: { page: Page; media: MediaItem[] }) {
    const [showMediaPicker, setShowMediaPicker] = useState(false);
    const [mediaKeyPath, setMediaKeyPath] = useState('image_url');

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

    function setNestedValue(target: Record<string, unknown>, path: string, value: string): Record<string, unknown> {
        const cloned = structuredClone(target);
        const segments = path.split('.').filter(Boolean);

        if (segments.length === 0) {
            return cloned;
        }

        let cursor: Record<string, unknown> = cloned;

        for (let i = 0; i < segments.length - 1; i++) {
            const key = segments[i];
            const next = cursor[key];

            if (typeof next !== 'object' || next === null || Array.isArray(next)) {
                cursor[key] = {};
            }

            cursor = cursor[key] as Record<string, unknown>;
        }

        cursor[segments[segments.length - 1]] = value;

        return cloned;
    }

    function insertMediaUrl(url: string) {
        try {
            const parsed = JSON.parse(data.content) as Record<string, unknown>;
            const updated = setNestedValue(parsed, mediaKeyPath, url);
            setData('content', JSON.stringify(updated, null, 2));
            setShowMediaPicker(false);
        } catch {
            alert('Content JSON is invalid. Fix JSON before inserting media.');
        }
    }

    function openMediaPicker() {
        setShowMediaPicker(true);
        router.reload({
            only: ['media'],
            preserveScroll: true,
        });
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
                    <div className="rounded-lg border border-outline-variant bg-surface-container-low/40 p-3">
                        <div className="mb-2 text-xs font-medium text-on-surface-variant">Insert Media URL into JSON</div>
                        <div className="flex flex-wrap items-center gap-2">
                            <input
                                value={mediaKeyPath}
                                onChange={(e) => setMediaKeyPath(e.target.value)}
                                placeholder="Key path (e.g. image_url or button.icon_url)"
                                className="min-w-72 flex-1 rounded-lg border border-outline-variant bg-surface px-3 py-2 font-mono text-xs"
                            />
                            <button
                                type="button"
                                onClick={openMediaPicker}
                                className="rounded-lg border border-outline-variant px-3 py-2 text-xs font-semibold hover:bg-surface-container"
                            >
                                Choose Media
                            </button>
                            <a
                                href={admin.media.index.url()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-primary underline-offset-2 hover:underline"
                            >
                                Open Library ↗
                            </a>
                        </div>
                    </div>
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

                {showMediaPicker && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                        <div className="max-h-[80vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-surface p-5 shadow-2xl">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-bold">Select Media</h2>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            router.reload({
                                                only: ['media'],
                                                preserveScroll: true,
                                            })
                                        }
                                        className="rounded-lg border border-outline-variant px-3 py-1 text-sm hover:bg-surface-container"
                                    >
                                        Refresh
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowMediaPicker(false)}
                                        className="rounded-lg px-3 py-1 text-sm hover:bg-surface-container"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                            {media.length === 0 ? (
                                <p className="py-8 text-center text-sm text-on-surface-variant">No media found. Upload files in Media Library.</p>
                            ) : (
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                    {media.map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => insertMediaUrl(item.url)}
                                            className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low text-left transition hover:shadow-md"
                                        >
                                            <img src={item.url} alt={item.original_name} className="h-28 w-full object-cover" />
                                            <p className="truncate px-2 py-2 text-xs" title={item.original_name}>{item.original_name}</p>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
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
