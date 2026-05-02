<?php

use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\PageSectionController;
use App\Http\Controllers\Admin\ProjectController as AdminProjectController;
use App\Http\Controllers\Admin\SiteSettingController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProcessController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\StackController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [WelcomeController::class, 'index'])->name('home');

Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
Route::inertia('/projects/face-recognition', 'case-studies/face-recognition')->name('projects.face-recognition');
Route::inertia('/projects/car-rental', 'case-studies/car-rental')->name('projects.car-rental');

Route::get('/contact', [ContactController::class, 'index'])->name('contact');

Route::get('/stack', [StackController::class, 'index'])->name('stack');

Route::get('/process', [ProcessController::class, 'index'])->name('process');

Route::get('/resume', [ResumeController::class, 'index'])->name('resume');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::prefix('admin')->name('admin.')->group(function () {
        // Projects
        Route::resource('projects', AdminProjectController::class)
            ->except(['show']);
        Route::post('projects/reorder', [AdminProjectController::class, 'reorder'])->name('projects.reorder');

        // Pages
        Route::resource('pages', PageController::class)
            ->except(['show']);
        Route::get('pages/{page}/preview', [PageController::class, 'preview'])->name('pages.preview');

        // Sections (nested under pages)
        Route::prefix('pages/{page}/sections')->name('pages.sections.')->group(function () {
            Route::get('create', [PageSectionController::class, 'create'])->name('create');
            Route::post('/', [PageSectionController::class, 'store'])->name('store');
            Route::get('{section}/edit', [PageSectionController::class, 'edit'])->name('edit');
            Route::patch('{section}', [PageSectionController::class, 'update'])->name('update');
            Route::delete('{section}', [PageSectionController::class, 'destroy'])->name('destroy');
            Route::post('reorder', [PageSectionController::class, 'reorder'])->name('reorder');
            Route::post('{section}/duplicate', [PageSectionController::class, 'duplicate'])->name('duplicate');
        });

        // Site settings
        Route::get('settings', [SiteSettingController::class, 'index'])->name('settings.index');
        Route::patch('settings/{siteSetting}', [SiteSettingController::class, 'update'])->name('settings.update');
        Route::post('settings/bulk', [SiteSettingController::class, 'bulkUpdate'])->name('settings.bulk-update');

        // Media library
        Route::get('media', [MediaController::class, 'index'])->name('media.index');
        Route::post('media', [MediaController::class, 'store'])->name('media.store');
        Route::delete('media/{media}', [MediaController::class, 'destroy'])->name('media.destroy');
    });
});

require __DIR__.'/settings.php';
