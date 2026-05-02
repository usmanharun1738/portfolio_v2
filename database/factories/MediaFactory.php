<?php

namespace Database\Factories;

use App\Models\Media;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Media>
 */
class MediaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'filename' => fake()->uuid().'.jpg',
            'original_name' => fake()->word().'.jpg',
            'path' => 'media/'.fake()->uuid().'.jpg',
            'mime_type' => 'image/jpeg',
            'size' => fake()->numberBetween(10000, 5000000),
            'alt' => fake()->sentence(),
        ];
    }
}
