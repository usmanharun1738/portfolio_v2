<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectRequest extends FormRequest
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
        $projectId = $this->route('project')?->id;

        return [
            'title' => ['sometimes', 'required', 'string', 'max:255'],
            'slug' => ['sometimes', 'nullable', 'string', 'max:255', 'unique:projects,slug,'.$projectId],
            'display_number' => ['sometimes', 'required', 'string', 'max:10'],
            'category' => ['sometimes', 'required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'tech_stack' => ['nullable', 'array'],
            'tech_stack.*' => ['string'],
            'case_study_route' => ['nullable', 'string', 'max:255'],
            'image_url' => ['nullable', 'string', 'max:2048'],
            'icon_name' => ['nullable', 'string', 'max:255'],
            'card_style' => ['sometimes', 'required', 'string', 'in:featured,compact,dark,standard'],
            'grid_span' => ['sometimes', 'required', 'integer', 'in:4,6,8'],
            'is_featured_on_home' => ['boolean'],
            'home_span' => ['nullable', 'integer', 'in:4,5,7,8'],
            'home_height' => ['nullable', 'string', 'in:h-100,h-125'],
            'sort_order' => ['integer', 'min:0'],
            'is_visible' => ['boolean'],
        ];
    }
}
