import{_ as n,o as s,c as a,a as p}from"./app-521e935c.js";const t={},e=p(`<h1 id="简单图表基本结构" tabindex="-1"><a class="header-anchor" href="#简单图表基本结构" aria-hidden="true">#</a> 简单图表基本结构</h1><h3 id="折线图、柱状图" tabindex="-1"><a class="header-anchor" href="#折线图、柱状图" aria-hidden="true">#</a> 折线图、柱状图</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;category&#39;<span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;Mon&#39;<span class="token punctuation">,</span> &#39;Tue&#39;<span class="token punctuation">,</span> &#39;Wed&#39;<span class="token punctuation">,</span> &#39;Thu&#39;<span class="token punctuation">,</span> &#39;Fri&#39;<span class="token punctuation">,</span> &#39;Sat&#39;<span class="token punctuation">,</span> &#39;Sun&#39;<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;value&#39;
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  series<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> &#39;line&#39;
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="极坐标柱状图" tabindex="-1"><a class="header-anchor" href="#极坐标柱状图" aria-hidden="true">#</a> 极坐标柱状图</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  polar<span class="token operator">:</span> <span class="token punctuation">{</span>
    radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> &#39;<span class="token number">80</span>%&#39;<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  angleAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
    max<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    startAngle<span class="token operator">:</span> <span class="token number">75</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  radiusAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;category&#39;<span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;a&#39;<span class="token punctuation">,</span> &#39;b&#39;<span class="token punctuation">,</span> &#39;c&#39;<span class="token punctuation">,</span> &#39;d&#39;<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  series<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> &#39;bar&#39;<span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">2.4</span><span class="token punctuation">,</span> <span class="token number">3.6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    coordinateSystem<span class="token operator">:</span> &#39;polar&#39;<span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">{</span>
      show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      position<span class="token operator">:</span> &#39;middle&#39;<span class="token punctuation">,</span>
      formatter<span class="token operator">:</span> &#39;<span class="token punctuation">{</span>b<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>c<span class="token punctuation">}</span>&#39;
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="雷达图" tabindex="-1"><a class="header-anchor" href="#雷达图" aria-hidden="true">#</a> 雷达图</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  radar<span class="token operator">:</span> <span class="token punctuation">{</span>
    indicator<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> name<span class="token operator">:</span> &#39;Sales&#39;<span class="token punctuation">,</span> max<span class="token operator">:</span> <span class="token number">6500</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> name<span class="token operator">:</span> &#39;Administration&#39;<span class="token punctuation">,</span> max<span class="token operator">:</span> <span class="token number">16000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> name<span class="token operator">:</span> &#39;Information Technology&#39;<span class="token punctuation">,</span> max<span class="token operator">:</span> <span class="token number">30000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> name<span class="token operator">:</span> &#39;Customer Support&#39;<span class="token punctuation">,</span> max<span class="token operator">:</span> <span class="token number">38000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> name<span class="token operator">:</span> &#39;Development&#39;<span class="token punctuation">,</span> max<span class="token operator">:</span> <span class="token number">52000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> name<span class="token operator">:</span> &#39;Marketing&#39;<span class="token punctuation">,</span> max<span class="token operator">:</span> <span class="token number">25000</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  series<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> &#39;radar&#39;<span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4200</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">,</span> <span class="token number">35000</span><span class="token punctuation">,</span> <span class="token number">50000</span><span class="token punctuation">,</span> <span class="token number">18000</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> &#39;Allocated Budget&#39;
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      areaStyle<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="饼图" tabindex="-1"><a class="header-anchor" href="#饼图" aria-hidden="true">#</a> 饼图</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token punctuation">{</span>    <span class="token comment">//标题</span>
    text<span class="token operator">:</span> &#39;Referer of a Website&#39;<span class="token punctuation">,</span>
    subtext<span class="token operator">:</span> &#39;Fake Data&#39;<span class="token punctuation">,</span>
    left<span class="token operator">:</span> &#39;center&#39;
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  tooltip<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//悬浮指示</span>
    trigger<span class="token operator">:</span> &#39;item&#39;
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  legend<span class="token operator">:</span> <span class="token punctuation">{</span>   <span class="token comment">// 左上角指示点</span>
    orient<span class="token operator">:</span> &#39;vertical&#39;<span class="token punctuation">,</span>
    left<span class="token operator">:</span> &#39;left&#39;
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  series<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> &#39;Access From&#39;<span class="token punctuation">,</span>
      type<span class="token operator">:</span> &#39;pie&#39;<span class="token punctuation">,</span>
      radius<span class="token operator">:</span> &#39;<span class="token number">50</span>%&#39;<span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1048</span><span class="token punctuation">,</span> name<span class="token operator">:</span> &#39;Search Engine&#39; <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">735</span><span class="token punctuation">,</span> name<span class="token operator">:</span> &#39;Direct&#39; <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span> name<span class="token operator">:</span> &#39;Email&#39; <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">484</span><span class="token punctuation">,</span> name<span class="token operator">:</span> &#39;Union Ads&#39; <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> name<span class="token operator">:</span> &#39;Video Ads&#39; <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          shadowBlur<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
          shadowOffsetX<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          shadowColor<span class="token operator">:</span> &#39;rgba(<span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span>)&#39;
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","Echarts图表基本结构.html.vue"]]);export{r as default};
