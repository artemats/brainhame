<section class="section single-project-hero">
  <div class="h-line top-line" style="width: 100%;"></div>

  <div class="section-inner">
    <div class="row section-line section-top-line">
      <div class="col-xl-6">
        <div class="project-type">{{ $project_types }}</div>

        <div class="project-titles">
          <div class="hero-subtitle section-title">{!! $title !!}</div>
          <div class="hero-title section-title" data-convert="stroke">{!! $title !!}</div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="project-slogan">{{ $hero->slogan }}</div>
      </div>
    </div>

    <div class="project-thumbnail section-line">
      <div class="image-wrapper">
        <img src="{{ $post_thumbnail }}" alt="{{ $title }}" />
      </div>
    </div>

    <div class="row project-main-info">
      <div class="col-md-6">
        <div class="block-subtitle">{{ $hero->summary->title }}</div>
        <div>{!! $hero->summary->description !!}</div>
      </div>
      <div class="col-md-6">
        <div class="block-subtitle">{{ $hero->roles->title }}</div>
        <ul class="two-column-list row">
          @if($hero->roles->items)
            @foreach($hero->roles->items as $role)
              <li class="col-6"><span>{{ $role->item }}</span></li>
            @endforeach
          @endif
        </ul>
      </div>
    </div>

  </div>
</section>
