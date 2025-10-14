<template><div><h1 id="работа-с-каталогом" tabindex="-1"><a class="header-anchor" href="#работа-с-каталогом"><span>Работа с каталогом</span></a></h1>
<p>После успешной аутентификации вы можете получать данные о жилых комплексах (ЖК) и квартирах.</p>
<h2 id="общии-принцип" tabindex="-1"><a class="header-anchor" href="#общии-принцип"><span>Общий принцип</span></a></h2>
<p>Все запросы к каталогу являются <code v-pre>GET</code>-запросами и требуют передачи валидного токена в заголовке <code v-pre>Authorization</code>:</p>
<p><code v-pre>Authorization: Bearer &lt;ваш_access_token&gt;</code></p>
<h2 id="получение-списка-жилых-комплексов-жк" tabindex="-1"><a class="header-anchor" href="#получение-списка-жилых-комплексов-жк"><span>Получение списка Жилых Комплексов (ЖК)</span></a></h2>
<p>Чтобы получить полный список всех доступных ЖК, выполните запрос к эндпоинту <code v-pre>/service/project/list</code>.</p>
<h4 id="запрос" tabindex="-1"><a class="header-anchor" href="#запрос"><span>Запрос</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token string">"[https://banking.oks-group.kz/service/project/list](https://banking.oks-group.kz/service/project/list)"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Authorization: Bearer YOUR_ACCESS_TOKEN"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="структура-ответа" tabindex="-1"><a class="header-anchor" href="#структура-ответа"><span>Структура ответа</span></a></h4>
<p>Ответ всегда обернут в объект <code v-pre>ListResponse</code>. Сами данные находятся в поле <code v-pre>response</code>.</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"response"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"zhk-prime-park-2"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"7e97c863-337b-4a4a-9ad3-0215a04d443f"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"business"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"бизнес"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"location"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"Шымкент, кв. Шымсити, д. 2/2"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"coordinates"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">"lat"</span><span class="token operator">:</span> <span class="token number">42.389223</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">"lon"</span><span class="token operator">:</span> <span class="token number">69.626284</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token comment">// ... и другие поля проекта</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// ... другие проекты</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"count"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="получение-списка-квартир" tabindex="-1"><a class="header-anchor" href="#получение-списка-квартир"><span>Получение списка Квартир</span></a></h2>
<p>Для получения полного списка всех квартир во всех ЖК, используйте эндпоинт <code v-pre>/service/project/layouts</code>.</p>
<h4 id="запрос-1" tabindex="-1"><a class="header-anchor" href="#запрос-1"><span>Запрос</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token string">"[https://banking.oks-group.kz/service/project/layouts](https://banking.oks-group.kz/service/project/layouts)"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Authorization: Bearer YOUR_ACCESS_TOKEN"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="структура-ответа-1" tabindex="-1"><a class="header-anchor" href="#структура-ответа-1"><span>Структура ответа</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"response"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"f0e9d8c7-b6a5-4321-fedc-ba9876543210"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"project_uuid"</span><span class="token operator">:</span> <span class="token string">"a1b2c3d4-e5f6-7890-abcd-ef1234567890"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"floor"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"rooms"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"area"</span><span class="token operator">:</span> <span class="token number">65.5</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">25000000</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"available"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"count"</span><span class="token operator">:</span> <span class="token number">1250</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>На будущее:</strong> В следующих версиях API для эндпоинтов каталога будет добавлена <strong>возможность гибкой фильтрации</strong> по параметрам (например, по городу для ЖК или по количеству комнат для квартир), что позволит делать более точные и эффективные запросы.</p>
</blockquote>
</div></template>


