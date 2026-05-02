import { Head, Link, router, useForm } from '@inertiajs/react';
import admin from '@/routes/admin';
import { dashboard } from '@/routes';

interface Section {
    id: number;
    key: string;
    type: string;
    name: string;
    sort_order: number;
    is_enabled: boolean;
    updated_at: string;
}

interface Page {
    id: number;
    slug: string;
    title: string;
    meta_title: string | null;
    meta_description: string | null;
    is_published: boolean;
}

export default function AdminPagesEdit({
    page,
    sections,
}: {
    page: Page;
    sections: Section[];
}) {
    const { data, setData, patch, processing, errors } = useForm({
        title: page.title,
        slug: page.slug,
        meta_title: page.meta_title ?? '',
        meta_description: page.meta_description ?? '',
        is_published: page.is_published,
    });

    function submitPage(e: React.FormEvent) {
        e.preventDefault();
        patch(admin.pages.update(page).url);
    }

    function deleteSection(section: Section) {
        if (!confirm(`Delete section "${section.name}"?`)) return;
        router.delete(admin.pages.sections.destroy({ page, section }).url);
    }

    function toggleSection(section: Section) {
        router.patch(
            admin.pages.sections.update({ page, section }).url,
            { is_enabled: !section.is_enabled },
            { preserveScroll: true },
        );
    }

    return (
        <>
            <Head title={`Edit ${page.title} — Admin`} />
            <div className="mx-auto max-w-4xl space-y-10 p-6">
                {/* Page metadata */}
                <section>
                    <h1 className="mb-6 text-2xl font-bold">Edit Page: {page.title}</h1>
                    <form onSubmit={submitPage} className="space-y-5">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field label="Title" error={errors.title}>
                                <input
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </Field>
                            <Field label="Slug" error={errors.slug}>
                                <input
                                    value={data.slug}
                                    onChange={(e) => setData('slug', e.target.value)}
                                    className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </Field>
                        </div>
                        <Field label="Meta Title" error={errors.meta_title}>
                            <input
                                value={data.meta_title}
                                onChange={(e) => setData('meta_title', e.target.value)}
                                className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </Field>
                        <Field label="Meta Description" error={errors.meta_description}>
                            <textarea
                                value={data.meta_description}
                                onChange={(e) => setData('meta_description', e.target.value)}
                                rows={3}
                                className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </Field>
                        <label className="flex items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                checked={data.is_published}
                                onChange={(e) => setData('is_published', e.target.checked)}
                                className="h-4 w-4 rounded border-outline-variant accent-primary"
                            />
                            Published
                        </label>
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-on-primary hover:opacity-90 disabled:opacity-60"
                        >
                            Save Changes
                        </button>
                    </form>
                </section>

                {/* Sections list */}
                <section>
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-bold">Sections</h2>
                        <Link
                            href={admin.pages.sections.create(page).url}
                            className="rounded-lg bg-surface-container px-4 py-2 text-sm font-semibold hover:bg-surface-container-high"
                        >
                            + Add Section
                        </Link>
                    </div>

                    <div className="divide-y divide-sidebar-border overflow-hidden rounded-xl border border-sidebar-border">
                        {sections.map((section) => (
                            <div key={section.id} className="flex items-center justify-between px-4 py-3 hover:bg-surface-container-low/40">
                                <div className="flex items-center gap-4">
                                    <span className="w-6 text-center font-mono text-xs text-on-surface-variant">
                                        {section.sort_order}
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium text-on-surface">{section.name}</p>
                                        <p className="font-mono text-xs text-on-surface-variant">{section.key} · {section.type}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => toggleSection(section)}
                                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                            section.is_enabled
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-surface-container text-on-surface-variant'
                                        }`}
                                    >
                                        {section.is_enabled ? 'Enabled' : 'Disabled'}
                                    </button>
                                    <Link
                                        href={admin.pages.sections.edit({ page, section }).url}
                                        className="text-xs text-primary underline-offset-2 hover:underline"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteSection(section)}
                                        className="text-xs text-red-600 underline-offset-2 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                        {sections.length === 0 && (
                            <p className="px-4 py-6 text-center text-sm text-on-surface-variant">
                                No sections yet.{' '}
                                <Link href={admin.pages.sections.create(page).url} className="text-primary underline">
                                    Add one
                                </Link>.
                            </p>
                        )}
                    </div>
                </section>
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

AdminPagesEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard.url() },
        { title: 'Pages', href: admin.pages.index.url() },
        { title: 'Edit', href: '#' },
    ],
};
