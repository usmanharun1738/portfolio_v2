<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function index(): Response
    {
        $isPreview = auth()->check() && request()->boolean('preview');
        $page = Page::with('enabledSections')
            ->where('slug', 'home')
            ->when(! $isPreview, fn($q) => $q->where('status', 'published'))
            ->first();
        $featuredProjects = Project::featured()->orderBy('sort_order')->get();

        return Inertia::render('welcome', [
            'page' => $page,
            'sections' => $page?->enabledSections->toArray() ?? [],
            'featuredProjects' => $featuredProjects,
        ]);
    }
}
