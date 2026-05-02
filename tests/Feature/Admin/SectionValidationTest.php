<?php

use App\Models\Page;
use App\Models\PageSection;
use App\Models\User;

test('store section accepts json string content', function () {
    $user = User::factory()->create();
    $page = Page::factory()->create();

    $payload = [
        'key' => 'stack-hero',
        'type' => 'stack_hero',
        'name' => 'Stack Hero',
        'content' => json_encode([
            'eyebrow' => 'Technical Foundations',
            'heading' => "Stack\nArchitecture",
            'bio' => 'Built for reliability and speed.',
            'image_url' => '/storage/media/stack.jpg',
        ]),
        'is_enabled' => true,
    ];

    $this->actingAs($user)
        ->post(route('admin.pages.sections.store', $page), $payload)
        ->assertRedirect(route('admin.pages.edit', $page));

    $section = PageSection::where('page_id', $page->id)->where('key', 'stack-hero')->first();

    expect($section)->not->toBeNull();
    expect($section->content['image_url'])->toBe('/storage/media/stack.jpg');
});

test('store section validates required content keys by type', function () {
    $user = User::factory()->create();
    $page = Page::factory()->create();

    $payload = [
        'key' => 'stack-hero',
        'type' => 'stack_hero',
        'name' => 'Stack Hero',
        'content' => json_encode([
            'eyebrow' => 'Only one field present',
        ]),
    ];

    $this->actingAs($user)
        ->post(route('admin.pages.sections.store', $page), $payload)
        ->assertSessionHasErrors(['content.heading', 'content.bio', 'content.image_url']);
});

test('update section accepts json string content', function () {
    $user = User::factory()->create();
    $page = Page::factory()->create();
    $section = PageSection::factory()->for($page)->create([
        'type' => 'contact_info',
        'content' => [
            'email' => 'old@example.com',
            'github_url' => 'https://github.com/old',
            'linkedin_url' => 'https://linkedin.com/in/old',
        ],
    ]);

    $payload = [
        'content' => json_encode([
            'email' => 'new@example.com',
            'github_url' => 'https://github.com/new',
            'linkedin_url' => 'https://linkedin.com/in/new',
        ]),
    ];

    $this->actingAs($user)
        ->patch(route('admin.pages.sections.update', [$page, $section]), $payload)
        ->assertRedirect();

    $section->refresh();

    expect($section->content['email'])->toBe('new@example.com');
});

test('update section validates required keys using section type', function () {
    $user = User::factory()->create();
    $page = Page::factory()->create();
    $section = PageSection::factory()->for($page)->create([
        'type' => 'contact_info',
    ]);

    $payload = [
        'content' => json_encode([
            'email' => 'new@example.com',
        ]),
    ];

    $this->actingAs($user)
        ->patch(route('admin.pages.sections.update', [$page, $section]), $payload)
        ->assertSessionHasErrors(['content.github_url', 'content.linkedin_url']);
});

test('store section key must be unique within a page', function () {
    $user = User::factory()->create();
    $page = Page::factory()->create();

    PageSection::factory()->for($page)->create([
        'key' => 'hero',
        'type' => 'stack_hero',
        'content' => [
            'eyebrow' => 'Label',
            'heading' => 'Heading',
            'bio' => 'Bio',
            'image_url' => '/storage/media/a.jpg',
        ],
    ]);

    $payload = [
        'key' => 'hero',
        'type' => 'stack_hero',
        'name' => 'Another Hero',
        'content' => json_encode([
            'eyebrow' => 'Label',
            'heading' => 'Heading',
            'bio' => 'Bio',
            'image_url' => '/storage/media/b.jpg',
        ]),
    ];

    $this->actingAs($user)
        ->post(route('admin.pages.sections.store', $page), $payload)
        ->assertSessionHasErrors('key');
});
