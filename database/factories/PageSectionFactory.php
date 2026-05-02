<?php

namespace Database\Factories;

use App\Models\PageSection;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<PageSection>
 */
class PageSectionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'key' => fake()->unique()->slug(2),
            'type' => fake()->randomElement(['hero', 'contact', 'stack_hero']),
            'name' => fake()->words(2, true),
            'content' => ['title' => fake()->sentence()],
            'sort_order' => fake()->numberBetween(1, 100),
            'is_enabled' => true,
        ];
    }
}
