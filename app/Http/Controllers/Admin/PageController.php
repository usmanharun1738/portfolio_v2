<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StorePageRequest;
use App\Http\Requests\Admin\UpdatePageRequest;
use App\Models\Page;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/pages/index', [
            'pages' => Page::withCount('sections')->orderBy('title')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/pages/create');
    }

    public function store(StorePageRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $data['is_published'] = ($data['status'] ?? 'draft') === 'published';

        $page = Page::create($data);

        return redirect()->route('admin.pages.edit', $page)
            ->with('success', 'Page created.');
    }

    public function edit(Page $page): Response
    {
        return Inertia::render('admin/pages/edit', [
            'page' => $page,
            'sections' => $page->sections()->orderBy('sort_order')->get(),
        ]);
    }

    public function update(UpdatePageRequest $request, Page $page): RedirectResponse
    {
        $data = $request->validated();

        if (array_key_exists('status', $data)) {
            $data['is_published'] = $data['status'] === 'published';
        }

        $page->update($data);

        return back()->with('success', 'Page updated.');
    }

    public function destroy(Page $page): RedirectResponse
    {
        Page::query()->whereKey($page->id)->delete();

        return redirect()->route('admin.pages.index')
            ->with('success', 'Page deleted.');
    }

    public function preview(Page $page): RedirectResponse
    {
        $slugToRoute = [
            'home' => 'home',
            'stack' => 'stack',
            'process' => 'process',
            'contact' => 'contact',
            'resume' => 'resume',
            'projects' => 'projects.index',
        ];

        $routeName = $slugToRoute[$page->slug] ?? null;

        if (! $routeName) {
            return redirect()->route('admin.pages.edit', $page)
                ->with('error', 'No preview available for this page.');
        }

        return redirect()->to(route($routeName).'?preview=1');
    }
}
