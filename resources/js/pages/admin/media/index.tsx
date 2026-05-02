import { Head, router, useForm, usePage } from '@inertiajs/react';
import admin from '@/routes/admin';
import { dashboard } from '@/routes';
import { useRef } from 'react';

interface MediaItem {
    id: number;
    filename: string;
    original_name: string;
    path: string;
    url: string;
    mime_type: string;
    size: number;
    alt: string | null;
    created_at: string;
}

interface Flash {
    success?: string;
    error?: string;
}

function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function AdminMediaIndex({ media }: { media: MediaItem[] }) {
    const { props } = usePage<{ flash: Flash }>();
    const flash = props.flash;
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { data, setData, post, processing, errors, reset } = useForm<{
        file: File | null;
        alt: string;
    }>({
        file: null,
        alt: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(admin.media.store.url(), {
            forceFormData: true,
            onSuccess: () => {
                reset();
                if (fileInputRef.current) fileInputRef.current.value = '';
            },
        });
    }

    function deleteMedia(item: MediaItem) {
        if (!confirm(`Delete "${item.original_name}"?`)) return;
        router.delete(admin.media.destroy(item).url, { preserveScroll: true });
    }

    function copyUrl(url: string) {
        navigator.clipboard.writeText(url);
    }

    return (
        <>
            <Head title="Media Library — Admin" />
            <div className="p-6">
                {flash?.success && (
                    <div className="mb-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                        {flash.success}
                    </div>
                )}
                {flash?.error && (
                    <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                        {flash.error}
                    </div>
                )}

                <h1 className="mb-6 text-2xl font-bold">Media Library</h1>

                {/* Upload form */}
                <div className="mb-8 rounded-xl border border-sidebar-border bg-surface-container-low/40 p-5">
                    <h2 className="mb-4 text-sm font-semibold text-on-surface-variant uppercase tracking-wide">Upload File</h2>
                    <form onSubmit={submit} className="flex flex-wrap items-end gap-4">
                        <div className="flex-1 min-w-60">
                            <label className="mb-1 block text-sm font-medium text-on-surface-variant">
                                File <span className="text-xs font-normal">(jpg, png, gif, webp, svg — max 10 MB)</span>
                            </label>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".jpg,.jpeg,.png,.gif,.webp,.svg"
                                onChange={(e) => setData('file', e.target.files?.[0] ?? null)}
                                className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            {errors.file && <p className="mt-1 text-xs text-red-600">{errors.file}</p>}
                        </div>
                        <div className="w-60">
                            <label className="mb-1 block text-sm font-medium text-on-surface-variant">
                                Alt text <span className="text-xs font-normal">(optional)</span>
                            </label>
                            <input
                                value={data.alt}
                                onChange={(e) => setData('alt', e.target.value)}
                                placeholder="Describe the image..."
                                className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={processing || !data.file}
                            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-on-primary hover:opacity-90 disabled:opacity-60"
                        >
                            {processing ? 'Uploading…' : 'Upload'}
                        </button>
                    </form>
                </div>

                {/* Media grid */}
                {media.length === 0 ? (
                    <p className="text-center text-sm text-on-surface-variant py-12">No files uploaded yet.</p>
                ) : (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {media.map((item) => (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-xl border border-sidebar-border bg-surface-container-low"
                            >
                                <div className="aspect-square overflow-hidden bg-surface-container">
                                    <img
                                        src={item.url}
                                        alt={item.alt ?? item.original_name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-2">
                                    <p className="truncate text-xs font-medium text-on-surface" title={item.original_name}>
                                        {item.original_name}
                                    </p>
                                    <p className="text-xs text-on-surface-variant">{formatBytes(item.size)}</p>
                                </div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                                    <button
                                        onClick={() => copyUrl(item.url)}
                                        className="rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-900 hover:bg-white"
                                    >
                                        Copy URL
                                    </button>
                                    <button
                                        onClick={() => deleteMedia(item)}
                                        className="rounded-lg bg-red-600/90 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

AdminMediaIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard.url() },
        { title: 'Media Library', href: admin.media.index.url() },
    ],
};
