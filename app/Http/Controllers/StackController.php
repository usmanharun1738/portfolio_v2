<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;
use Inertia\Response;

class StackController extends Controller
{
    public function index(): Response
    {
        $isPreview = auth()->check() && request()->boolean('preview');
        $page = Page::with('enabledSections')
            ->where('slug', 'stack')
            ->when(! $isPreview, fn($q) => $q->where('status', 'published'))
            ->first();

        return Inertia::render('stack', [
            'page' => $page,
            'sections' => $page?->enabledSections->toArray() ?? [],
        ]);
    }
}
