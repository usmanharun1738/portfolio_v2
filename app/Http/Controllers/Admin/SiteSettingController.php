<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateSettingRequest;
use App\Models\SiteSetting;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class SiteSettingController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/settings/index', [
            'settings' => SiteSetting::orderBy('group')->orderBy('key')->get(),
        ]);
    }

    public function update(UpdateSettingRequest $request, SiteSetting $siteSetting): RedirectResponse
    {
        $siteSetting->update($request->validated());

        return back()->with('success', 'Setting updated.');
    }

    public function bulkUpdate(UpdateSettingRequest $request): RedirectResponse
    {
        $validated = $request->validate([
            'settings' => ['required', 'array'],
            'settings.*.key' => ['required', 'string'],
            'settings.*.value' => ['nullable', 'string'],
        ]);

        foreach ($validated['settings'] as $item) {
            SiteSetting::where('key', $item['key'])->update(['value' => $item['value']]);
        }

        return back()->with('success', 'Settings saved.');
    }
}
