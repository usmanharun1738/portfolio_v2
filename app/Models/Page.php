<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Page extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'meta_title',
        'meta_description',
        'status',
        'is_published',
    ];

    protected function casts(): array
    {
        return [
            'status' => 'string',
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
        return static::query()
            ->where('slug', $slug)
            ->where('status', 'published')
            ->first();
    }
}
