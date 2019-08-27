<section class="section team">
  <div class="h-line"></div>

  <div class="section-inner">
    <div class="section-title">{!! $team_title !!}</div>

    <div class="members row">
      @foreach($members->items as $member)
        <div class="member col-6 col-md-4">
          <div class="image-wrap">
            <img src="{{ $member->image }}" alt="{{ $member->title }}" />
          </div>

          <div class="member-info">
            <div class="member-title">{!! $member->title !!}</div>
            <div class="member-position">{!! $member->position !!}</div>
          </div>
        </div>
      @endforeach
    </div>
  </div>
</section>
