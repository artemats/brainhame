<nav class="mobile-menu navbar-collapse collapse" id="mobile_menu">
  <div class="menu-section">
    <div class="container-fluid">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu([
        'theme_location' => 'primary_navigation',
        'container_class' => 'navbar-nav',
        'menu_class' => 'nav'])
        !!}
      @endif
    </div>
  </div>
  <div class="info-section">
    <div class="container-fluid">
      <div class="info row">
        @foreach($contact_info as $group)
          <div class="col-6 info-group">
            <div class="info-header">{{$group->title}}:</div>

            @foreach($group->items as $item)
              <div class="info-item">{{$item->text}}</div>
            @endforeach
          </div>
        @endforeach

        <div class="col-6 info-group">
          <div class="info-header">{{__('Social')}}:</div>

          @foreach($footer_info->socials as $social)
            <div class="info-item">
              <a href="{{ $social->link }}">{{ $social->name }}</a>
            </div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</nav>
