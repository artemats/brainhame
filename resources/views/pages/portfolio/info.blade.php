<section class="section single-project-info">
  <div class="image-wrapper full-width parallax-image section-line">
    <img src="{{ $info->image }}" alt="" />
  </div>

  <div class="section-inner">
    <div class="row">
      @foreach($info->columns as $column)
      <div class="col-xl-4">
        <div class="block-subtitle">{{ $column->title }}</div>
        <div>{!! $column->description !!}</div>
      </div>
      @endforeach
    </div>
  </div>
</section>
