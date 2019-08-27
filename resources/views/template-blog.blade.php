{{--
  Template Name: Blog
--}}

@extends('layouts.app')
@section('content')
    {{--==================================--}}

    <div class="blog-page">
      <div data-vue="render-page">
      @include('pages.blog.hero')
      @include('pages.blog.popular')
      @include('pages.blog.subscribe')
      </div>
    </div>

    {{--==================================--}}
@endsection
