<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PageSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'page_id',
        'key',
        'type',
        'name',
        'content',
        'sort_order',
        'is_enabled',
    ];

    protected function casts(): array
    {
        return [
            'content' => 'array',
            'is_enabled' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }
}
