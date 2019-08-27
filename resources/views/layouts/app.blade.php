<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body @php /** @var string $body_classes */ body_class($body_classes) @endphp>
    @php do_action('wp_body_open') @endphp
    @include('layouts.float-menu')
    <div data-vue="preloader"></div>

    <div id="luxy">
    @php do_action('get_header') @endphp
    @include('partials.header')

    <div class="wrap" role="document">
      <div class="content">
        <main class="main">
          @yield('content')
        </main>
        @if (App\display_sidebar())
          <aside class="sidebar">
            @include('partials.sidebar')
          </aside>
        @endif
      </div>
    </div>

    @include('layouts.debug')
    @include('layouts.browser-sync-client')

    @php do_action('get_footer') @endphp
    @include('partials.footer')
    </div>

    @php wp_footer() @endphp
  </body>
</html>
