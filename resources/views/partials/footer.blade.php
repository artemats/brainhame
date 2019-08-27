<footer class="footer content-info">
  <div class="h-line" data-show="drawHLine"></div>

  <div class="footer-inner">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-xs-4 col-sm-4 col-md-3 col-lg-2 footer-logo" data-show="showTextAnimation">
          <a href="{{ home_url('/') }}">
            {!! $footer_info->logo !!}
          </a>
        </div>
        <div class="d-none d-xl-block col-lg-4" data-show="showTextAnimation">
          <div class="footer-text">{!! $footer_info->text !!}</div>
        </div>
        <div class="col-7 col-sm-4 col-md-4 col-lg-3" data-show="showTextAnimation">
          @if (has_nav_menu('footer-menu'))
            {!! wp_nav_menu([
            'theme_location' => 'footer-menu',
            'container_class' => 'footer-menu',
            'menu_class' => 'footer-nav nav'])
            !!}
          @endif
        </div>
        <div class="col-5 col-sm-4 col-md-5 col-lg-3" data-show="showTextAnimation">
          <div class="footer-info">
            <div class="address">{!! $footer_info->address !!}</div>
            <div class="phone">{{ $footer_info->phone }}</div>
            <div class="email">{{ $footer_info->email }}</div>
          </div>

          <ul class="footer-socials" data-show="triggerVLine">
            @foreach($footer_info->socials as $social)
              <li class="social-item">
                <a href="{{ $social->link }}">{{ $social->name }}</a>
              </li>
            @endforeach
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="scroll-up active-cursor" data-click="scrollUp">{!! $footer_arrow !!}</div>
</footer>

<div class="v-line"></div>

<div class="vue-preloader fake-preloader">
{{--  <div class="vue-preloader-image">--}}
{{--    <div data-vue="canvas-logo" data-width="150" data-height="90">{!! $logo !!}</div>--}}
{{--    <div>{!! $logo !!}</div>--}}
{{--  </div>--}}

{{--  <div style="height: 60px;"></div>--}}
{{--  <div class="vue-preloader-text">Beautiful designs</div>--}}
</div>

@include('partials.cursor')
