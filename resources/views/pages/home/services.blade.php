<section class="section services">
  <div class="h-line"></div>

  <div class="services-image">
    <img src="{{ $services->image }}" alt="{{ $services->title }}" />
  </div>

  <div class="section-inner">
    <div class="row services-info">
      <div class="col-md-7 col-lg-6">
        <div class="section-title">{{ $services->title }}</div>

        <div class="services-items">
          @foreach($services->items as $item)
          <div class="service">
            <div class="service-title">{!! $item->title !!}</div>
            <div class="service-description">{!! $item->description !!}</div>
          </div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</section>
