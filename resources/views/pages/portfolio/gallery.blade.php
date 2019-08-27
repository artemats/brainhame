<section class="section single-project-gallery">
  <div class="section-inner">

    <div class="gallery-row first">
      @if($gallery->first)
        @foreach($gallery->first as $image)
          <div class="image-wrapper image-item">
            <img src="{{ $image }}" alt="" />
          </div>
        @endforeach
      @endif
    </div>

    <div class="gallery-row second row">
      @if($gallery->second)
        @foreach($gallery->second as $image)
          <div class="col-6 col-xl-4 image-item">
            <div class="image-wrapper">
              <img src="{{ $image }}" alt="" />
            </div>
          </div>
        @endforeach
      @endif
    </div>

  </div>
</section>
