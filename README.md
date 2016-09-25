# now-loading
Display loading icon when target contents loading.

## How to use

### load module
<pre>
&lt;script src="./now-loading.js"&gt;&lt;/script&gt;
</pre>

### start loading
To loading start, call load() with section id and icon path.
<pre>
nowLoading.load('displayId', './loading.gif');
</pre>

### end loading, then diplay content
When loading is done, call done() with section id and display content.
Content is HTMLElement object.
<pre>
nowLoading.done('displayId', content);
</pre>

You don't have to set content.
In this case, display empty.
<pre>
nowLoading.done('displayId');
</pre>

### demo
Plase look demo.html
