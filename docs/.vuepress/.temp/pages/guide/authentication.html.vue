<template><div><h1 id="аутентификация-oauth-2-0" tabindex="-1"><a class="header-anchor" href="#аутентификация-oauth-2-0"><span>Аутентификация (OAuth 2.0)</span></a></h1>
<h2 id="обзор" tabindex="-1"><a class="header-anchor" href="#обзор"><span>Обзор</span></a></h2>
<p>Доступ к OKS Group API осуществляется по протоколу OAuth 2.0. Система предназначена для межсерверного (M2M) взаимодействия и использует тип предоставления (<code v-pre>grant_type</code>) <strong><code v-pre>client_credentials</code></strong> для первичной аутентификации.</p>
<p>Процесс включает в себя обмен <code v-pre>Client ID</code> и <code v-pre>Client Secret</code> на временный <code v-pre>access_token</code>. Этот токен должен передаваться в заголовке <code v-pre>Authorization</code> при всех последующих запросах к защищенным ресурсам.</p>
<h2 id="эндпоинт-получения-токена" tabindex="-1"><a class="header-anchor" href="#эндпоинт-получения-токена"><span>Эндпоинт получения токена</span></a></h2>
<ul>
<li><strong>Method:</strong> <code v-pre>POST</code></li>
<li><strong>URL:</strong> <code v-pre>/api/v1/service/token</code></li>
</ul>
<p>Этот эндпоинт обрабатывает все операции, связанные с выдачей и обновлением токенов, в зависимости от переданного <code v-pre>grant_type</code>.</p>
<hr>
<h3 id="grant-type-client-credentials" tabindex="-1"><a class="header-anchor" href="#grant-type-client-credentials"><span>Grant Type: <code v-pre>client_credentials</code></span></a></h3>
<p>Этот тип предоставления используется для первичной аутентификации приложения.</p>
<h4 id="параметры-запроса-application-json" tabindex="-1"><a class="header-anchor" href="#параметры-запроса-application-json"><span>Параметры запроса (<code v-pre>application/json</code>)</span></a></h4>
<table>
<thead>
<tr>
<th>Параметр</th>
<th>Тип</th>
<th>Обязательность</th>
<th>Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>grant_type</code></td>
<td><code v-pre>string</code></td>
<td>Да</td>
<td>Значение должно быть <code v-pre>&quot;client_credentials&quot;</code>.</td>
</tr>
<tr>
<td><code v-pre>client_id</code></td>
<td><code v-pre>integer</code></td>
<td>Да</td>
<td>Идентификатор вашего клиентского приложения.</td>
</tr>
<tr>
<td><code v-pre>client_secret</code></td>
<td><code v-pre>string</code></td>
<td>Да</td>
<td>Секретный ключ вашего клиентского приложения.</td>
</tr>
</tbody>
</table>
<h4 id="пример-запроса" tabindex="-1"><a class="header-anchor" href="#пример-запроса"><span>Пример запроса</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">"https://banking.oks-group.kz/api/v1/service/token"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Content-Type: application/json"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-d</span> <span class="token string">'{</span>
<span class="line">           "grant_type": "client_credentials",</span>
<span class="line">           "client_id": 12345,</span>
<span class="line">           "client_secret": "a1b2c3d4e5f6..."</span>
<span class="line">         }'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="структура-ответа" tabindex="-1"><a class="header-anchor" href="#структура-ответа"><span>Структура ответа</span></a></h4>
<table>
<thead>
<tr>
<th>Поле</th>
<th>Тип</th>
<th>Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>access_token</code></td>
<td><code v-pre>string</code></td>
<td>JWT токен доступа.</td>
</tr>
<tr>
<td><code v-pre>token_type</code></td>
<td><code v-pre>string</code></td>
<td>Тип токена. Всегда возвращает <code v-pre>&quot;Bearer&quot;</code>.</td>
</tr>
<tr>
<td><code v-pre>expires_in</code></td>
<td><code v-pre>integer</code></td>
<td>Время жизни токена в секундах.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="grant-type-refresh-token" tabindex="-1"><a class="header-anchor" href="#grant-type-refresh-token"><span>Grant Type: <code v-pre>refresh_token</code></span></a></h3>
<p>Этот тип предоставления используется для обмена действующего <code v-pre>access_token</code> на новый, что позволяет продлить сессию аутентификации без повторной передачи <code v-pre>client_secret</code>.</p>
<h4 id="параметры-запроса-application-json-1" tabindex="-1"><a class="header-anchor" href="#параметры-запроса-application-json-1"><span>Параметры запроса (<code v-pre>application/json</code>)</span></a></h4>
<table>
<thead>
<tr>
<th>Параметр</th>
<th>Тип</th>
<th>Обязательность</th>
<th>Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>grant_type</code></td>
<td><code v-pre>string</code></td>
<td>Да</td>
<td>Значение должно быть <code v-pre>&quot;refresh_token&quot;</code>.</td>
</tr>
<tr>
<td><code v-pre>access_token</code></td>
<td><code v-pre>string</code></td>
<td>Да</td>
<td>Действующий (не истекший) <code v-pre>access_token</code>.</td>
</tr>
</tbody>
</table>
<h4 id="пример-запроса-1" tabindex="-1"><a class="header-anchor" href="#пример-запроса-1"><span>Пример запроса</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">"https://banking.oks-group.kz/api/v1/service/token"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-H</span> <span class="token string">"Content-Type: application/json"</span> <span class="token punctuation">\</span></span>
<span class="line">     <span class="token parameter variable">-d</span> <span class="token string">'{</span>
<span class="line">           "grant_type": "refresh_token",</span>
<span class="line">           "access_token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI..."</span>
<span class="line">         }'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ответ имеет идентичную структуру ответа <code v-pre>client_credentials</code>.</p>
<hr>
<h2 id="использование-access-token" tabindex="-1"><a class="header-anchor" href="#использование-access-token"><span>Использование Access Token</span></a></h2>
<p>Для аутентификации запросов к ресурсам API (например, к каталогу) <code v-pre>access_token</code> должен быть передан в HTTP-заголовке <code v-pre>Authorization</code> со схемой <code v-pre>Bearer</code>.</p>
<p><strong>Формат заголовка:</strong>
<code v-pre>Authorization: Bearer &lt;access_token&gt;</code></p>
<hr>
<h2 id="обработка-истечения-срока-деиствия-токена" tabindex="-1"><a class="header-anchor" href="#обработка-истечения-срока-деиствия-токена"><span>Обработка истечения срока действия токена</span></a></h2>
<p>Токен доступа имеет ограниченный срок жизни, указанный в поле <code v-pre>expires_in</code> (в секундах). Ваше приложение должно корректно обрабатывать его истечение.</p>
<h3 id="подход-1-проактивное-обновление-по-ttl" tabindex="-1"><a class="header-anchor" href="#подход-1-проактивное-обновление-по-ttl"><span>Подход 1: Проактивное обновление по TTL</span></a></h3>
<p>Этот подход требует отслеживания времени жизни токена (<code v-pre>TTL</code>) на стороне клиента для предотвращения ошибок <code v-pre>401</code>.</p>
<ul>
<li><strong>Алгоритм:</strong>
<ol>
<li>При получении токена, клиент сохраняет его и вычисляет время истечения (<code v-pre>current_time + expires_in</code>).</li>
<li>Перед выполнением запроса к API, клиент проверяет, не истечет ли токен в ближайшее время (например, в течение следующих 60 секунд).</li>
<li>Если токен близок к истечению, клиент превентивно запрашивает новый токен, используя <code v-pre>grant_type: &quot;refresh_token&quot;</code>.</li>
<li>Запрос к API выполняется с уже обновленным токеном.</li>
</ol>
</li>
</ul>
<h3 id="подход-2-реактивное-обновление-по-ошибке-401" tabindex="-1"><a class="header-anchor" href="#подход-2-реактивное-обновление-по-ошибке-401"><span>Подход 2: Реактивное обновление по ошибке <code v-pre>401</code></span></a></h3>
<p>Упрощенный, но менее безопасный подход.</p>
<ul>
<li><strong>Алгоритм:</strong>
<ol>
<li>Клиент использует токен до тех пор, пока API не вернёт ошибку <code v-pre>401 Unauthorized</code>.</li>
<li>В ответ на ошибку, клиент запрашивает новый токен (используя <code v-pre>grant_type: &quot;client_credentials&quot;</code>) и повторяет исходный запрос.</li>
</ol>
</li>
</ul>
<hr>
<h3 id="рекомендация" tabindex="-1"><a class="header-anchor" href="#рекомендация"><span>Рекомендация</span></a></h3>
<p><strong>Подход 1 (Проактивное обновление) является предпочтительным.</strong></p>
<p>Он соответствует лучшим практикам безопасности, так как <strong>минимизирует количество передач <code v-pre>client_secret</code> по сети</strong>. После первоначальной аутентификации, жизненный цикл токена управляется с помощью менее критичного <code v-pre>access_token</code>, что значительно уменьшает вектор атаки.</p>
<p><strong>Подход 2</strong> является допустимой альтернативой для простых клиентов или сред, где реализация логики отслеживания TTL затруднена, при условии, что все соединения надёжно защищены с помощью TLS.</p>
</div></template>


