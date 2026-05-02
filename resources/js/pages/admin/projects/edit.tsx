import { Head, useForm } from '@inertiajs/react';
import admin from '@/routes/admin';
import { dashboard } from '@/routes';

interface Project {
    id: number;
    title: string;
    slug: string | null;
    display_number: string;
    category: string;
    description: string | null;
    tech_stack: string[] | null;
    case_study_route: string | null;
    image_url: string | null;
    icon_name: string | null;
    card_style: string;
    grid_span: number;
    is_featured_on_home: boolean;
    home_span: number | null;
    home_height: string | null;
    sort_order: number;
    is_visible: boolean;
}

export default function AdminProjectsEdit({ project }: { project: Project }) {
    const { data, setData, patch, processing, errors } = useForm<{
        title: string;
        slug: string;
        display_number: string;
        category: string;
        description: string;
        tech_stack: string;
        case_study_route: string;
        image_url: string;
        icon_name: string;
        card_style: string;
        grid_span: number;
        is_featured_on_home: boolean;
        home_span: string;
        home_height: string;
        sort_order: number;
        is_visible: boolean;
    }>({
        title: project.title,
        slug: project.slug ?? '',
        display_number: project.display_number,
        category: project.category,
        description: project.description ?? '',
        tech_stack: project.tech_stack ? project.tech_stack.join(', ') : '',
        case_study_route: project.case_study_route ?? '',
        image_url: project.image_url ?? '',
        icon_name: project.icon_name ?? '',
        card_style: project.card_style,
        grid_span: project.grid_span,
        is_featured_on_home: project.is_featured_on_home,
        home_span: project.home_span ? String(project.home_span) : '',
        home_height: project.home_height ?? '',
        sort_order: project.sort_order,
        is_visible: project.is_visible,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        patch(admin.projects.update(project).url, {
            data: {
                ...data,
                tech_stack: data.tech_stack
                    ? data.tech_stack.split(',').map((t) => t.trim()).filter(Boolean)
                    : [],
            },
        });
    }

    return (
        <>
            <Head title={`Edit ${project.title} — Admin`} />
            <div className="mx-auto max-w-3xl p-6">
                <h1 className="mb-6 text-2xl font-bold">Edit Project: {project.title}</h1>
                <form onSubmit={submit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Field label="Title" error={errors.title}>
                            <input
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className="input"
                            />
                        </Field>
                        <Field label="Display Number" error={errors.display_number}>
                            <input
                                value={data.display_number}
                                onChange={(e) => setData('display_number', e.target.value)}
                                className="input font-mono"
                            />
                        </Field>
                        <Field label="Slug (optional)" error={errors.slug}>
                            <input
                                value={data.slug}
                                onChange={(e) => setData('slug', e.target.value)}
                                className="input font-mono"
                            />
                        </Field>
                        <Field label="Category" error={errors.category}>
                            <input
                                value={data.category}
                                onChange={(e) => setData('category', e.target.value)}
                                className="input"
                            />
                        </Field>
                    </div>

                    <Field label="Description" error={errors.description}>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            rows={3}
                            className="input"
                        />
                    </Field>

                    <Field label="Tech Stack (comma-separated)" error={errors.tech_stack}>
                        <input
                            value={data.tech_stack}
                            onChange={(e) => setData('tech_stack', e.target.value)}
                            className="input"
                        />
                    </Field>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Field label="Case Study Route (named)" error={errors.case_study_route}>
                            <input
                                value={data.case_study_route}
                                onChange={(e) => setData('case_study_route', e.target.value)}
                                className="input font-mono"
                            />
                        </Field>
                        <Field label="Image URL" error={errors.image_url}>
                            <input
                                value={data.image_url}
                                onChange={(e) => setData('image_url', e.target.value)}
                                className="input"
                            />
                        </Field>
                        <Field label="Icon Name (Material Symbol)" error={errors.icon_name}>
                            <input
                                value={data.icon_name}
                                onChange={(e) => setData('icon_name', e.target.value)}
                                className="input"
                            />
                        </Field>
                    </div>

                    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                        <Field label="Card Style" error={errors.card_style}>
                            <select
                                value={data.card_style}
                                onChange={(e) => setData('card_style', e.target.value)}
                                className="input"
                            >
                                <option value="standard">Standard</option>
                                <option value="featured">Featured</option>
                                <option value="compact">Compact</option>
                                <option value="dark">Dark</option>
                            </select>
                        </Field>
                        <Field label="Grid Span" error={errors.grid_span}>
                            <select
                                value={data.grid_span}
                                onChange={(e) => setData('grid_span', Number(e.target.value))}
                                className="input"
                            >
                                <option value={4}>4</option>
                                <option value={6}>6</option>
                                <option value={8}>8</option>
                            </select>
                        </Field>
                        <Field label="Home Span" error={errors.home_span}>
                            <select
                                value={data.home_span}
                                onChange={(e) => setData('home_span', e.target.value)}
                                className="input"
                            >
                                <option value="">—</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </Field>
                        <Field label="Home Height" error={errors.home_height}>
                            <select
                                value={data.home_height}
                                onChange={(e) => setData('home_height', e.target.value)}
                                className="input"
                            >
                                <option value="">—</option>
                                <option value="h-100">h-100</option>
                                <option value="h-125">h-125</option>
                            </select>
                        </Field>
                    </div>

                    <Field label="Sort Order" error={errors.sort_order}>
                        <input
                            type="number"
                            value={data.sort_order}
                            onChange={(e) => setData('sort_order', Number(e.target.value))}
                            className="input w-32"
                        />
                    </Field>

                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                checked={data.is_featured_on_home}
                                onChange={(e) => setData('is_featured_on_home', e.target.checked)}
                                className="h-4 w-4 rounded border-outline-variant accent-primary"
                            />
                            Featured on Homepage
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                checked={data.is_visible}
                                onChange={(e) => setData('is_visible', e.target.checked)}
                                className="h-4 w-4 rounded border-outline-variant accent-primary"
                            />
                            Visible
                        </label>
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-on-primary hover:opacity-90 disabled:opacity-60"
                        >
                            Save Changes
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

AdminProjectsEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard.url() },
        { title: 'Projects', href: admin.projects.index.url() },
        { title: 'Edit Project' },
    ],
};
