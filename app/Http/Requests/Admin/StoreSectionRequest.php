<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

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
        return [
            'key' => ['required', 'string', 'max:100'],
            'type' => ['required', 'string', 'in:hero,projects,stack,process,testimonials,contact'],
            'name' => ['required', 'string', 'max:255'],
            'content' => ['required', 'array'],
            'is_enabled' => ['boolean'],
        ];
    }
}
