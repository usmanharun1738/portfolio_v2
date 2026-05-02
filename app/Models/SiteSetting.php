<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    protected $fillable = [
        'key',
        'value',
        'group',
        'type',
        'description',
    ];

    /**
     * Get a setting value by key, with optional default.
     */
    public static function get(string $key, mixed $default = null): mixed
    {
        $setting = static::where('key', $key)->first();

        if ($setting === null) {
            return $default;
        }

        return match ($setting->type) {
            'json' => json_decode($setting->value, true),
            'boolean' => filter_var($setting->value, FILTER_VALIDATE_BOOLEAN),
            default => $setting->value,
        };
    }

    /**
     * Set or upsert a setting value by key.
     */
    public static function set(string $key, mixed $value, string $group = 'general', string $type = 'text'): static
    {
        $stored = is_array($value) ? json_encode($value) : (string) $value;

        return static::updateOrCreate(
            ['key' => $key],
            ['value' => $stored, 'group' => $group, 'type' => is_array($value) ? 'json' : $type],
        );
    }

    /**
     * Get all settings for a group as a key→value array.
     *
     * @return array<string, mixed>
     */
    public static function group(string $group): array
    {
        return static::where('group', $group)
            ->get()
            ->mapWithKeys(fn (SiteSetting $s) => [$s->key => static::get($s->key)])
            ->all();
    }
}
