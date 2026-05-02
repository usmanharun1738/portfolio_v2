<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use Illuminate\Database\Seeder;

class ProcessPageSeeder extends Seeder
{
    public function run(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'process'],
            [
                'title' => 'Process',
                'meta_title' => 'Process | Usman Haruna Portfolio',
                'meta_description' => 'My engineering methodology: Discovery, Design, Implementation, Testing & Deployment.',
                'status' => 'published',
                'is_published' => true,
            ],
        );

        $sections = [
            [
                'key' => 'process_hero',
                'type' => 'process_hero',
                'name' => 'Hero',
                'sort_order' => 0,
                'content' => [
                    'eyebrow' => 'How I Work',
                    'heading' => 'Engineering  Solutions.',
                    'bio' => 'My methodology is a blend of meticulous architecture and high-performance engineering. Every system is built to scale, designed for longevity, and optimized for maximum efficiency.',
                ],
            ],
            [
                'key' => 'process_steps',
                'type' => 'process_steps',
                'name' => 'Process Steps',
                'sort_order' => 1,
                'content' => [
                    'items' => [
                        [
                            'number' => '01',
                            'title' => 'Discovery & Architecture',
                            'description' => 'Before a single line of code is written, I dive deep into the problem space. We define technical constraints, scalability requirements, and the fundamental data architecture that will support the system\'s growth.',
                            'deliverables' => [
                                'System Infrastructure Diagrams',
                                'Technical Specification Documents',
                                'Scalability Strategy',
                            ],
                            'tools' => [],
                        ],
                        [
                            'number' => '02',
                            'title' => 'Design & Prototyping',
                            'description' => 'Utility meets aesthetic. I create high-fidelity prototypes that mirror the final performance. The focus is on a seamless developer experience and an intuitive user interface that feels native to the brand\'s identity.',
                            'deliverables' => [],
                            'tools' => ['Figma', 'Framer', 'Adobe CC'],
                        ],
                        [
                            'number' => '03',
                            'title' => 'Engineering & Implementation',
                            'description' => 'This is where precision meets production. I leverage modern frameworks to build modular, maintainable, and lightning-fast codebases. Clean code is not just a standard\u2014it\'s a requirement.',
                            'deliverables' => [],
                            'tools' => [],
                            'tech_columns' => [
                                ['icon' => 'brush',    'title' => 'Frontend',    'items' => ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'CSS Modules']],
                                ['icon' => 'database', 'title' => 'Backend',     'items' => ['Laravel', 'Node.js', 'PostgreSQL', 'MySQL', 'REST APIs', 'GraphQL']],
                                ['icon' => 'speed',    'title' => 'Performance', 'items' => ['Edge rendering', 'CDN-first delivery', 'Redis caching', 'Query optimization', 'Queue workers', 'Background jobs']],
                            ],
                        ],
                        [
                            'number' => '04',
                            'title' => 'Testing & QA',
                            'description' => 'Zero-compromise quality assurance. I implement automated testing suites including Unit, Integration, and E2E tests to ensure every deploy is as stable as the last.',
                            'deliverables' => [],
                            'tools' => [],
                            'stat_card' => ['icon' => 'verified_user', 'title' => '99.9% Build Reliability', 'body' => 'Automated CI/CD pipelines with rigid linting and test coverage.'],
                        ],
                        [
                            'number' => '05',
                            'title' => 'Deployment & Scale',
                            'description' => 'The launch is just the beginning. I deploy using globally distributed infrastructure with automated scaling to handle traffic spikes effortlessly.',
                            'deliverables' => [],
                            'tools' => [],
                            'deploy_tech' => [
                                ['name' => 'AWS',    'label' => 'Cloud Infrastructure'],
                                ['name' => 'Docker', 'label' => 'Containerization'],
                                ['name' => 'Vercel', 'label' => 'Edge Deployment'],
                            ],
                        ],
                    ],
                ],
            ],
            [
                'key' => 'process_philosophy',
                'type' => 'process_philosophy',
                'name' => 'Philosophy',
                'sort_order' => 2,
                'content' => [
                    'heading' => 'The Philosophy',
                    'body' => "Building for the web isn't just about pixels or scripts; it's about engineering resilience. My work is guided by three core pillars: Performance without compromise, Scalability by default, and Precision as a standard.",
                    'button' => ['label' => 'Start a Project', 'href' => '/contact'],
                    'stats' => [
                        ['value' => '100',  'label' => 'Lighthouse Score'],
                        ['value' => '10ms', 'label' => 'Database Latency'],
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
