<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'display_number',
        'category',
        'description',
        'tech_stack',
        'case_study_route',
        'image_url',
        'icon_name',
        'card_style',
        'grid_span',
        'is_featured_on_home',
        'home_span',
        'home_height',
        'sort_order',
        'is_visible',
    ];

    protected function casts(): array
    {
        return [
            'tech_stack' => 'array',
            'is_featured_on_home' => 'boolean',
            'is_visible' => 'boolean',
            'grid_span' => 'integer',
            'home_span' => 'integer',
            'sort_order' => 'integer',
        ];
    }

    public function scopeVisible($query)
    {
        return $query->where('is_visible', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured_on_home', true)->where('is_visible', true);
    }
}
