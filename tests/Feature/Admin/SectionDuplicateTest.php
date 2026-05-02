<?php

use App\Models\Page;
use App\Models\PageSection;
use App\Models\User;

test('guests cannot duplicate a section', function () {
    $page = Page::factory()->create();
    $section = PageSection::factory()->for($page)->create(['sort_order' => 1]);

    $this->post(route('admin.pages.sections.duplicate', [$page, $section]))
        ->assertRedirect(route('login'));
});

test('authenticated user can duplicate a section', function () {
    $user = User::factory()->create();
    $page = Page::factory()->create();
    $section = PageSection::factory()->for($page)->create([
        'name' => 'Hero Section',
        'sort_order' => 1,
    ]);

    $this->actingAs($user)
        ->post(route('admin.pages.sections.duplicate', [$page, $section]))
        ->assertRedirect(route('admin.pages.edit', $page));

    expect(PageSection::where('page_id', $page->id)->count())->toBe(2);

    $copy = PageSection::where('name', 'Hero Section (Copy)')->first();
    expect($copy)->not->toBeNull();
    expect($copy->sort_order)->toBe(2);
    expect($copy->content)->toBe($section->content);
});

test('duplicate section sort order is higher than existing max', function () {
    $user = User::factory()->create();
    $page = Page::factory()->create();
    $s1 = PageSection::factory()->for($page)->create(['sort_order' => 1]);
    PageSection::factory()->for($page)->create(['sort_order' => 5]);

    $this->actingAs($user)
        ->post(route('admin.pages.sections.duplicate', [$page, $s1]));

    $copy = PageSection::where('name', $s1->name.' (Copy)')->first();
    expect($copy->sort_order)->toBe(6);
});
