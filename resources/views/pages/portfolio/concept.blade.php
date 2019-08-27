<section class="section single-project-concept">
  <div class="image-wrapper top-image section-line">
    <img src="{{ $concept->images->top }}" alt="" />
  </div>

  <div class="section-inner">
    <div class="row">
      <div class="col-xs-5 col-md-4 col-4 left-image-wrapper">
        <div class="image-wrapper left-image">
          <img src="{{ $concept->images->left }}" alt="" />
        </div>
      </div>
      <div class="col-xs-7 col-md-8 col-8 block-down text-block">
        <div class="block-wrapper">
          <div class="block-subtitle">{{ $concept->title }}</div>
          <div>{!! $concept->description !!}</div>
        </div>
      </div>
    </div>
  </div>
</section>
