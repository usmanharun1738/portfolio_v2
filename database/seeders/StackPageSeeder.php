<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use Illuminate\Database\Seeder;

class StackPageSeeder extends Seeder
{
    public function run(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'stack'],
            [
                'title' => 'Stack',
                'meta_title' => 'Technical Stack | Usman Haruna Portfolio',
                'meta_description' => 'Precision engineering with Python, JavaScript, PHP, React, Laravel, and AI systems.',
                'is_published' => true,
            ],
        );

        $sections = [
            [
                'key' => 'stack_hero',
                'type' => 'stack_hero',
                'name' => 'Hero',
                'sort_order' => 0,
                'content' => [
                    'eyebrow' => 'Technical Arsenal',
                    'heading' => "Precision \nEngineering.",
                    'bio' => 'Architecture of high-performance systems and editorial-grade interfaces. A continuous journey of mastering the machine through scalable code and human-centric design.',
                    'image_url' => '/stack-img.png',
                ],
            ],
            [
                'key' => 'stack_languages',
                'type' => 'stack_languages',
                'name' => 'Foundational Languages',
                'sort_order' => 1,
                'content' => [
                    'label' => 'Core Logic',
                    'heading' => 'Foundational Languages',
                    'artisan_card' => [
                        'heading' => 'The Artisan Approach',
                        'body' => "Every tool is chosen to serve the project, not personal preference. The right stack is the one that best solves the client's problem.",
                    ],
                    'items' => [
                        ['number' => '01', 'name' => 'Python',     'icon_class' => 'devicon-python-plain colored',     'proficiency' => 95],
                        ['number' => '02', 'name' => 'JavaScript', 'icon_class' => 'devicon-javascript-plain colored', 'proficiency' => 90],
                        ['number' => '03', 'name' => 'PHP',        'icon_class' => 'devicon-php-plain colored',        'proficiency' => 85],
                    ],
                ],
            ],
            [
                'key' => 'stack_skills',
                'type' => 'stack_skills',
                'name' => 'Skill Categories',
                'sort_order' => 2,
                'content' => [
                    'categories' => [
                        [
                            'label' => '01 \u2014 Interface',
                            'heading' => 'Frontend Engineering',
                            'items' => [
                                ['name' => 'React / Next.js',  'icon_class' => 'devicon-react-original colored'],
                                ['name' => 'Vue.js',           'icon_class' => 'devicon-vuejs-plain colored'],
                                ['name' => 'Tailwind CSS',     'icon_class' => 'devicon-tailwindcss-plain colored'],
                                ['name' => 'Framer Motion',    'icon_class' => 'devicon-framermotion-plain'],
                            ],
                        ],
                        [
                            'label' => '02 \u2014 Architecture',
                            'heading' => 'Backend & Mobile',
                            'items' => [
                                ['name' => 'Laravel (Eloquent/API)', 'icon_class' => 'devicon-laravel-plain colored'],
                                ['name' => 'FastAPI / Node.js',     'icon_class' => 'devicon-fastapi-plain colored'],
                                ['name' => 'SQL / NoSQL Systems',   'icon_class' => 'devicon-postgresql-plain colored'],
                                ['name' => 'React Native / Expo',   'icon_class' => 'devicon-react-original colored'],
                            ],
                        ],
                        [
                            'label' => '03 \u2014 Intelligence',
                            'heading' => 'AI & Data Science',
                            'items' => [
                                ['name' => 'Computer Vision',      'icon_class' => 'devicon-opencv-plain colored'],
                                ['name' => 'OpenCV Integration',   'icon_class' => 'devicon-opencv-plain colored'],
                                ['name' => 'LLM Fine-tuning',      'icon_class' => 'devicon-python-plain colored'],
                                ['name' => 'PyTorch / TensorFlow', 'icon_class' => 'devicon-pytorch-plain colored'],
                            ],
                        ],
                    ],
                ],
            ],
            [
                'key' => 'stack_certifications',
                'type' => 'stack_certifications',
                'name' => 'Certifications',
                'sort_order' => 3,
                'content' => [
                    'eyebrow' => 'Constant Evolution',
                    'heading' => 'Always Learning',
                    'items' => [
                        [
                            'year' => '2023',
                            'issuer' => 'Google Cloud',
                            'title' => 'Cloud Architect Professional',
                            'description' => 'Specializing in microservices deployment and scalable cloud infrastructure.',
                            'badge_url' => '#',
                        ],
                        [
                            'year' => '2022',
                            'issuer' => 'AWS',
                            'title' => 'Machine Learning Specialty',
                            'description' => 'Designing and implementing high-scale ML solutions for vision and NLP.',
                            'badge_url' => '#',
                        ],
                        [
                            'year' => '2021',
                            'issuer' => 'Meta',
                            'title' => 'Advanced React Patterns',
                            'description' => 'Modern frontend architecture, state management, and performance optimization.',
                            'badge_url' => '#',
                        ],
                    ],
                ],
            ],
            [
                'key' => 'stack_cta',
                'type' => 'stack_cta',
                'name' => 'CTA Banner',
                'sort_order' => 4,
                'content' => [
                    'heading' => "Looking for a specific \ntech stack?",
                    'body' => "Whether it's a legacy system migration or a greenfield AI project, let's discuss how my technical arsenal can bring your vision to life.",
                    'button' => ['label' => "Let's talk", 'href' => '/contact'],
                ],
            ],
        ];

        foreach ($sections as $sectionData) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'key' => $sectionData['key']],
                array_merge($sectionData, ['page_id' => $page->id]),
            );
        }
    }
}
