<?php

use App\Models\Project;
use App\Models\User;

test('guests cannot access project preview redirect', function () {
    $project = Project::factory()->create();

    $this->get(route('admin.projects.preview', $project))
        ->assertRedirect(route('login'));
});

test('authenticated user can preview project case study route', function () {
    $user = User::factory()->create();
    $project = Project::factory()->create([
        'case_study_route' => 'projects.face-recognition',
    ]);

    $this->actingAs($user)
        ->get(route('admin.projects.preview', $project))
        ->assertRedirect(route('projects.face-recognition'));
});

test('project preview falls back to projects index when no valid route is configured', function () {
    $user = User::factory()->create();
    $project = Project::factory()->create([
        'case_study_route' => 'projects.missing-route-name',
    ]);

    $this->actingAs($user)
        ->get(route('admin.projects.preview', $project))
        ->assertRedirect(route('projects.index'));
});
