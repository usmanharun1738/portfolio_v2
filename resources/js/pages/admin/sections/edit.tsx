import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import admin from '@/routes/admin';
import { dashboard } from '@/routes';

interface Flash {
    success?: string;
    error?: string;
}

interface Page {
    id: number;
    slug: string;
    title: string;
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

interface MediaItem {
    id: number;
    original_name: string;
    url: string;
}

export default function AdminSectionsEdit({
    page,
    section,
    media,
}: {
    page: Page;
    section: Section;
    media: MediaItem[];
}) {
    const [showMediaPicker, setShowMediaPicker] = useState(false);
    const [mediaKeyPath, setMediaKeyPath] = useState('image_url');

    const { props } = usePage<{ flash: Flash }>();
    const flash = props.flash;

    const { data, setData, patch, processing, errors } = useForm({
        name: section.name,
        content: JSON.stringify(section.content, null, 2),
        sort_order: section.sort_order,
        is_enabled: section.is_enabled,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        patch(admin.pages.sections.update({ page, section }).url);
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

    return (
        <>
            <Head title={`Edit Section — ${section.name}`} />

            <div className="mx-auto max-w-3xl p-6">
                {flash?.success && (
                    <div className="mb-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">{flash.success}</div>
                )}
                {flash?.error && (
                    <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{flash.error}</div>
                )}

                <div className="mb-2 flex items-center justify-between">
                    <p className="font-mono text-xs text-on-surface-variant">
                        {section.key} · {section.type}
                    </p>
                    <a
                        href={admin.media.index.url()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary underline-offset-2 hover:underline"
                    >
                        Media Library ↗
                    </a>
                </div>

                <h1 className="mb-6 text-2xl font-bold">Edit Section: {section.name}</h1>

                <form onSubmit={submit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Field label="Name (Admin label)" error={errors.name}>
                            <input
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </Field>

                        <Field label="Sort Order" error={errors.sort_order}>
                            <input
                                type="number"
                                value={data.sort_order}
                                onChange={(e) => setData('sort_order', parseInt(e.target.value))}
                                className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </Field>
                    </div>

                    <Field label="Content (JSON)" error={errors.content}>
                        <textarea
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value)}
                            rows={20}
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
                                onClick={() => setShowMediaPicker(true)}
                                className="rounded-lg border border-outline-variant px-3 py-2 text-xs font-semibold hover:bg-surface-container"
                            >
                                Choose Media
                            </button>
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

                    <button
                        type="submit"
                        disabled={processing}
                        className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-on-primary hover:opacity-90 disabled:opacity-60"
                    >
                        Save Section
                    </button>
                </form>

                {showMediaPicker && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                        <div className="max-h-[80vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-surface p-5 shadow-2xl">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-bold">Select Media</h2>
                                <button
                                    type="button"
                                    onClick={() => setShowMediaPicker(false)}
                                    className="rounded-lg px-3 py-1 text-sm hover:bg-surface-container"
                                >
                                    Close
                                </button>
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

AdminSectionsEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard.url() },
        { title: 'Pages', href: admin.pages.index.url() },
        { title: 'Edit Section', href: '#' },
    ],
};
