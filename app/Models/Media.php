<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Media extends Model
{
    use HasFactory;

    protected $fillable = [
        'filename',
        'original_name',
        'path',
        'mime_type',
        'size',
        'alt',
    ];

    protected function casts(): array
    {
        return ['size' => 'integer'];
    }

    protected function url(): Attribute
    {
        return Attribute::get(fn () => Storage::disk('public')->url($this->path));
    }

    protected $appends = ['url'];
}
