<section class="section first_block">
  <div class="section-inner">
    <div class="row">
      <div class="col-xl-5 d-none d-xl-block first-column">
        <div class="image-wrapper image-slide">
          <img src="{{ $first_block->image }}" />
        </div>
      </div>
      <div class="col-xl-7 second-column">
        <div class="row">
          <div class="col-5">
            <div class="section-title">{{ $first_block->title }}</div>
          </div>
          <div class="col-7 section-description">
            {!! $first_block->description !!}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
