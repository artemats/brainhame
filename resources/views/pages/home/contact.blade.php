<section class="section contact">
  <div class="section-inner">
    <div class="section-title contact-title">{!! $contact->title !!}</div>

    <div class="contact-info row">
      <div class="col-md-5 col-xl-4 contact-image">
        <img src="{{ $contact->image }}" alt="{{ $contact->title }}" />
      </div>
      <div class="col-md-7 col-xl-8 contact-info-inner">
        <div class="section-title contact-title-inner">{!! $contact->title !!}</div>

        <div class="contact-info-form">
          <div class="contact-description">{!! $contact->description !!}</div>

          @if(isset($contact->contact_form))
          {!! \Theme\Help::getContactForm($contact->contact_form) !!}
          @endif

          <div class="divider"></div>
        </div>
      </div>
    </div>
  </div>
</section>
