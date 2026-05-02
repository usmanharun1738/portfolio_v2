import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import admin from '@/routes/admin';
import { dashboard } from '@/routes';

interface SiteSetting {
    id: number;
    key: string;
    value: string | null;
    group: string;
    type: string;
    description: string | null;
}

export default function AdminSettingsIndex({ settings }: { settings: SiteSetting[] }) {
    const groups = [...new Set(settings.map((s) => s.group))];

    return (
        <>
            <Head title="Settings — Admin" />
            <div className="mx-auto max-w-3xl p-6">
                <h1 className="mb-6 text-2xl font-bold">Site Settings</h1>

                {groups.map((group) => (
                    <section key={group} className="mb-8">
                        <h2 className="mb-3 font-mono text-xs font-semibold tracking-widest text-on-surface-variant uppercase">
                            {group}
                        </h2>
                        <div className="divide-y divide-sidebar-border overflow-hidden rounded-xl border border-sidebar-border">
                            {settings
                                .filter((s) => s.group === group)
                                .map((setting) => (
                                    <SettingRow key={setting.id} setting={setting} />
                                ))}
                        </div>
                    </section>
                ))}

                {settings.length === 0 && (
                    <p className="text-sm text-on-surface-variant">No settings configured yet.</p>
                )}
            </div>
        </>
    );
}

function SettingRow({ setting }: { setting: SiteSetting }) {
    const [value, setValue] = useState(setting.value ?? '');
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    function save() {
        setSaving(true);
        router.patch(
            admin.settings.update(setting).url,
            { value },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setSaved(true);
                    setTimeout(() => setSaved(false), 2000);
                },
                onFinish: () => setSaving(false),
            },
        );
    }

    return (
        <div className="flex items-start gap-4 px-4 py-4 hover:bg-surface-container-low/40">
            <div className="flex-1">
                <p className="mb-0.5 text-sm font-medium text-on-surface">{setting.key}</p>
                {setting.description && (
                    <p className="mb-2 text-xs text-on-surface-variant">{setting.description}</p>
                )}
                {setting.type === 'boolean' ? (
                    <select
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="rounded-lg border border-outline-variant bg-surface px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                ) : (
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full rounded-lg border border-outline-variant bg-surface px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                )}
            </div>
            <button
                onClick={save}
                disabled={saving}
                className={`mt-6 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${saved
                        ? 'bg-green-100 text-green-700'
                        : 'bg-primary text-on-primary hover:opacity-90'
                    } disabled:opacity-60`}
            >
                {saved ? 'Saved!' : saving ? 'Saving…' : 'Save'}
            </button>
        </div>
    );
}

AdminSettingsIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard.url() },
        { title: 'Settings', href: admin.settings.index.url() },
    ],
};
