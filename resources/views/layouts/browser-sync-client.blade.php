@if(isset($browser_sync) && $browser_sync)
<script id="__bs_script__">//<![CDATA[
  document.write("<script async src='http://HOST:4000/browser-sync/browser-sync-client.js?v=2.26.3'><\/script>".replace("HOST", location.hostname));
  //]]></script>
@endif
