<section class="section third_block">
  <div class="section-inner">
    <div class="block-description inner-block section-description">
      <div>{!! $third_block->description !!}</div>
    </div>

    @foreach($third_block->gallery as $item)
      <div class="inner-block image-block">
        <img src="{{ $item }}" />
      </div>
    @endforeach
  </div>
</section>
