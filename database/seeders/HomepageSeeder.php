<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use Illuminate\Database\Seeder;

class HomepageSeeder extends Seeder
{
    public function run(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'home'],
            [
                'title' => 'Home',
                'meta_title' => 'ARTISAN | Usman Haruna Portfolio',
                'meta_description' => 'Precision Web & App Engineering — Crafting high-performance digital ecosystems.',
                'is_published' => true,
            ],
        );

        $sections = [
            [
                'key' => 'hero',
                'type' => 'hero',
                'name' => 'Hero',
                'sort_order' => 0,
                'content' => [
                    'eyebrow' => 'Precision Web & App Engineering',
                    'heading' => "Usman \nHarun.",
                    'tags' => ['Web Developer', 'Mobile App Developer', 'AI Enthusiast'],
                    'bio' => "Crafting high-performance digital ecosystems with an artisan's touch. Specializing in technical precision and editorial-grade user experiences.",
                    'cta_primary' => ['label' => 'View Portfolio', 'href' => '#projects'],
                    'cta_secondary' => ['label' => 'The Process', 'href' => '#process'],
                    'hero_image' => '/hero-img.png',
                    'status_card' => ['label' => 'SYSTEM_STATUS', 'value' => 'Optimized'],
                    'watermark' => 'PRECISION',
                ],
            ],
            [
                'key' => 'projects',
                'type' => 'projects',
                'name' => 'Signature Work',
                'sort_order' => 1,
                'content' => [
                    'eyebrow' => 'Selected Output',
                    'heading' => 'Signature Work',
                    'count' => 'projects (24)',
                    'items' => [
                        [
                            'title' => 'Vanguard Assets',
                            'category' => 'Fintech / Mobile',
                            'description' => 'A high-performance wealth management platform built for speed and visual clarity.',
                            'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa6VQ6S5mtQ9G1k94B7wj9siRI5U9h8rwtr5cnmGAbLj9eJZCLw1HgZxgBOtkz0KhfXdUkj78ZvALPctcGVVVzXTgnpXZxaCKfsJoKXIl5pArNEh2WI7vcAGAlZd2_76_QHax2WtGWo3kGyHdbf25o1rpP1XmewueeXAHoCth1GmmY9PMwGx6Pu4N4OHjsLnR02R-dP5EIYC6lLH8AEQrNBDOZPlLVuTT-k9NWf_yHQLxEujXP1Ec9KcyYUsb3-C0FZGfreTFTxr0',
                            'cta_label' => 'Case Study',
                            'href' => '#',
                            'span' => 8,
                            'height' => 'h-125',
                        ],
                        [
                            'title' => 'Noir Studio',
                            'category' => 'E-Commerce',
                            'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxggUAggawb5IbPFv2WkUcFz3lzBYj7c-iXjyNlp2hv-6TOTNFsLHBlaqz9upGHJVgikoGC3Z0WndFkLbrmda25wl-hvWLLix5slqEcXbUYvooDS5nzdbsqfruo64ONPdbA1xSprHYwOB_AcD4bPakp3X3XXVub0WjBrfLMc1wT6Bw-hmKUi9S54OFNz3ugpdj3NISDZvm98hDdK7dz1IPCd2XMXP6oPN4i6Ri9vfSXf0wa3v__QVFkeDs-x2LbqarkGhiubVAEwY',
                            'href' => '#',
                            'span' => 4,
                            'height' => 'h-125',
                        ],
                        [
                            'title' => 'Neural Canvas',
                            'category' => 'Research / AI',
                            'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC00Jg72DLiC22hsTtlqr667iB8mnxtfMzVJ5KteR4KdU174AvubB5YIGzn4A4_jRWryF3KGQ0V7mE23SUIB-Zdee0817h6RVP1MuKi_T4rysUbX_ldmiNVBp8gYP56fg7eTJnsd_ZiTDHQ-WwAWFUzz02eD1AC7s_UIDHb-dz0yrHWGCL4dLK4zo5D9Lt1OYaqiWLhmNH1rL9jZIqgJHWflzVBUSAwY7--fwQ9NYO3fxDYC2V1eqTemNa1uNXe26wifnSKoLDq72U',
                            'href' => '#',
                            'span' => 5,
                            'height' => 'h-100',
                        ],
                        [
                            'title' => 'Quantify Pro',
                            'category' => 'Web Application',
                            'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRA234YGYhVfPxVK8if-tV9Nmp1Kkn1byLx2D0ddSjMwwvrtdGNDVcdSrfIRB6KNJSnTisTB6-DfgSQbUXNt6BKzoqkowBlzPZaw6VEkw4eUyfo41_0KNqFPW8kzDT3rKFmhQ6FHpYVJY6QQmKQYRKlTk2xB8rxTxSm791yTRTgg44TYrrDq0jJ1HYyldh5Kj61dtnAKmNdJBl4fTqMtld5VWp9Ja82mJ7yj5ukGtT9uPJ7YJolZ07LFChOnw6mGVi7TzwtH-DzDE',
                            'href' => '#',
                            'span' => 7,
                            'height' => 'h-100',
                        ],
                    ],
                ],
            ],
            [
                'key' => 'stack',
                'type' => 'stack',
                'name' => 'Engineering Toolkit',
                'sort_order' => 2,
                'content' => [
                    'eyebrow' => 'Engineering Toolkit',
                    'heading' => 'Built on a foundation of performance.',
                    'bio' => "The artisan's tools are as important as the hand that wields them. I leverage a modern stack focused on scalability, security, and exceptional user delight.",
                    'stats' => [
                        ['value' => '08+', 'label' => 'Years Experience'],
                        ['value' => '120+', 'label' => 'Projects Shipped'],
                    ],
                    'skill_groups' => [
                        [
                            'name' => 'Web Architecture',
                            'icon' => 'code',
                            'techs' => ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Laravel', 'Node.js'],
                        ],
                        [
                            'name' => 'Mobile Systems',
                            'icon' => 'smartphone',
                            'techs' => ['React Native', 'Flutter', 'Swift'],
                        ],
                        [
                            'name' => 'AI & Logic',
                            'icon' => 'neurology',
                            'techs' => ['TensorFlow', 'PyTorch', 'LLM Integration'],
                        ],
                    ],
                ],
            ],
            [
                'key' => 'process',
                'type' => 'process',
                'name' => 'Methodology',
                'sort_order' => 3,
                'content' => [
                    'eyebrow' => 'Methodology',
                    'heading' => 'How I Architect Value.',
                    'steps' => [
                        [
                            'number' => '01',
                            'title' => 'Discovery',
                            'description' => 'Deep diving into the business logic, user pain points, and technical requirements before a single line of code is written.',
                        ],
                        [
                            'number' => '02',
                            'title' => 'Execution',
                            'description' => 'Rapid prototyping followed by high-fidelity development using clean, modular, and well-documented codebases.',
                        ],
                        [
                            'number' => '03',
                            'title' => 'Refinement',
                            'description' => 'Continuous testing, optimization for lighthouse scores, and performance tuning to ensure 99.9% uptime and speed.',
                        ],
                    ],
                ],
            ],
            [
                'key' => 'testimonials',
                'type' => 'testimonials',
                'name' => 'Social Proof',
                'sort_order' => 4,
                'content' => [
                    'eyebrow' => 'Social Proof',
                    'heading' => 'Trusted by clients and teams.',
                    'subtitle' => 'Feedback from stakeholders across operations, security, finance, and engineering.',
                    'items' => [
                        [
                            'quote' => "The deployment was seamless and the system has been rock-solid since day one. We've eliminated buddy punching entirely and our employees appreciate the frictionless experience.",
                            'name' => 'Sarah Chen',
                            'role' => 'VP of Operations',
                            'company' => 'GlobalTech Solutions',
                            'icon' => 'verified',
                        ],
                        [
                            'quote' => 'The technical implementation was outstanding-real-time processing, zero latency issues, and the spoofing detection caught an attempted breach within the first week.',
                            'name' => 'Marcus Williams',
                            'role' => 'Security Director',
                            'company' => 'CoreSecure Inc',
                            'icon' => 'security',
                        ],
                        [
                            'quote' => 'We integrated this across 5 facilities without any downtime. The analytics dashboard gives us unprecedented visibility into attendance patterns and anomalies.',
                            'name' => 'Jennifer Park',
                            'role' => 'HR Manager',
                            'company' => 'Enterprise Corp',
                            'icon' => 'trending_up',
                        ],
                        [
                            'quote' => 'The platform transformed how we manage bookings. What used to take 8 minutes is now 45 seconds, and customers love the instant confirmation. Revenue jumped immediately after launch.',
                            'name' => 'David Rodriguez',
                            'role' => 'CEO',
                            'company' => 'FleetDrive Rentals',
                            'icon' => 'business',
                        ],
                        [
                            'quote' => 'The Stripe integration is bulletproof. We went from 3.2% payment failures to 0.18%-that alone saves us thousands monthly. The developer anticipated every edge case.',
                            'name' => 'Lisa Thompson',
                            'role' => 'Finance Director',
                            'company' => 'MobilityPlus',
                            'icon' => 'payments',
                        ],
                        [
                            'quote' => 'Our fleet is spread across 12 cities and the real-time sync never misses a beat. The Redis caching architecture ensures availability queries complete in milliseconds, even during peak hours.',
                            'name' => 'Ahmed Hassan',
                            'role' => 'Technical Lead',
                            'company' => 'CarHub Network',
                            'icon' => 'speed',
                        ],
                    ],
                ],
            ],
            [
                'key' => 'contact',
                'type' => 'contact',
                'name' => 'Contact',
                'sort_order' => 5,
                'content' => [
                    'heading' => 'Ready to build something elite?',
                    'subtitle' => "Currently accepting new projects for Q3 2024. Let's discuss your next breakthrough.",
                    'email' => 'hello@usmanharuna.pro',
                    'location' => 'Global / Remote',
                ],
            ],
        ];

        foreach ($sections as $section) {
            PageSection::updateOrCreate(
                ['page_id' => $page->id, 'key' => $section['key']],
                [
                    'type' => $section['type'],
                    'name' => $section['name'],
                    'sort_order' => $section['sort_order'],
                    'content' => $section['content'],
                    'is_enabled' => true,
                ],
            );
        }
    }
}
