<section class="section contact-page">
  <div class="section-inner">
    <div class="row">
      <div class="col-xl-7 first-column page-columns">
        <h1 class="page-title">{!! $title !!}</h1>

        <div class="info row">
          @foreach($info as $group)
          <div class="col-sm-4">
            <div class="info-header">{{$group->title}}:</div>

            @foreach($group->items as $item)
              <div class="info-item">{{$item->text}}</div>
            @endforeach
          </div>
            @endforeach
        </div>
      </div>
      <div class="col-xl-5 second-column page-columns">
        <div class="form-title">{{ $form_info->title }}</div>

        @if(isset($form_info->form_id))
          {!! \Theme\Help::getContactForm($form_info->form_id) !!}
        @endif

        <div class="divider"></div>
      </div>
    </div>
  </div>
</section>
