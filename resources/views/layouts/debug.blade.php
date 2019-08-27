@if (isset($_GET['debug']) && $_GET['debug'] === 'contr')
  @hierarchy
@elseif (isset($_GET['debug']) && $_GET['debug'] === 'vars')
  @debug
  {{--@vars--}}
@elseif (isset($_GET['debug']) && $_GET['debug'] === 'all')
  @hierarchy
  @debug
@endif
