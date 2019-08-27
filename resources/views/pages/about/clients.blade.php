<section class="section clients">
  <div class="section-inner">
    <div class="row">
      <div class="col-xl-7">
        <div class="section-title" data-convert="stroke section-title">{!! $clients->title !!}</div>
        <div class="section-subtitle">{!! $clients->title !!}</div>

        <div class="section-description">{!! $clients->description !!}</div>
      </div>
      <div class="col-xl-5">
        <div class="logos row">
          @foreach($clients->logos as $logo)
          <div class="col-6 col-md-4 col-xl-6">
            <img src="{{ $logo }}" />
          </div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</section>
