<template><div><h1 id="бронирования-планировки" tabindex="-1"><a class="header-anchor" href="#бронирования-планировки"><span>Бронирования планировки</span></a></h1>
<h2 id="создание-брони-асинхронныи" tabindex="-1"><a class="header-anchor" href="#создание-брони-асинхронныи"><span>Создание брони (Асинхронный)</span></a></h2>
<p>Чтобы забронировать квартиру (планировку), выполните <code v-pre>POST</code>-запрос к эндпоинту <code v-pre>/api/v1/service/projects/layouts/book</code>.</p>
<p>Этот эндпоинт инициирует асинхронный процесс (фоновую задачу) для создания бронирования. В ответ сервер немедленно возвращает информацию о запущенной задаче, а не саму бронь.</p>
<h3 id="запрос" tabindex="-1"><a class="header-anchor" href="#запрос"><span>Запрос</span></a></h3>
<p><code v-pre>POST /api/v1/service/projects/layouts/book</code></p>
<h3 id="тело-запроса-request-body" tabindex="-1"><a class="header-anchor" href="#тело-запроса-request-body"><span>Тело запроса (Request Body)</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Параметр</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Обязательный</th>
<th style="text-align:left">Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>layoutUuid</code></td>
<td style="text-align:left">string (uuid)</td>
<td style="text-align:left">Да</td>
<td style="text-align:left">Уникальный идентификатор квартиры/планировки для бронирования.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>phone</code></td>
<td style="text-align:left">string</td>
<td style="text-align:left">Да</td>
<td style="text-align:left">Контактный номер телефона клиента (максимум 16 символов).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>firstName</code></td>
<td style="text-align:left">string</td>
<td style="text-align:left">Да</td>
<td style="text-align:left">Имя клиента (от 1 до 76 символов).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>lastName</code></td>
<td style="text-align:left">string</td>
<td style="text-align:left">Да</td>
<td style="text-align:left">Фамилия клиента (от 1 до 76 символов).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>middleName</code></td>
<td style="text-align:left">string</td>
<td style="text-align:left">Нет</td>
<td style="text-align:left">Отчество клиента (если имеется).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>reserveDays</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Нет</td>
<td style="text-align:left">Количество дней брони. По умолчанию <code v-pre>1</code>. (Примечание: на данный момент поддерживается только значение <code v-pre>1</code>).</td>
</tr>
</tbody>
</table>
<h3 id="пример-запроса" tabindex="-1"><a class="header-anchor" href="#пример-запроса"><span>Пример запроса</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">"https://banking.oks-group.kz/api/v1/service/projects/layouts/book"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Authorization: Bearer YOUR_ACCESS_TOKEN"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Content-Type: application/json"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-d</span> <span class="token string">'{</span>
<span class="line">           "layoutUuid": "8d1222e4-e78a-4b60-9dbb-7293ce22285d",</span>
<span class="line">           "phone": "+77071234567",</span>
<span class="line">           "firstName": "Иван",</span>
<span class="line">           "lastName": "Иванов",</span>
<span class="line">           "middleName": "Иванович",</span>
<span class="line">           "reserveDays": 1</span>
<span class="line">         }'</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="структура-ответа-200-accepted" tabindex="-1"><a class="header-anchor" href="#структура-ответа-200-accepted"><span>Структура ответа (200 Accepted)</span></a></h3>
<p>В случае успешного запуска задачи, сервер вернет 200 и JSON-объект с идентификатором задачи, ее текущим статусом (pending) и временем создания.</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"taskId"</span><span class="token operator">:</span> <span class="token string">"1e36045f-5924-43a7-b199-e71457af0a89"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"pending"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"2025-10-28T16:22:42.381514Z"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="получение-статуса-задачи-бронирования" tabindex="-1"><a class="header-anchor" href="#получение-статуса-задачи-бронирования"><span>Получение статуса задачи (бронирования)</span></a></h2>
<p>Для отслеживания состояния асинхронной задачи, запущенной при создании брони, используйте <code v-pre>GET</code>-запрос к эндпоинту <code v-pre>/api/v1/service/projects/layouts/book/status/{task_id}</code>.</p>
<p>В качестве path-параметра необходимо передать <code v-pre>taskId</code>, полученный в ответе на запрос о создании брони.</p>
<h4 id="запрос-1" tabindex="-1"><a class="header-anchor" href="#запрос-1"><span>Запрос</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token string">"[https://banking.oks-group.kz/api/v1/service/projects/layouts/book/status/](https://banking.oks-group.kz/api/v1/service/projects/layouts/book/status/){task_id}"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Authorization: Bearer YOUR_ACCESS_TOKEN"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>{task_id} (string, required): Идентификатор задачи, полученный при создании брони.</li>
</ul>
<h3 id="структура-ответа" tabindex="-1"><a class="header-anchor" href="#структура-ответа"><span>Структура ответа</span></a></h3>
<p>Ответ будет содержать актуальный статус задачи (<code v-pre>status</code>) и, в случае завершения, поле <code v-pre>result</code>.</p>
<h3 id="_1-задача-успешно-завершена-completed" tabindex="-1"><a class="header-anchor" href="#_1-задача-успешно-завершена-completed"><span>1. Задача успешно завершена (Completed)</span></a></h3>
<p>Статус <code v-pre>completed</code>. Поле <code v-pre>result</code> содержит идентификаторы, связанные с успешно созданной бронью.</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"taskId"</span><span class="token operator">:</span> <span class="token string">"1e36045f-5924-43a7-b199-e71457af0a89"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"completed"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"2025-10-28T16:22:42.381514Z"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"contact_id"</span><span class="token operator">:</span> <span class="token number">5835313</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"shows_id"</span><span class="token operator">:</span> <span class="token number">836603</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"contact_created"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-задача-в-процессе-выполнения-processing" tabindex="-1"><a class="header-anchor" href="#_2-задача-в-процессе-выполнения-processing"><span>2. Задача в процессе выполнения (Processing)</span></a></h3>
<p>Статус <code v-pre>processing</code>. Задача все еще выполняется в фоновом режиме. Поле <code v-pre>result</code> в этом состоянии равно <code v-pre>null</code>.</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"taskId"</span><span class="token operator">:</span> <span class="token string">"1e36045f-5924-43a7-b199-e71457af0a89"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"processing"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"2025-10-28T16:22:42.381514Z"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"result"</span><span class="token operator">:</span> <span class="token null keyword">null</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-задача-завершилась-с-ошибкои-failed" tabindex="-1"><a class="header-anchor" href="#_3-задача-завершилась-с-ошибкои-failed"><span>3. Задача завершилась с ошибкой (Failed)</span></a></h3>
<p>Статус <code v-pre>failed</code>. Поле <code v-pre>result</code> содержит объект с описанием причины сбоя.</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"taskId"</span><span class="token operator">:</span> <span class="token string">"9ace4f14-363f-48ec-bc4a-7cd594c643be"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"failed"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"2025-10-28T17:03:42.670794Z"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"detail"</span><span class="token operator">:</span> <span class="token string">"Failed to create reservation"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"api_error"</span><span class="token operator">:</span> <span class="token string">"Property unit is booked by user "</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="снятие-брони" tabindex="-1"><a class="header-anchor" href="#снятие-брони"><span>Снятие брони</span></a></h2>
<p>Для снятия существующей брони с квартиры (планировки) выполните <code v-pre>POST</code>-запрос к эндпоинту <code v-pre>/api/v1/service/projects/layouts/unbook</code>.</p>
<p>Снятие брони требует передачи <code v-pre>contact_id</code> и <code v-pre>shows_id</code>, полученных в <code v-pre>result</code> при успешном завершении задачи <a href="#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D0%B0%D1%82%D1%83%D1%81%D0%B0-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F">Получение статуса задачи</a>.</p>
<h3 id="запрос-2" tabindex="-1"><a class="header-anchor" href="#запрос-2"><span>Запрос</span></a></h3>
<p><code v-pre>POST /api/v1/service/projects/layouts/unbook</code></p>
<h3 id="тело-запроса-request-body-1" tabindex="-1"><a class="header-anchor" href="#тело-запроса-request-body-1"><span>Тело запроса (Request Body)</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Параметр</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Обязательный</th>
<th style="text-align:left">Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>contact_id</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Да</td>
<td style="text-align:left">Идентификатор контакта, связанного с бронью.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>shows_id</code></td>
<td style="text-align:left">integer</td>
<td style="text-align:left">Да</td>
<td style="text-align:left">Идентификатор показа (сделки), связанного с бронью.</td>
</tr>
</tbody>
</table>
<h4 id="пример-запроса-1" tabindex="-1"><a class="header-anchor" href="#пример-запроса-1"><span>Пример запроса</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">"[https://banking.oks-group.kz/api/v1/service/projects/layouts/unbook](https://banking.oks-group.kz/api/v1/service/projects/layouts/unbook)"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Authorization: Bearer YOUR_ACCESS_TOKEN"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Content-Type: application/json"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-d</span> <span class="token string">'{</span>
<span class="line">           "contact_id": 5835313,</span>
<span class="line">           "shows_id": 836603</span>
<span class="line">         }'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="структура-ответа-1" tabindex="-1"><a class="header-anchor" href="#структура-ответа-1"><span>Структура ответа</span></a></h3>
<h4 id="_1-успешное-снятие-200-ok" tabindex="-1"><a class="header-anchor" href="#_1-успешное-снятие-200-ok"><span>1. Успешное снятие (200 OK)</span></a></h4>
<p>В случае успешного снятия брони, сервер вернет ответ со статусом 200 OK (тело ответа не определено или пустое).</p>
<h4 id="_2-ошибка-при-снятии" tabindex="-1"><a class="header-anchor" href="#_2-ошибка-при-снятии"><span>2. Ошибка при снятии</span></a></h4>
<p>В случае, если бронь не может быть снята (например, она уже не в том статусе), сервер вернет JSON-объект с описанием ошибки.</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"detail"</span><span class="token operator">:</span> <span class="token string">"Failed to remove reservation"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"api_error"</span><span class="token operator">:</span> <span class="token string">"Сделка не в брони"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


