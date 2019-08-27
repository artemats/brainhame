<section class="section blog">
  <div class="section-inner">
    <div class="row">
      <div class="col-md-5">
        <div class="article-image">
          <img src="{{ $articles[0]->image }}" alt="{{ $articles[0]->title }}" />
        </div>
      </div>
      <div class="col-md-7">
        <div class="section-title">{{ $blog->title }}</div>

        <div class="article">
          <div class="article-title">{!! $articles[0]->title !!}</div>
          <div class="article-date">{{ $articles[0]->date }}</div>
          <div class="article-excerpt">{!! $articles[0]->excerpt !!}</div>
        </div>

        <a href="{{ $blog->button->page }}">{!! $blog->button->text !!}</a>
        <div class="divider"></div>
      </div>
    </div>
  </div>
</section>
