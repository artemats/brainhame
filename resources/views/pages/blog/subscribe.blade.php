<section class="section blog-subscribe">
  <div class="section-inner">
    <div class="form-wrapper">
      <div class="form-wrapper-inner">
        <div class="form-title">{!! $subscribe->title !!}</div>

        @if(isset($subscribe->contact_form))
          {!! \Theme\Help::getContactForm($subscribe->contact_form) !!}
        @endif

        <div class="divider"></div>
      </div>
    </div>
  </div>
</section>
