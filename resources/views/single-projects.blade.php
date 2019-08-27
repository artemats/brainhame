@extends('layouts.app')
@section('content')
    {{--==================================--}}

    <div class="single-portfolio-page">
      <div data-vue="render-page">
      @include('pages.portfolio.hero')
      @include('pages.portfolio.info')
      @include('pages.portfolio.concept')
      @include('pages.portfolio.experience')
      @include('pages.portfolio.gallery')
      @include('pages.portfolio.summarize')
      @include('pages.portfolio.adjacent')
      </div>
    </div>

    {{--==================================--}}
@endsection
