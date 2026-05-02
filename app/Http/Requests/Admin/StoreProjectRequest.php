<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreProjectRequest extends FormRequest
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
        return [
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'unique:projects,slug'],
            'display_number' => ['required', 'string', 'max:10'],
            'category' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'tech_stack' => ['nullable', 'array'],
            'tech_stack.*' => ['string'],
            'case_study_route' => ['nullable', 'string', 'max:255'],
            'image_url' => ['nullable', 'string', 'max:2048'],
            'icon_name' => ['nullable', 'string', 'max:255'],
            'card_style' => ['required', 'string', 'in:featured,compact,dark,standard'],
            'grid_span' => ['required', 'integer', 'in:4,6,8'],
            'is_featured_on_home' => ['boolean'],
            'home_span' => ['nullable', 'integer', 'in:4,5,7,8'],
            'home_height' => ['nullable', 'string', 'in:h-100,h-125'],
            'sort_order' => ['integer', 'min:0'],
            'is_visible' => ['boolean'],
        ];
    }
}
