<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Media;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class MediaController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/media/index', [
            'media' => Media::latest()->get(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'file' => ['required', 'file', 'mimes:jpg,jpeg,png,gif,webp,svg', 'max:10240'],
            'alt' => ['nullable', 'string', 'max:255'],
        ]);

        $file = $request->file('file');
        $extension = $file->getClientOriginalExtension();
        $filename = Str::uuid() . '.' . strtolower($extension);
        $path = $file->storeAs('media', $filename, 'public');

        Media::create([
            'filename' => $filename,
            'original_name' => $file->getClientOriginalName(),
            'path' => $path,
            'mime_type' => $file->getMimeType(),
            'size' => $file->getSize(),
            'alt' => $request->input('alt'),
        ]);

        return back()->with('success', 'File uploaded.');
    }

    public function destroy(Media $media): RedirectResponse
    {
        Storage::disk('public')->delete($media->path);
        $media->delete();

        return back()->with('success', 'File deleted.');
    }
}
