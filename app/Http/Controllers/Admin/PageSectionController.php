<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreSectionRequest;
use App\Http\Requests\Admin\UpdateSectionRequest;
use App\Models\Media;
use App\Models\Page;
use App\Models\PageSection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PageSectionController extends Controller
{
    public function create(Page $page): Response
    {
        return Inertia::render('admin/sections/create', [
            'page' => $page,
            'media' => Media::latest()->limit(60)->get(),
        ]);
    }

    public function store(StoreSectionRequest $request, Page $page): RedirectResponse
    {
        $data = $request->validated();
        $data['sort_order'] = $page->sections()->max('sort_order') + 1;

        $page->sections()->create($data);

        return redirect()->route('admin.pages.edit', $page)
            ->with('success', 'Section added.');
    }

    public function edit(Page $page, PageSection $section): Response
    {
        return Inertia::render('admin/sections/edit', [
            'page' => $page,
            'section' => $section,
            'media' => Media::latest()->limit(60)->get(),
        ]);
    }

    public function update(UpdateSectionRequest $request, Page $page, PageSection $section): RedirectResponse
    {
        $section->update($request->validated());

        return back()->with('success', 'Section updated.');
    }

    public function destroy(Page $page, PageSection $section): RedirectResponse
    {
        $section->delete();

        return redirect()->route('admin.pages.edit', $page)
            ->with('success', 'Section deleted.');
    }

    public function duplicate(Page $page, PageSection $section): RedirectResponse
    {
        $copy = $section->replicate();
        $copy->name = $section->name . ' (Copy)';
        $copy->sort_order = $page->sections()->max('sort_order') + 1;
        $baseKey = $section->key . '_copy';
        $key = $baseKey;
        $i = 2;

        while ($page->sections()->where('key', $key)->exists()) {
            $key = $baseKey . '_' . $i++;
        }

        $copy->key = $key;
        $copy->save();

        return redirect()->route('admin.pages.edit', $page)
            ->with('success', 'Section duplicated.');
    }

    public function reorder(Request $request, Page $page): JsonResponse
    {
        $validated = $request->validate([
            'order' => ['required', 'array'],
            'order.*.id' => ['required', 'integer'],
            'order.*.sort_order' => ['required', 'integer'],
        ]);

        foreach ($validated['order'] as $item) {
            $page->sections()->where('id', $item['id'])->update(['sort_order' => $item['sort_order']]);
        }

        return response()->json(['message' => 'Order saved.']);
    }
}
