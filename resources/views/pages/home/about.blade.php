<section class="section about">
  <div class="section-inner">
    <div class="section-header">
      <div class="section-image">
        <img src="{{ $we_are->image }}" alt="{{ $we_are->title }}" />
      </div>
      <div class="section-title">{!! $we_are->title !!}</div>
    </div>

    <div class="about-text">
      <div class="row">
        <div class="column first col-md-6">{!! $we_are->text->first !!}</div>

        <div class="column second col-md-6">
          {!! $we_are->text->second !!}

          <a href="{{ $we_are->button->page }}">{!! $we_are->button->text !!}</a>
          <div class="divider"></div>
        </div>
      </div>
    </div>
  </div>
</section>
