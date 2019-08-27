<section class="section single-project-experience">
  <div class="image-wrapper background-video full-width parallax-image">
    <div class="overlay">
      <img src="{{ $experience->video_placeholder }}" alt="" />
    </div>

    <video playsinline="playsinline" muted="muted" class="back-video">
      <source src="{{ $experience->video }}" type="video/mp4">
    </video>
  </div>

  <div class="section-inner">
    <div class="row">
      <div class="col-md-8 col-xl-6">
        <div class="text-wrapper">
          <div class="block-subtitle">{{ $experience->title }}</div>
          <div>{!! $experience->description !!}</div>
        </div>
      </div>
    </div>
  </div>
</section>
