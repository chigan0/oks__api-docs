<template><div><h1 id="начало-работы" tabindex="-1"><a class="header-anchor" href="#начало-работы"><span>Начало работы</span></a></h1>
<p>Добро пожаловать в документацию OKS Group API! Этот API предоставляет программный доступ к данным о жилых комплексах, квартирах и позволяет управлять процессом бронирования.</p>
<p>Этот гайд поможет вам сделать ваш первый успешный запрос к API.</p>
<h1 id="префикс-api" tabindex="-1"><a class="header-anchor" href="#префикс-api"><span>Префикс API</span></a></h1>
<p>Все эндпоинты, описанные в этой документации, используют префикс <code v-pre>/api/v1/</code>. Убедитесь, что все ваши запросы к API включают этот префикс в URL.</p>
<p>Базовый URL: https://banking.oks-group.kz/api/v1</p>
<h2 id="шаг-0-получение-доступов" tabindex="-1"><a class="header-anchor" href="#шаг-0-получение-доступов"><span>Шаг 0: Получение доступов</span></a></h2>
<p>Для начала работы вам потребуются <strong><code v-pre>сlient_id</code></strong> и <strong><code v-pre>client_secret</code></strong>. Эти данные являются вашим уникальным идентификатором и секретным ключом для доступа к системе.</p>
<blockquote>
<p>⚠️ <strong>Важно:</strong> Эти ключи предоставляются вашим персональным менеджером в OKS Group. Вы не можете сгенерировать их самостоятельно через API.</p>
</blockquote>
<h2 id="шаг-1-получение-access-token" tabindex="-1"><a class="header-anchor" href="#шаг-1-получение-access-token"><span>Шаг 1: Получение Access Token</span></a></h2>
<p>Доступ ко всем ресурсам API защищен с помощью <strong>Access Token</strong>, который вы получаете в обмен на ваши <code v-pre>Client ID</code> и <code v-pre>Client Secret</code>. Токен имеет ограниченный срок жизни.</p>
<p>Отправьте <code v-pre>POST</code>-запрос на эндпоинт <code v-pre>/service/token</code>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">"https://banking.oks-group.kz/api/v1/service/token"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Content-Type: application/json"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-d</span> <span class="token string">'{</span>
<span class="line">           "grant_type": "client_credentials",</span>
<span class="line">           "client_id": YOUR_CLIENT_ID,</span>
<span class="line">           "client_secret": "YOUR_CLIENT_SECRET"</span>
<span class="line">         }'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В ответ вы получите токен доступа:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"token_type"</span><span class="token operator">:</span> <span class="token string">"Bearer"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"expires_in"</span><span class="token operator">:</span> <span class="token number">3600</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Сохраните значение <code v-pre>access_token</code>. Оно понадобится на следующем шаге.</p>
<h2 id="шаг-2-ваш-первыи-запрос-к-api" tabindex="-1"><a class="header-anchor" href="#шаг-2-ваш-первыи-запрос-к-api"><span>Шаг 2: Ваш первый запрос к API</span></a></h2>
<p>Теперь, имея токен, вы можете запрашивать данные. Давайте получим список всех жилых комплексов. Для этого нужно отправить <code v-pre>GET</code>-запрос, передав токен в заголовке <code v-pre>Authorization</code>.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token string">"https://banking.oks-group.kz/api/v1/service/projects"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Authorization: Bearer YOUR_ACCESS_TOKEN"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>В случае успеха вы получите список проектов:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
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
<span class="line">  <span class="token property">"meta"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"totalItems"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"totalPages"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"currentPage"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Поздравляем! Вы успешно интегрировались с OKS Group API.</p>
<h2 id="дальнеишие-шаги" tabindex="-1"><a class="header-anchor" href="#дальнеишие-шаги"><span>Дальнейшие шаги</span></a></h2>
<ul>
<li>Изучите детальное руководство по <RouteLink to="/guide/authentication.html">Аутентификации</RouteLink>, чтобы понять жизненный цикл токена.</li>
<li>Перейдите к разделу <RouteLink to="/guide/catalog.html">Работа с каталогом</RouteLink> для получения информации о квартирах.</li>
</ul>
</div></template>


