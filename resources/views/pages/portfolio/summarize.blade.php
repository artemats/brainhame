<section class="section single-project-summarize">
  <div class="section-inner">

    <div class="row reverse">
      <div class="col-xl-4 block-down">
        <div class="text-wrapper">
          <div class="block-subtitle">{{ $summarize->title }}</div>
          <div>{!! $summarize->description !!}</div>
        </div>
      </div>
      <div class="col-xl-8 section-line">
        <div class="image-wrapper">
          <img src="{{ $summarize->image }}" alt="" />
        </div>
      </div>
    </div>

  </div>
</section>
