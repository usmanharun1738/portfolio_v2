import { Head, Link, router } from '@inertiajs/react';
import admin from '@/routes/admin';
import { dashboard } from '@/routes';

interface Project {
    id: number;
    title: string;
    category: string;
    display_number: string;
    card_style: string;
    grid_span: number;
    is_featured_on_home: boolean;
    is_visible: boolean;
    sort_order: number;
}

export default function AdminProjectsIndex({ projects }: { projects: Project[] }) {
    function deleteProject(project: Project) {
        if (!confirm(`Delete project "${project.title}"? This cannot be undone.`)) return;
        router.delete(admin.projects.destroy(project).url);
    }

    return (
        <>
            <Head title="Projects — Admin" />
            <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Projects</h1>
                    <Link
                        href={admin.projects.create.url()}
                        className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-on-primary hover:opacity-90"
                    >
                        + New Project
                    </Link>
                </div>

                <div className="overflow-hidden rounded-xl border border-sidebar-border">
                    <table className="w-full text-sm">
                        <thead className="border-b border-sidebar-border bg-surface-container-low text-left text-on-surface-variant">
                            <tr>
                                <th className="px-4 py-3 font-medium">#</th>
                                <th className="px-4 py-3 font-medium">Title</th>
                                <th className="px-4 py-3 font-medium">Category</th>
                                <th className="px-4 py-3 font-medium">Style</th>
                                <th className="px-4 py-3 font-medium">Span</th>
                                <th className="px-4 py-3 font-medium">Featured</th>
                                <th className="px-4 py-3 font-medium">Visible</th>
                                <th className="px-4 py-3 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-sidebar-border">
                            {projects.map((project) => (
                                <tr key={project.id} className="hover:bg-surface-container-low/40">
                                    <td className="px-4 py-3 font-mono text-xs text-on-surface-variant">
                                        {project.display_number}
                                    </td>
                                    <td className="px-4 py-3 font-medium text-on-surface">{project.title}</td>
                                    <td className="px-4 py-3 text-on-surface-variant">{project.category}</td>
                                    <td className="px-4 py-3 font-mono text-xs text-on-surface-variant">
                                        {project.card_style}
                                    </td>
                                    <td className="px-4 py-3 text-on-surface-variant">{project.grid_span}</td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                                project.is_featured_on_home
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'bg-surface-container text-on-surface-variant'
                                            }`}
                                        >
                                            {project.is_featured_on_home ? 'Yes' : 'No'}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                                project.is_visible
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-amber-100 text-amber-700'
                                            }`}
                                        >
                                            {project.is_visible ? 'Visible' : 'Hidden'}
                                        </span>
                                    </td>
                                    <td className="flex gap-2 px-4 py-3">
                                        <Link
                                            href={admin.projects.edit(project).url}
                                            className="text-xs text-primary underline-offset-2 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => deleteProject(project)}
                                            className="text-xs text-red-600 underline-offset-2 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {projects.length === 0 && (
                                <tr>
                                    <td colSpan={8} className="px-4 py-8 text-center text-on-surface-variant">
                                        No projects yet.{' '}
                                        <Link href={admin.projects.create.url()} className="text-primary underline">
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

AdminProjectsIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard.url() },
        { title: 'Projects', href: admin.projects.index.url() },
    ],
};
