<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique()->nullable();    // null = no dedicated case study page
            $table->string('display_number', 10);            // '01', '02', …
            $table->string('category');
            $table->text('description')->nullable();
            $table->json('tech_stack')->nullable();           // ['React', 'Laravel', …]
            $table->string('case_study_route')->nullable();   // named route: 'projects.face-recognition'
            $table->string('image_url')->nullable();
            $table->string('icon_name')->nullable();          // Material Symbol name
            $table->string('card_style')->default('standard'); // featured|compact|dark|standard
            $table->unsignedTinyInteger('grid_span')->default(6); // 4|6|8 (md:col-span-{n})
            $table->boolean('is_featured_on_home')->default(false);
            $table->unsignedTinyInteger('home_span')->nullable();     // 4|5|7|8
            $table->string('home_height')->nullable();        // 'h-100'|'h-125'
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->boolean('is_visible')->default(true);
            $table->timestamps();

            $table->index(['is_visible', 'sort_order']);
            $table->index(['is_featured_on_home', 'sort_order']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
