<header class="header">
  <div class="section-inner">
    <nav class="navbar navbar-expand-md">
      <a class="brand header-logo" href="{{ home_url('/') }}">
             {!! $logo !!}
      </a>

      <div class="hamburger" data-toggle="collapse"
              data-target="#mobile_menu" aria-controls="mobile_menu"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="pix"></span>
        <span class="pix"></span>
        <span class="pix"></span>
        <span class="pix"></span>
        <span class="pix"></span>
        <span class="pix"></span>
        <span class="pix"></span>
        <span class="pix"></span>
        <span class="pix"></span>
      </div>

      <div class="menu-wrapper d-none d-md-block d-xl-none" id="main_menu">
        @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu([
          'theme_location' => 'primary_navigation',
          'container_class' => 'navbar-nav',
          'menu_class' => 'nav'])
          !!}
        @endif
      </div>
    </nav>
  </div>
</header>
@include('partials.mobile-menu')

{{--<div class="h-line"></div>--}}
