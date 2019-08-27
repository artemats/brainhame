<section class="section single-project-adjacent">
  <div class="section-inner justify-left">

    <div class="row justify-content-end">
      @if($adjacent_posts->next)
        <a href="{{ $adjacent_posts->next->link }}" class="just-link">
          <div class="col-xl-10 justify-content-end">

            <div class="block-title">{{ __('Next project') }}</div>
            <div class="adjacent-title">{{ $adjacent_posts->next->title }}</div>

            <div class="divider"></div>
          </div>
        </a>
      @endif

      @if(!$adjacent_posts->next && $adjacent_posts->prev)
        <a href="{{ $adjacent_posts->prev->link }}" class="just-link">
          <div class="col-xl-10 justify-content-end">

            <div class="block-title">{{ __('Prev project') }}</div>
            <div class="adjacent-title">{{ $adjacent_posts->prev->title }}</div>

            <div class="divider"></div>
          </div>
        </a>
      @endif
    </div>

  </div>
</section>
