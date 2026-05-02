<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreSectionRequest;
use App\Http\Requests\Admin\UpdateSectionRequest;
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

    /**
     * Bulk-reorder sections for a page.
     * Expects: { order: [{ id: number, sort_order: number }] }
     */
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
