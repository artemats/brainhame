<section class="section hero">
  <div class="hero-image">
    <img src="{{ $hero->image }}" alt="" />
  </div>

  <div class="section-inner">
    <div class="hero-title section-title" data-convert="stroke">{!! $hero->title !!}</div>
    <div class="hero-subtitle section-subtitle">{!! $hero->subtitle !!}</div>
  </div>

  <div class="section-bottom">
    <a href="#" class="scroll-down">{{ __('Scroll down') }}</a>
  </div>
</section>
