{{--
  Template Name: About us
--}}

@extends('layouts.app')
@section('content')
    {{--==================================--}}

    <div class="about-page">
      <div data-vue="render-page">
      @include('pages.home.hero')
      @include('pages.about.first_block')
      @include('pages.about.second_block')
      @include('pages.about.third_block')
      @include('pages.home.portfolio')
      @include('pages.about.clients')
      @include('pages.about.team')
      @include('pages.home.contact')
      </div>
    </div>

    {{--==================================--}}
@endsection
