<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;
use Inertia\Response;

class StackController extends Controller
{
    public function index(): Response
    {
        $page = Page::with('enabledSections')->where('slug', 'stack')->where('is_published', true)->first();

        return Inertia::render('stack', [
            'page' => $page,
            'sections' => $page?->enabledSections->toArray() ?? [],
        ]);
    }
}
