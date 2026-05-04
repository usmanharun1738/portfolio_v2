<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Project>
 */
class ProjectFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'slug' => fake()->unique()->slug(2),
            'display_number' => str_pad((string) fake()->numberBetween(1, 99), 2, '0', STR_PAD_LEFT),
            'category' => fake()->randomElement([
                'Artificial Intelligence',
                'Full Stack Web App',
                'Mobile App',
            ]),
            'description' => fake()->paragraph(),
            'tech_stack' => ['Laravel', 'React'],
            'case_study_route' => null,
            'image_url' => fake()->imageUrl(),
            'icon_name' => 'work',
            'card_style' => 'standard',
            'grid_span' => 6,
            'is_featured_on_home' => false,
            'home_span' => null,
            'home_height' => null,
            'sort_order' => 0,
            'is_visible' => true,
        ];
    }
}
