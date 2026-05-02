<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use Illuminate\Database\Seeder;

class ResumePageSeeder extends Seeder
{
    public function run(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'resume'],
            [
                'title' => 'Resume',
                'meta_title' => 'Resume | Usman Haruna Portfolio',
                'meta_description' => 'Full-stack developer & AI enthusiast. Available for new opportunities.',
                'is_published' => true,
            ],
        );

        $sections = [
            [
                'key' => 'resume_hero',
                'type' => 'resume_hero',
                'name' => 'Hero',
                'sort_order' => 0,
                'content' => [
                    'availability_label' => 'Available for new opportunities',
                    'heading' => 'Building the Intelligence of the Next .',
                    'email' => 'contact@usmanharuna.com',
                    'github_url' => '#',
                    'linkedin_url' => '#',
                    'roles' => ['Full-Stack Developer', 'Mobile App Developer', 'AI Enthusiast'],
                ],
            ],
            [
                'key' => 'resume_summary',
                'type' => 'resume_summary',
                'name' => 'Professional Summary',
                'sort_order' => 1,
                'content' => [
                    'body' => 'Focused on building <strong>intelligent, cross-platform solutions</strong> with artisanal precision. I bridge the gap between complex backend architectures and intuitive mobile experiences, specializing in high-performance biometric systems and retail analytics.',
                ],
            ],
            [
                'key' => 'resume_experience',
                'type' => 'resume_experience',
                'name' => 'Experience & Projects',
                'sort_order' => 2,
                'content' => [
                    'items' => [
                        [
                            'title' => 'Face Recognition System',
                            'dates' => '2023 — Present',
                            'description' => 'Developed an AI-powered attendance and identity verification tool. Engineered using OpenCV and FastAPI to provide sub-second recognition latency.',
                            'highlights' => [
                                'Integrated deep learning models for high-accuracy facial landmark detection.',
                                'Optimized real-time processing pipelines for multi-camera streams.',
                            ],
                        ],
                        [
                            'title' => 'Car Rental Management System',
                            'dates' => '2022 — 2023',
                            'description' => 'Built a full-stack booking and fleet tracking ecosystem. Streamlined operations for medium-sized enterprises with automated logistics.',
                            'highlights' => [
                                'Secure financial transactions integrated via Stripe API.',
                                'Real-time fleet tracking and availability calendar logic.',
                            ],
                        ],
                        [
                            'title' => 'Aura POS System',
                            'dates' => '2021 — 2022',
                            'description' => 'Engineered a high-performance retail inventory and sales analytics engine. Optimized for speed in high-traffic commercial environments.',
                            'highlights' => [
                                'Comprehensive reporting dashboard using D3.js and Laravel.',
                            ],
                        ],
                        [
                            'title' => 'Learning Management System',
                            'dates' => '2020 — 2021',
                            'description' => 'A holistic educational platform designed for progress tracking and digital curriculum delivery.',
                            'highlights' => [],
                        ],
                    ],
                ],
            ],
            [
                'key' => 'resume_skills',
                'type' => 'resume_skills',
                'name' => 'Technical Skills',
                'sort_order' => 3,
                'content' => [
                    'languages' => ['Python', 'JavaScript (ES6+)', 'PHP', 'TypeScript'],
                    'frameworks' => ['React', 'Vue.js', 'Next.js', 'Laravel', 'FastAPI'],
                    'mobile' => ['React Native', 'Expo'],
                    'specialties' => ['AI / Machine Learning', 'Biometric Systems'],
                ],
            ],
            [
                'key' => 'resume_education',
                'type' => 'resume_education',
                'name' => 'Education',
                'sort_order' => 4,
                'content' => [
                    'items' => [
                        [
                            'degree' => 'B.Sc. in Computer Science',
                            'institution' => 'Prestigious University of Technology',
                            'year' => 'Class of 2020',
                        ],
                    ],
                ],
            ],
            [
                'key' => 'resume_certifications',
                'type' => 'resume_certifications',
                'name' => 'Certifications',
                'sort_order' => 5,
                'content' => [
                    'items' => [
                        ['title' => 'AWS Certified Solutions Architect', 'issuer' => 'Amazon Web Services'],
                        ['title' => 'Professional AI Engineer',          'issuer' => 'Google Cloud / DeepLearning.AI'],
                    ],
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
