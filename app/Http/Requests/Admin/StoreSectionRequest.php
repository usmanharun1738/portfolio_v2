<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

class StoreSectionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $pageId = $this->route('page')?->id;

        return [
            'key' => [
                'required',
                'string',
                'max:100',
                Rule::unique('page_sections', 'key')->where(fn($query) => $query->where('page_id', $pageId)),
            ],
            'type' => ['required', 'string', 'in:hero,projects,stack,process,testimonials,contact,stack_hero,stack_languages,stack_skills,stack_certifications,stack_cta,process_hero,process_steps,process_philosophy,contact_hero,contact_info,resume_hero,resume_summary,resume_experience,resume_skills,resume_education,resume_certifications'],
            'name' => ['required', 'string', 'max:255'],
            'content' => ['required', 'array'],
            'is_enabled' => ['boolean'],
        ];
    }

    protected function prepareForValidation(): void
    {
        if (! is_string($this->input('content'))) {
            return;
        }

        $decoded = json_decode($this->input('content'), true);

        if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
            $this->merge(['content' => $decoded]);
        }
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator): void {
            $content = $this->input('content');

            if (! is_array($content)) {
                return;
            }

            $type = (string) $this->input('type');
            $requiredKeys = self::requiredContentKeysByType()[$type] ?? [];

            foreach ($requiredKeys as $keyPath) {
                if (data_get($content, $keyPath) === null) {
                    $validator->errors()->add("content.{$keyPath}", "The content.{$keyPath} field is required for {$type} sections.");
                }
            }
        });
    }

    /**
     * @return array<string, array<int, string>>
     */
    public static function requiredContentKeysByType(): array
    {
        return [
            'hero' => ['eyebrow', 'heading', 'tags', 'bio', 'cta_primary.label', 'cta_primary.href', 'cta_secondary.label', 'cta_secondary.href', 'hero_image', 'status_card.label', 'status_card.value', 'watermark'],
            'projects' => ['eyebrow', 'heading', 'count'],
            'stack' => ['eyebrow', 'heading', 'bio', 'stats', 'skill_groups'],
            'process' => ['eyebrow', 'heading', 'steps'],
            'testimonials' => ['eyebrow', 'heading', 'subtitle', 'items'],
            'contact' => ['heading', 'subtitle', 'email', 'location'],
            'stack_hero' => ['eyebrow', 'heading', 'bio', 'image_url'],
            'stack_languages' => ['label', 'heading', 'artisan_card.heading', 'artisan_card.body', 'items'],
            'stack_skills' => ['categories'],
            'stack_certifications' => ['eyebrow', 'heading', 'items'],
            'stack_cta' => ['heading', 'body', 'button.label', 'button.href'],
            'process_hero' => ['eyebrow', 'heading', 'bio'],
            'process_steps' => ['items'],
            'process_philosophy' => ['heading', 'body', 'button.label', 'button.href', 'stats'],
            'contact_hero' => ['availability_label', 'heading', 'subheading'],
            'contact_info' => ['email', 'github_url', 'linkedin_url'],
            'resume_hero' => ['availability_label', 'heading', 'email', 'github_url', 'linkedin_url', 'roles'],
            'resume_summary' => ['body'],
            'resume_experience' => ['items'],
            'resume_skills' => ['languages', 'frameworks', 'mobile', 'specialties'],
            'resume_education' => ['items'],
            'resume_certifications' => ['items'],
        ];
    }
}
