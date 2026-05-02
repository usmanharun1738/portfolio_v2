<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;
use Inertia\Response;

class ResumeController extends Controller
{
    public function index(): Response
    {
        $page = Page::with('enabledSections')->where('slug', 'resume')->where('is_published', true)->first();

        return Inertia::render('resume', [
            'page' => $page,
            'sections' => $page?->enabledSections->toArray() ?? [],
        ]);
    }
}
