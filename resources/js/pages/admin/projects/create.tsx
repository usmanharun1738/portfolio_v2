import { Head, useForm } from '@inertiajs/react';
import admin from '@/routes/admin';
import { dashboard } from '@/routes';

export default function AdminProjectsCreate() {
    const { data, setData, post, processing, errors } = useForm<{
        title: string;
        slug: string;
        display_number: string;
        category: string;
        description: string;
        tech_stack: string; // comma-separated, converted to array on submit
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
        title: '',
        slug: '',
        display_number: '',
        category: '',
        description: '',
        tech_stack: '',
        case_study_route: '',
        image_url: '',
        icon_name: '',
        card_style: 'standard',
        grid_span: 6,
        is_featured_on_home: false,
        home_span: '',
        home_height: '',
        sort_order: 0,
        is_visible: true,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(admin.projects.store.url(), {
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
            <Head title="New Project — Admin" />
            <div className="mx-auto max-w-3xl p-6">
                <h1 className="mb-6 text-2xl font-bold">New Project</h1>
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
                                placeholder="01"
                                className="input font-mono"
                            />
                        </Field>
                        <Field label="Slug (optional)" error={errors.slug}>
                            <input
                                value={data.slug}
                                onChange={(e) => setData('slug', e.target.value)}
                                placeholder="face-recognition"
                                className="input font-mono"
                            />
                        </Field>
                        <Field label="Category" error={errors.category}>
                            <input
                                value={data.category}
                                onChange={(e) => setData('category', e.target.value)}
                                placeholder="Artificial Intelligence"
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
                            placeholder="React, Laravel, PostgreSQL"
                            className="input"
                        />
                    </Field>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Field label="Case Study Route (named)" error={errors.case_study_route}>
                            <input
                                value={data.case_study_route}
                                onChange={(e) => setData('case_study_route', e.target.value)}
                                placeholder="projects.face-recognition"
                                className="input font-mono"
                            />
                        </Field>
                        <Field label="Image URL" error={errors.image_url}>
                            <input
                                value={data.image_url}
                                onChange={(e) => setData('image_url', e.target.value)}
                                placeholder="https://..."
                                className="input"
                            />
                        </Field>
                        <Field label="Icon Name (Material Symbol)" error={errors.icon_name}>
                            <input
                                value={data.icon_name}
                                onChange={(e) => setData('icon_name', e.target.value)}
                                placeholder="school"
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
                            Create Project
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

AdminProjectsCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard.url() },
        { title: 'Projects', href: admin.projects.index.url() },
        { title: 'New Project', href: admin.projects.create.url() },
    ],
};
