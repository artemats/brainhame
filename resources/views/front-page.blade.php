@extends('layouts.app')
@section('content')
    {{--==================================--}}

    <div data-vue="render-page">
    @include('pages.home.hero')
    @include('pages.home.portfolio')
    @include('pages.home.about')
    @include('pages.home.team')
    @include('pages.home.services')
    @include('pages.home.contact')
    @include('pages.home.blog')
    </div>


    <div class="fake-form" style="display: none;">
      @if(isset($contact->contact_form))
        {!! \Theme\Help::getContactForm($contact->contact_form) !!}
      @endif
    </div>


    {{--==================================--}}
@endsection
