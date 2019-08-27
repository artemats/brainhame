{{--
  Template Name: Portfolio
--}}

@extends('layouts.app')
@section('content')
    {{--==================================--}}

    <div class="portfolio-page">
      <div data-vue="render-page">
      @include('pages.home.portfolio')
      </div>
    </div>

    {{--==================================--}}
@endsection
