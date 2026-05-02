<?php

use Inertia\Testing\AssertableInertia as Assert;

test('returns a successful response', function () {
    $response = $this->get(route('home'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page
            ->component('welcome')
            ->has('page')
            ->has('sections'),
    );
});

test('projects page returns a successful response', function () {
    $response = $this->get(route('projects.index'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page->component('projects'),
    );
});

test('face recognition case study page returns a successful response', function () {
    $response = $this->get(route('projects.face-recognition'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page->component('case-studies/face-recognition'),
    );
});

test('car rental case study page returns a successful response', function () {
    $response = $this->get(route('projects.car-rental'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page->component('case-studies/car-rental'),
    );
});

test('contact page returns a successful response', function () {
    $response = $this->get(route('contact'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page
            ->component('contact')
            ->has('page')
            ->has('sections'),
    );
});

test('stack page returns a successful response', function () {
    $response = $this->get(route('stack'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page
            ->component('stack')
            ->has('page')
            ->has('sections'),
    );
});

test('process page returns a successful response', function () {
    $response = $this->get(route('process'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page
            ->component('process')
            ->has('page')
            ->has('sections'),
    );
});

test('resume page returns a successful response', function () {
    $response = $this->get(route('resume'));

    $response->assertOk()->assertInertia(
        fn(Assert $page) => $page
            ->component('resume')
            ->has('page')
            ->has('sections'),
    );
});
