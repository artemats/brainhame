<section class="section popular">
  <div class="section-inner">
    <div class="section-title">{!! $popular->title !!}</div>

    <div class="popular-items row">
      @foreach($popular->items as $item)
        <div class="popular-item col-6 col-xl-4">
          <div class="image-wrapper">
            <a href="{{ $item->link }}">
              <img src="{{ $item->image }}" alt="{{ $item->title }}" />
            </a>
          </div>

          <div class="item-info">
            <div class="item-date">{{ $item->date }}</div>
            <div class="item-title">
              <a href="{{ $item->link }}">{!! $item->title !!}</a>
            </div>
          </div>
        </div>
      @endforeach
    </div>
  </div>
</section>
