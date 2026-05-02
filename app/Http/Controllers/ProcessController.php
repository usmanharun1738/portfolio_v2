<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;
use Inertia\Response;

class ProcessController extends Controller
{
    public function index(): Response
    {
        $isPreview = auth()->check() && request()->boolean('preview');
        $page = Page::with('enabledSections')
            ->where('slug', 'process')
            ->when(! $isPreview, fn ($q) => $q->where('status', 'published'))
            ->first();

        return Inertia::render('process', [
            'page' => $page,
            'sections' => $page?->enabledSections->toArray() ?? [],
        ]);
    }
}
