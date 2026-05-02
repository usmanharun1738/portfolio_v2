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
        $page = Page::with('enabledSections')->where('slug', 'home')->where('is_published', true)->first();
        $featuredProjects = Project::featured()->orderBy('sort_order')->get();

        return Inertia::render('welcome', [
            'page' => $page,
            'sections' => $page?->enabledSections->toArray() ?? [],
            'featuredProjects' => $featuredProjects,
        ]);
    }
}
