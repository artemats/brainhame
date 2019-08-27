<section class="section portfolio">
  <div class="section-inner">
    <div class="section-title">{!! $portfolio->title !!}</div>

    @if( isset($portfolio->content) )
    <div>{!! $portfolio->content !!}</div>
    @endif

    @if( isset($portfolio->button) )
    <a href="{{ $portfolio->button->page }}">{!! $portfolio->button->text !!}</a>
    <div class="divider"></div>
    @endif

    <div class="projects">
      @foreach($projects->items as $project)

        <div class="project">
          <a href="{{$project->link}}" class="animated-image block-link">
            <div class="project-image image-wrap">
              <img src="{{ $project->image }}" alt="{{ $project->title }}" />
            </div>
          </a>

            <a href="{{$project->link}}" class="project-title block-link">{!! $project->title !!}</a>
            <div class="project-type">{{ $project->type }}</div>
        </div>

      @endforeach
    </div>
  </div>
</section>
