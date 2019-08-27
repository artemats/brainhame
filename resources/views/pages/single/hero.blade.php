<section class="section single-hero">
  <div class="section-inner">
    <div class="row">
      <div class="col-xl-6">
        <h1 class="page-title">{!! $title !!}</h1>
      </div>
      <div class="col-xl-3 post-info">
        <div class="post-date">{{ $date }}</div>

        <div class="post-category">{{ $post_category }}</div>

        <div class="post-social-sharing">
          <div></div>
          <ul class="clear-list">
            @foreach($socials_links as $name => $url)
              <li>
                <a href="{{ $url }}" target="_blank">{{ $name }}</a>
              </li>
            @endforeach
          </ul>
        </div>
      </div>
      <div class="col-xl-3 post-navigation">
        @if($adjacent_posts->next)
          <div class="post-navigation-title">{{ __('Next article') }}</div>

          <div class="next-post-title">{!! $adjacent_posts->next->title !!}</div>
        @elseif($adjacent_posts->prev)
          <div class="post-navigation-title">{{ __('Previous article') }}</div>

          <div class="next-post-title">{!! $adjacent_posts->prev->title !!}</div>
        @endif

        <div class="post-navigation-arrows">
          <div class="prev-arrow">
            @if($adjacent_posts->prev)
              <a href="{{$adjacent_posts->prev->link}}"><i class="fas fa-arrow-left"></i></a>
            @endif
          </div>

          <div class="next-arrow">
            @if($adjacent_posts->next)
              <a href="{{$adjacent_posts->next->link}}"><i class="fas fa-arrow-right"></i></a>
            @endif
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-9">
        <img src="{{ $post_thumbnail }}" alt="{{ $title }}" />
      </div>
    </div>
  </div>
</section>
