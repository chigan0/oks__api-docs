<template><div><h1 id="работа-с-каталогом" tabindex="-1"><a class="header-anchor" href="#работа-с-каталогом"><span>Работа с каталогом</span></a></h1>
<p>После успешной аутентификации вы можете получать данные о жилых комплексах (ЖК) и квартирах.</p>
<h2 id="общии-принцип" tabindex="-1"><a class="header-anchor" href="#общии-принцип"><span>Общий принцип</span></a></h2>
<p>Все запросы к каталогу являются <code v-pre>GET</code>-запросами и требуют передачи валидного токена в заголовке <code v-pre>Authorization</code>:</p>
<p><code v-pre>Authorization: Bearer &lt;ваш_access_token&gt;</code></p>
<h2 id="получение-списка-жилых-комплексов-жк" tabindex="-1"><a class="header-anchor" href="#получение-списка-жилых-комплексов-жк"><span>Получение списка Жилых Комплексов (ЖК)</span></a></h2>
<p>Чтобы получить список всех доступных ЖК, выполните запрос к эндпоинту <code v-pre>/service/projects/list</code>. Эндпоинт поддерживает фильтрацию через query-параметры.</p>
<h4 id="параметры-фильтрации-query-params" tabindex="-1"><a class="header-anchor" href="#параметры-фильтрации-query-params"><span>Параметры фильтрации (Query Params)</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Параметр</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>classCode</code></td>
<td style="text-align:left">string</td>
<td style="text-align:left">Фильтр по коду класса проекта (например, <code v-pre>business</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isSale</code></td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">Фильтр по статусу &quot;в продаже&quot;.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isCompleted</code></td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">Фильтр по статусу &quot;завершен&quot;.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>hasGuarantee</code></td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">Фильтр по наличию жилищной гарантии.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>minCompletionYear</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Фильтр по минимальному году завершения (начиная с 2020).</td>
</tr>
</tbody>
</table>
<h4 id="пример-запроса-с-фильтрациеи" tabindex="-1"><a class="header-anchor" href="#пример-запроса-с-фильтрациеи"><span>Пример запроса (с фильтрацией)</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token string">"https://banking.oks-group.kz/api/v1/service/projects/list?isSale=true&amp;classCode=business"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Authorization: Bearer YOUR_ACCESS_TOKEN"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="структура-ответа" tabindex="-1"><a class="header-anchor" href="#структура-ответа"><span>Структура ответа</span></a></h4>
<p>Данные находятся в поле data, информация о пагинации — в поле meta</p>
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
<span class="line">  <span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"totalItems"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"totalPages"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"currentPage"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="получение-детальнои-информации-о-жк" tabindex="-1"><a class="header-anchor" href="#получение-детальнои-информации-о-жк"><span>Получение детальной информации о ЖК</span></a></h2>
<p>Чтобы получить подробную информацию о конкретном жилом комплексе, используйте его <code v-pre>uuid</code> в качестве path-параметра.</p>
<h4 id="запрос" tabindex="-1"><a class="header-anchor" href="#запрос"><span>Запрос</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token string">"https://banking.oks-group.kz/api/v1/service/projects/{project_uuid}"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Authorization: Bearer YOUR_ACCESS_TOKEN"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>{project_uuid} (string, required): Уникальный идентификатор проекта.</li>
</ul>
<h4 id="структура-ответа-1" tabindex="-1"><a class="header-anchor" href="#структура-ответа-1"><span>Структура ответа</span></a></h4>
<p>Ответ содержит полную информацию по указанному ЖК, без оберток data и meta.</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"zhk-prime-park-2"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"7e97c863-337b-4a4a-9ad3-0215a04d443f"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"class"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"business"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"бизнес"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"location"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"Шымкент, кв. Шымсити, д. 2/2"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"coordinates"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"lat"</span><span class="token operator">:</span> <span class="token number">42.389223</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"lon"</span><span class="token operator">:</span> <span class="token number">69.626284</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"total_area"</span><span class="token operator">:</span> <span class="token number">15000.50</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"on_sale"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"completionYear"</span><span class="token operator">:</span> <span class="token number">2025</span> </span>
<span class="line">  <span class="token comment">// ... и все остальные поля проекта</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong><RouteLink to="/api/complexes.html">Комплексы (Projects)</RouteLink></strong> — Подробный разбор полей и структуры данных ЖК.</li>
</ul>
<h2 id="получение-списка-квартир" tabindex="-1"><a class="header-anchor" href="#получение-списка-квартир"><span>Получение списка Квартир</span></a></h2>
<p>Для получения списка всех квартир во всех ЖК, используйте эндпоинт <code v-pre>/service/projects/layouts</code>. Этот эндпоинт поддерживает гибкую фильтрацию и пагинацию.</p>
<h4 id="параметры-пагинации-query-params" tabindex="-1"><a class="header-anchor" href="#параметры-пагинации-query-params"><span>Параметры пагинации (Query Params)</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Параметр</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">По умолч.</th>
<th style="text-align:left">Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>page</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">1</td>
<td style="text-align:left">Номер запрашиваемой страницы.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>limit</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">25</td>
<td style="text-align:left">Количество элементов на странице (min: 1, max: 50).</td>
</tr>
</tbody>
</table>
<h4 id="параметры-фильтрации-query-params-1" tabindex="-1"><a class="header-anchor" href="#параметры-фильтрации-query-params-1"><span>Параметры фильтрации (Query Params)</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Параметр</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>projectUuid</code></td>
<td style="text-align:left">string (uuid)</td>
<td style="text-align:left">Фильтр по UUID конкретного проекта.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>layoutType</code></td>
<td style="text-align:left">string</td>
<td style="text-align:left">Фильтр по типу планировки (Доступные значения, <code v-pre>storeroom</code>, <code v-pre>parking</code>, <code v-pre>apartment</code>, <code v-pre>commercial</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>roomCount</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Фильтр по точному количеству комнат.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>priceMin</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Фильтр по минимальной общей стоимости (значение $\ge$ 1,000,000).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>priceMax</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Фильтр по максимальной общей стоимости (значение $\ge$ 1,000,000).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>areaMin</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Фильтр по минимальной общей площади в м² (значение $\ge$ 4).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>areaMax</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Фильтр по максимальной общей площади в м² (значение $\ge$ 4).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>pricePerMeterMin</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Фильтр по минимальной цене за м² (значение $\ge$ 50,000).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>pricePerMeterMax</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Фильтр по максимальной цене за м² (значение $\ge$ 50,000).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>floorMin</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Фильтр по минимальному номеру этажа (значение $\ge$ -2).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>floorMax</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Фильтр по максимальному номеру этажа (значение $\ge$ -2).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>totalFloorsMin</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Фильтр по минимальной общей этажности дома (значение $\ge$ -2).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>totalFloorsMax</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Фильтр по максимальной общей этажности дома (значение $\ge$ -2).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isPublished</code></td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">Фильтр по статусу &quot;опубликовано&quot; (true/false).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isPurchase</code></td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">Фильтр по статусу &quot;доступно к покупке&quot; (true/false).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isReserved</code></td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">Фильтр по статусу &quot;зарезервировано&quot; (true/false).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isSold</code></td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">Фильтр по статусу &quot;продано&quot; (true/false).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>hasInstallmentPlan</code></td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">Фильтр квартир, у которых есть рассрочка (true/false).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>planTypeCode</code></td>
<td style="text-align:left">string</td>
<td style="text-align:left">Фильтр по типу планировки. Доступные значения: <code v-pre>free</code> (Свободная планировка), <code v-pre>walls</code> (С перегородками).</td>
</tr>
</tbody>
</table>
<h4 id="запрос-1" tabindex="-1"><a class="header-anchor" href="#запрос-1"><span>Запрос</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token string">"https://banking.oks-group.kz/api/v1/service/projects/layouts?limit=25&amp;page=1&amp;layoutType=parking"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Authorization: Bearer YOUR_ACCESS_TOKEN"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="структура-ответа-2" tabindex="-1"><a class="header-anchor" href="#структура-ответа-2"><span>Структура ответа</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"8d1222e4-e78a-4b60-9dbb-7293ce22285d"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"projectUuid"</span><span class="token operator">:</span> <span class="token string">"c093a188-f5ed-4617-a241-b7c6924b4f1c"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"core"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"1 комнатная, 164.82 м²"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"area"</span><span class="token operator">:</span> <span class="token number">164.82</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">118670400.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"pricePerMeter"</span><span class="token operator">:</span> <span class="token number">720000.0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"roomCount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"floor"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"totalFloors"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"housingClass"</span><span class="token operator">:</span> <span class="token string">"business"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"entrance"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"flatNumber"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"houseNumber"</span><span class="token operator">:</span> <span class="token string">"2/1"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token comment">// и другие поля проекта</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// ... (другие квартиры)</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"totalItems"</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"totalPages"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"currentPage"</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="получение-детальнои-информации-о-квартире" tabindex="-1"><a class="header-anchor" href="#получение-детальнои-информации-о-квартире"><span>Получение детальной информации о Квартире</span></a></h2>
<p>Чтобы получить подробную информацию о конкретной квартире (планировке), используйте ее <code v-pre>uuid</code> в качестве path-параметра.</p>
<h4 id="запрос-2" tabindex="-1"><a class="header-anchor" href="#запрос-2"><span>Запрос</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token string">"https://banking.oks-group.kz/api/v1/service/projects/layouts/{layout_uuid}"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Authorization: Bearer YOUR_ACCESS_TOKEN"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>{layout_uuid} (string, required): Уникальный идентификатор квартиры/планировки.</li>
</ul>
<h4 id="структура-ответа-3" tabindex="-1"><a class="header-anchor" href="#структура-ответа-3"><span>Структура ответа</span></a></h4>
<p>Ответ содержит полную информацию по указанному ЖК, без оберток data и meta.</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"8d1222e4-e78a-4b60-9dbb-7293ce22285d"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"projectUuid"</span><span class="token operator">:</span> <span class="token string">"c093a188-f5ed-4617-a241-b7c6924b4f1c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"core"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"1 комнатная, 164.82 м²"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"area"</span><span class="token operator">:</span> <span class="token number">164.82</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">118670400.0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"pricePerMeter"</span><span class="token operator">:</span> <span class="token number">720000.0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"roomCount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"floor"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"totalFloors"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"housingClass"</span><span class="token operator">:</span> <span class="token string">"business"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"entrance"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"flatNumber"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"houseNumber"</span><span class="token operator">:</span> <span class="token string">"2/1"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"isPublished"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"isPurchase"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"isReserved"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"isSold"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"hasInstallmentPlan"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"details"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"levelsCount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"buildState"</span><span class="token operator">:</span> <span class="token string">"unfinished"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"giveupType"</span><span class="token operator">:</span> <span class="token string">"12713"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"planType"</span><span class="token operator">:</span> <span class="token string">"С перегородками"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"planTypeCode"</span><span class="token operator">:</span> <span class="token string">"walls"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"planName"</span><span class="token operator">:</span> <span class="token string">"К-164.82-Блок 9"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"layoutType"</span><span class="token operator">:</span> <span class="token string">"commercial"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"titleByCategory"</span><span class="token operator">:</span> <span class="token string">"коммерческое помещение, 164.82 м²"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"media"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"titleImage"</span><span class="token operator">:</span> <span class="token string">"[https://api.oks-group.kz/media/layout_images/k-164.82-blok_9.png](https://api.oks-group.kz/media/layout_images/k-164.82-blok_9.png)"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"printLayout"</span><span class="token operator">:</span> <span class="token string">"[https://api.oks-group.kz/ru/layout/pdf/8d1222e4-e78a-4b60-9dbb-7293ce22285d/](https://api.oks-group.kz/ru/layout/pdf/8d1222e4-e78a-4b60-9dbb-7293ce22285d/)"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"floorPlan"</span><span class="token operator">:</span> <span class="token null keyword">null</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"company"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"companyName"</span><span class="token operator">:</span> <span class="token string">"OKS Development"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"sellerName"</span><span class="token operator">:</span> <span class="token string">"ТОО «Prime Park»"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"area_breakdown"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"kitchen"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"bathroom"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"hallway"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"rooms"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong><RouteLink to="/api/apartments.html">Квартиры (Layouts)</RouteLink></strong> — Подробный разбор полей и структуры данных квартиры.</li>
</ul>
</div></template>


