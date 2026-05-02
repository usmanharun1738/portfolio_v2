<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('projects', [
            'projects' => Project::visible()->orderBy('sort_order')->get(),
        ]);
    }
}
