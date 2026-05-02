import { Head, Link, router } from '@inertiajs/react';
import admin from '@/routes/admin';
import { dashboard } from '@/routes';

interface Page {
    id: number;
    slug: string;
    title: string;
    status: 'draft' | 'published' | 'archived';
    sections_count: number;
    updated_at: string;
}

export default function AdminPagesIndex({ pages }: { pages: Page[] }) {
    function deletePage(page: Page) {
        if (!confirm(`Delete page "${page.title}"? This cannot be undone.`)) return;
        router.delete(admin.pages.destroy(page).url);
    }

    return (
        <>
            <Head title="Pages — Admin" />
            <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Pages</h1>
                    <Link
                        href={admin.pages.create.url()}
                        className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-on-primary hover:opacity-90"
                    >
                        + New Page
                    </Link>
                </div>

                <div className="overflow-hidden rounded-xl border border-sidebar-border">
                    <table className="w-full text-sm">
                        <thead className="border-b border-sidebar-border bg-surface-container-low text-left text-on-surface-variant">
                            <tr>
                                <th className="px-4 py-3 font-medium">Title</th>
                                <th className="px-4 py-3 font-medium">Slug</th>
                                <th className="px-4 py-3 font-medium">Sections</th>
                                <th className="px-4 py-3 font-medium">Status</th>
                                <th className="px-4 py-3 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-sidebar-border">
                            {pages.map((page) => (
                                <tr key={page.id} className="hover:bg-surface-container-low/40">
                                    <td className="px-4 py-3 font-medium text-on-surface">{page.title}</td>
                                    <td className="px-4 py-3 font-mono text-xs text-on-surface-variant">/{page.slug}</td>
                                    <td className="px-4 py-3 text-on-surface-variant">{page.sections_count}</td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${page.status === 'published'
                                                    ? 'bg-green-100 text-green-700'
                                                    : page.status === 'archived'
                                                        ? 'bg-slate-100 text-slate-700'
                                                        : 'bg-amber-100 text-amber-700'
                                                }`}
                                        >
                                            {page.status.charAt(0).toUpperCase() + page.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="flex gap-2 px-4 py-3">
                                        <Link
                                            href={admin.pages.edit(page).url}
                                            className="text-xs text-primary underline-offset-2 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => deletePage(page)}
                                            className="text-xs text-red-600 underline-offset-2 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {pages.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-4 py-8 text-center text-on-surface-variant">
                                        No pages yet.{' '}
                                        <Link href={admin.pages.create.url()} className="text-primary underline">
                                            Create one
                                        </Link>
                                        .
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

AdminPagesIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard.url() },
        { title: 'Pages', href: admin.pages.index.url() },
    ],
};
