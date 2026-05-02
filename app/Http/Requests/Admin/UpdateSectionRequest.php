<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class UpdateSectionRequest extends FormRequest
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
            'name' => ['sometimes', 'string', 'max:255'],
            'content' => ['sometimes', 'array'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
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
            if (! $this->has('content')) {
                return;
            }

            $content = $this->input('content');

            if (! is_array($content)) {
                return;
            }

            $type = (string) $this->route('section')?->type;
            $requiredKeys = StoreSectionRequest::requiredContentKeysByType()[$type] ?? [];

            foreach ($requiredKeys as $keyPath) {
                if (data_get($content, $keyPath) === null) {
                    $validator->errors()->add("content.{$keyPath}", "The content.{$keyPath} field is required for {$type} sections.");
                }
            }
        });
    }
}
