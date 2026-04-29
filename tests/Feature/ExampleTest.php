<?php

use Inertia\Testing\AssertableInertia as Assert;

test('returns a successful response', function () {
    $response = $this->get(route('home'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page
            ->component('welcome')
            ->has('canRegister'),
    );
});

test('projects page returns a successful response', function () {
    $response = $this->get(route('projects.index'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page->component('projects'),
    );
});

test('contact page returns a successful response', function () {
    $response = $this->get(route('contact'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page->component('contact'),
    );
});

test('stack page returns a successful response', function () {
    $response = $this->get(route('stack'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page->component('stack'),
    );
});

test('process page returns a successful response', function () {
    $response = $this->get(route('process'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page->component('process'),
    );
});

test('resume page returns a successful response', function () {
    $response = $this->get(route('resume'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page->component('resume'),
    );
});
