<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use Illuminate\Database\Seeder;

class ContactPageSeeder extends Seeder
{
    public function run(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'contact'],
            [
                'title' => 'Contact',
                'meta_title' => "Let's Talk | Usman Haruna Portfolio",
                'meta_description' => 'Open for projects. Contact Usman Haruna for full-stack, mobile, and AI development.',
                'status' => 'published',
                'is_published' => true,
            ],
        );

        $sections = [
            [
                'key' => 'contact_hero',
                'type' => 'contact_hero',
                'name' => 'Hero',
                'sort_order' => 0,
                'content' => [
                    'availability_label' => 'Availability: Open for Projects',
                    'heading' => "Let's Talk Inquiries",
                    'subheading' => "Whether you have a specific project in mind or just want to say hi, I'm always open to discussing new opportunities and creative collaborations.",
                ],
            ],
            [
                'key' => 'contact_info',
                'type' => 'contact_info',
                'name' => 'Contact Info',
                'sort_order' => 1,
                'content' => [
                    'email' => 'usmanharun.info@gmail.com',
                    'github_url' => '#',
                    'linkedin_url' => '#',
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
