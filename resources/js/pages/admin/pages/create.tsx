import { Head, useForm } from '@inertiajs/react';
import admin from '@/routes/admin';
import { dashboard } from '@/routes';

export default function AdminPagesCreate() {
    const { data, setData, post, processing, errors } = useForm({
        slug: '',
        title: '',
        meta_title: '',
        meta_description: '',
        is_published: true,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(admin.pages.store.url());
    }

    return (
        <>
            <Head title="New Page — Admin" />
            <div className="mx-auto max-w-2xl p-6">
                <h1 className="mb-6 text-2xl font-bold">New Page</h1>
                <form onSubmit={submit} className="space-y-5">
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
                            placeholder="e.g. home"
                        />
                    </Field>
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
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-on-primary hover:opacity-90 disabled:opacity-60"
                        >
                            Create Page
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

AdminPagesCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard.url() },
        { title: 'Pages', href: admin.pages.index.url() },
        { title: 'New Page', href: admin.pages.create.url() },
    ],
};
