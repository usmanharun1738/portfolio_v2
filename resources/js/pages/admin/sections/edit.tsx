import { Head, useForm } from '@inertiajs/react';
import admin from '@/routes/admin';
import { dashboard } from '@/routes';

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

export default function AdminSectionsEdit({
    page,
    section,
}: {
    page: Page;
    section: Section;
}) {
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

    return (
        <>
            <Head title={`Edit Section — ${section.name}`} />
            <div className="mx-auto max-w-3xl p-6">
                <div className="mb-2">
                    <p className="font-mono text-xs text-on-surface-variant">
                        {section.key} · {section.type}
                    </p>
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
