import { Head, Link } from '@inertiajs/react';
import { dashboard } from '@/routes';
import admin from '@/routes/admin';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="p-6">
                <h1 className="mb-8 text-2xl font-bold">CMS Dashboard</h1>

                <div className="grid gap-4 sm:grid-cols-3">
                    <DashCard
                        title="Projects"
                        description="Add, edit, and reorder portfolio projects"
                        href={admin.projects.index.url()}
                        icon="work"
                    />
                    <DashCard
                        title="Pages"
                        description="Manage page metadata and sections"
                        href={admin.pages.index.url()}
                        icon="article"
                    />
                    <DashCard
                        title="Settings"
                        description="Edit global site settings"
                        href={admin.settings.index.url()}
                        icon="settings"
                    />
                </div>
            </div>
        </>
    );
}

function DashCard({
    title,
    description,
    href,
    icon,
}: {
    title: string;
    description: string;
    href: string;
    icon: string;
}) {
    return (
        <Link
            href={href}
            className="group flex flex-col gap-3 rounded-xl border border-sidebar-border bg-surface-container-low p-6 transition-colors hover:bg-surface-container"
        >
            <span className="material-symbols-outlined text-3xl text-primary">{icon}</span>
            <div>
                <p className="font-semibold text-on-surface">{title}</p>
                <p className="text-sm text-on-surface-variant">{description}</p>
            </div>
        </Link>
    );
}

Dashboard.layout = {
    breadcrumbs: [{ title: 'Dashboard', href: dashboard.url() }],
};

