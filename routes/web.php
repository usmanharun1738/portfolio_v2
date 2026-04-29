<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::inertia('/projects', 'projects')->name('projects.index');
Route::inertia('/projects/face-recognition', 'case-studies/face-recognition')->name('projects.face-recognition');
Route::inertia('/projects/car-rental', 'case-studies/car-rental')->name('projects.car-rental');

Route::inertia('/contact', 'contact')->name('contact');

Route::inertia('/stack', 'stack')->name('stack');

Route::inertia('/process', 'process')->name('process');

Route::inertia('/resume', 'resume')->name('resume');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
