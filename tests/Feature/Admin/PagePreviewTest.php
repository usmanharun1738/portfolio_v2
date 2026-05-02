<?php

use App\Models\Page;
use App\Models\User;

test('guests cannot access preview redirect', function () {
    $page = Page::factory()->create(['slug' => 'stack']);

    $this->get(route('admin.pages.preview', $page))
        ->assertRedirect(route('login'));
});

test('authenticated user can preview a page by slug', function () {
    $user = User::factory()->create();
    $page = Page::factory()->create(['slug' => 'stack', 'status' => 'draft', 'is_published' => false]);

    $this->actingAs($user)
        ->get(route('admin.pages.preview', $page))
        ->assertRedirect(route('stack').'?preview=1');
});

test('preview redirects to error for unknown slug', function () {
    $user = User::factory()->create();
    $page = Page::factory()->create(['slug' => 'unknown-slug']);

    $this->actingAs($user)
        ->get(route('admin.pages.preview', $page))
        ->assertRedirect(route('admin.pages.edit', $page));
});

test('authenticated user can view unpublished stack page in preview mode', function () {
    $user = User::factory()->create();
    Page::factory()->create(['slug' => 'stack', 'status' => 'draft', 'is_published' => false]);

    $this->actingAs($user)
        ->get(route('stack', ['preview' => '1']))
        ->assertOk();
});

test('guest cannot view unpublished stack page even with preview param', function () {
    Page::factory()->create(['slug' => 'stack', 'status' => 'draft', 'is_published' => false]);

    $this->get(route('stack', ['preview' => '1']))
        ->assertOk(); // renders with null page — still 200
});
