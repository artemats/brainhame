<section class="section team">
  <div class="h-line"></div>

  <div class="section-inner">
    <div class="section-title">{!! $team->title !!}</div>

    <div class="members">
      @foreach($members as $member)
      <div class="member animated-image">
        <div class="image-wrap">
          <img src="{{ $member->image }}" alt="{{ $member->title }}" />
        </div>

        <div class="hover-info">
          <div class="member-title">{!! $member->title !!}</div>
          <div class="member-position">{!! $member->position !!}</div>
        </div>
      </div>
      @endforeach
    </div>

    <div class="team-info">
      <div class="team-description">{!! $team->description !!}</div>

      <a href="{{ $team->button->page }}">{!! $team->button->text !!}</a>
      <div class="divider"></div>
    </div>
  </div>
</section>
