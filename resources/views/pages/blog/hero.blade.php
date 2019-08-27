<section class="section blog-hero">
  <div class="section-inner">
    <div class="row">
      <div class="col-md-8">
        <div class="blog-hero-title section-title" data-convert="stroke">{!! $hero->title !!}</div>
        <div class="blog-hero-subtitle section-subtitle">{!! $hero->subtitle !!}</div>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div class="row">
      <div class="col-xl-5 d-none d-xl-block">
        <img src="{{ $hero->image }}" alt="{{ $hero->subtitle }}" />
      </div>
      <div class="col-xl-7">
        <div class="post-list">
          @foreach($posts->items as $ind => $item)
            <div class="post-item">
              <div class="row">
                <div class="col-4 col-md-3 post-info">
                  <div class="post-date">{{ $item->date }}</div>
                  <div class="post-number">{{ $ind+1 < 10 ? '0'.($ind+1) : ($ind+1) }}</div>
                </div>
                <div class="col-8 col-md-9">
                  <div class="post-title">{{ $item->title }}</div>
                </div>
              </div>
            </div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</section>
