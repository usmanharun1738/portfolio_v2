<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectsSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Face Recognition System',
                'slug' => 'face-recognition',
                'display_number' => '01',
                'category' => 'Artificial Intelligence',
                'description' => 'Advanced neural network implementation for real-time identity verification and security access management.',
                'tech_stack' => ['Python', 'OpenCV', 'TensorFlow'],
                'case_study_route' => 'projects.face-recognition',
                'image_url' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyCvteD7YHdxRILVMhbmAq9_ucsqwrZyccYo0h_k4KOC3nxV6AaSdwr6YoNec6vF-s-bBp1R60My5jq9ipXvbqPJSgdMwXn5ckYcTWeD16sZ36jgpTclPLkWYbazH0iJU96du8TFWqYCse5xyFSCBZQBvHPwBsKG8LAc2n-oTe1W0RMNTH8g6WczXJETw6xcTAynNsu3AUu8dqmETtdWsVIFymr78UgTjvWMqcww54NnDi9ZqImpcso9JDzfp8KxHBpVwjgsiIxBo',
                'card_style' => 'featured',
                'grid_span' => 8,
                'is_featured_on_home' => true,
                'home_span' => 8,
                'home_height' => 'h-125',
                'sort_order' => 0,
                'is_visible' => true,
            ],
            [
                'title' => 'Car Rental Management',
                'slug' => 'car-rental',
                'display_number' => '02',
                'category' => 'Fintech',
                'description' => 'Fleet logistics and payment gateway integration for modern mobility services.',
                'tech_stack' => ['Laravel', 'MySQL'],
                'case_study_route' => 'projects.car-rental',
                'card_style' => 'compact',
                'grid_span' => 4,
                'is_featured_on_home' => true,
                'home_span' => 4,
                'home_height' => 'h-125',
                'sort_order' => 1,
                'is_visible' => true,
            ],
            [
                'title' => 'Point of Sales (POS)',
                'display_number' => '03',
                'category' => 'Commerce',
                'description' => 'Cloud-based inventory management with real-time analytics and reporting dashboards.',
                'tech_stack' => ['React', 'Node.js', 'PostgreSQL'],
                'card_style' => 'compact',
                'grid_span' => 4,
                'is_featured_on_home' => true,
                'home_span' => 5,
                'home_height' => 'h-100',
                'sort_order' => 2,
                'is_visible' => true,
            ],
            [
                'title' => 'Learning Management System',
                'display_number' => '04',
                'category' => 'EdTech',
                'description' => 'Scalable educational platform featuring automated progress tracking, course curation, and interactive quizzes.',
                'tech_stack' => ['Next.js', 'GraphQL', 'AWS'],
                'icon_name' => 'school',
                'card_style' => 'dark',
                'grid_span' => 8,
                'is_featured_on_home' => true,
                'home_span' => 7,
                'home_height' => 'h-100',
                'sort_order' => 3,
                'is_visible' => true,
            ],
            [
                'title' => 'Real Estate Management',
                'display_number' => '05',
                'category' => 'PropTech',
                'description' => 'High-end property marketplace with agent CRM, automated listing sync, and client portals.',
                'tech_stack' => ['Vue.js', 'Django', 'Docker'],
                'card_style' => 'standard',
                'grid_span' => 6,
                'sort_order' => 4,
                'is_visible' => true,
            ],
            [
                'title' => 'Restaurant Management',
                'display_number' => '06',
                'category' => 'Hospitality',
                'description' => 'Streamlined booking engine and digital order management optimized for high-volume kitchens.',
                'tech_stack' => ['Flutter', 'Firebase'],
                'icon_name' => 'restaurant_menu',
                'card_style' => 'standard',
                'grid_span' => 6,
                'sort_order' => 5,
                'is_visible' => true,
            ],
        ];

        foreach ($projects as $projectData) {
            Project::create($projectData);
        }
    }
}
