# now-loading
Display loading icon when target contents loading.
コンテンツをロードしている間、ローディングアイコンを表示させます。

## How to use 使い方

### load module モジュールの読込
<pre>
&lt;script src="./now-loading.js"&gt;&lt;/script&gt;
</pre>

### start loading ロード開始
To loading start, call load() with section id and icon path.
ロードをスタートさせるには、load()に「id」と「アイコンパス」を渡して呼び出します。

<pre>
nowLoading.load('displayId', './loading.gif');
</pre>

### end loading, and display content ロードを完了し、コンテンツを表示する
When loading is done, call done() with section id and display content.
ローディングが終わったら、done()に「id」と表示コンテンツを渡して呼び出します。
Content is HTMLElement object.
コンテンツはHTMLElementオブジェクトを渡します。
<pre>
nowLoading.done('displayId', content);
</pre>

You don't have to set content. In this case, display empty.
コンテンツのセットが不要なら、引数を指定しないことで、表示を空にすることができます
<pre>
nowLoading.done('displayId');
</pre>

### demo デモ
Plase look demo.html
demo.htmlを見てください。
