<?php

use App\Models\Media;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;

test('guests cannot access media library', function () {
    $this->get(route('admin.media.index'))
        ->assertRedirect(route('login'));
});

test('authenticated user can view media library', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('admin.media.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('admin/media/index')->has('media'));
});

test('authenticated user can upload an image', function () {
    Storage::fake('public');
    $user = User::factory()->create();
    $file = UploadedFile::fake()->create('photo.jpg', 100, 'image/jpeg');

    $this->actingAs($user)
        ->post(route('admin.media.store'), [
            'file' => $file,
            'alt' => 'A test photo',
        ])
        ->assertRedirect();

    expect(Media::count())->toBe(1);
    $media = Media::first();
    expect($media->original_name)->toBe('photo.jpg');
    expect($media->alt)->toBe('A test photo');
    expect($media->mime_type)->toBe('image/jpeg');
    Storage::disk('public')->assertExists($media->path);
});

test('upload rejects non-image files', function () {
    $user = User::factory()->create();
    $file = UploadedFile::fake()->create('document.pdf', 100, 'application/pdf');

    $this->actingAs($user)
        ->post(route('admin.media.store'), ['file' => $file])
        ->assertSessionHasErrors('file');
});

test('authenticated user can delete media', function () {
    Storage::fake('public');
    $user = User::factory()->create();
    $media = Media::factory()->create(['path' => 'media/test.jpg']);
    Storage::disk('public')->put($media->path, 'fake-image-data');

    $this->actingAs($user)
        ->delete(route('admin.media.destroy', $media))
        ->assertRedirect();

    expect(Media::count())->toBe(0);
    Storage::disk('public')->assertMissing($media->path);
});
