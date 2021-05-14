<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1561.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    span.Apple-tab-span {white-space:pre}
  </style>
</head>
<body>
<p class="p1"><br></p>
<p class="p2">// Set to false if opt-in required</p>
<p class="p2">var trackByDefault = true;</p>
<p class="p1"><br></p>
<p class="p2">function acEnableTracking() {</p>
<p class="p2"><span class="Apple-tab-span">	</span>var expiration = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);</p>
<p class="p2"><span class="Apple-tab-span">	</span>document.cookie = "ac_enable_tracking=1; expires= " + expiration + "; path=/";</p>
<p class="p2"><span class="Apple-tab-span">	</span>acTrackVisit();</p>
<p class="p2">}</p>
<p class="p1"><br></p>
<p class="p2">function acTrackVisit() {</p>
<p class="p2"><span class="Apple-tab-span">	</span>var trackcmp_email = '';</p>
<p class="p2"><span class="Apple-tab-span">	</span>var trackcmp = document.createElement("script");</p>
<p class="p2"><span class="Apple-tab-span">	</span>trackcmp.async = true;</p>
<p class="p2"><span class="Apple-tab-span">	</span>trackcmp.type = 'text/javascript';</p>
<p class="p2"><span class="Apple-tab-span">	</span>trackcmp.src = '//trackcmp.net/visit?actid=66011792&amp;e='+encodeURIComponent(trackcmp_email)+'&amp;r='+encodeURIComponent(document.referrer)+'&amp;u='+encodeURIComponent(window.location.href);</p>
<p class="p2"><span class="Apple-tab-span">	</span>var trackcmp_s = document.getElementsByTagName("script");</p>
<p class="p2"><span class="Apple-tab-span">	</span>if (trackcmp_s.length) {</p>
<p class="p2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>trackcmp_s[0].parentNode.appendChild(trackcmp);</p>
<p class="p2"><span class="Apple-tab-span">	</span>} else {</p>
<p class="p2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var trackcmp_h = document.getElementsByTagName("head");</p>
<p class="p2"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>trackcmp_h.length &amp;&amp; trackcmp_h[0].appendChild(trackcmp);</p>
<p class="p2"><span class="Apple-tab-span">	</span>}</p>
<p class="p2">}</p>
<p class="p1"><br></p>
<p class="p2">if (trackByDefault || /(^|; )ac_enable_tracking=([^;]+)/.test(document.cookie)) {</p>
<p class="p2"><span class="Apple-tab-span">	</span>acEnableTracking();</p>
<p class="p2">}</p>
</body>
</html>
