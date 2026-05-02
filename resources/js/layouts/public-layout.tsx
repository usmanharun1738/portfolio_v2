import { usePage } from '@inertiajs/react';
import admin from '@/routes/admin';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    const { props } = usePage<{ is_preview?: boolean }>();

    return (
        <>
            {props.is_preview && (
                <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-lg">
                    <span>Preview Mode</span>
                    <a
                        href={admin.pages.index.url()}
                        className="rounded-md bg-white/20 px-2 py-1 text-xs hover:bg-white/30"
                    >
                        ← Admin
                    </a>
                </div>
            )}
            {children}
        </>
    );
}
