<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Page extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'meta_title',
        'meta_description',
        'is_published',
    ];

    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
        ];
    }

    public function sections(): HasMany
    {
        return $this->hasMany(PageSection::class)->orderBy('sort_order');
    }

    public function enabledSections(): HasMany
    {
        return $this->hasMany(PageSection::class)
            ->where('is_enabled', true)
            ->orderBy('sort_order');
    }

    public static function findBySlug(string $slug): ?static
    {
        return static::where('slug', $slug)->where('is_published', true)->first();
    }
}
