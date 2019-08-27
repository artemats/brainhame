@extends('layouts.app')
@section('content')
    {{--==================================--}}

    <div class="single-blog-page">
      <div data-vue="render-page">
        @include('pages.single.hero')
        @include('pages.single.content')
      </div>
    </div>

    {{--==================================--}}
@endsection
