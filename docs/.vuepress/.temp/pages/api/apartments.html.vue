<template><div><h1 id="ресурс-планировки-layouts" tabindex="-1"><a class="header-anchor" href="#ресурс-планировки-layouts"><span>Ресурс: Планировки (Layouts)</span></a></h1>
<p>Этот ресурс предоставляет доступ к данным о планировках квартир, доступных в рамках определённого жилого комплекса (ЖК).</p>
<h2 id="получить-список-планировок-для-жк" tabindex="-1"><a class="header-anchor" href="#получить-список-планировок-для-жк"><span>Получить список планировок для ЖК</span></a></h2>
<p>Возвращает постраничный список всех доступных планировок для конкретного проекта, идентифицированного по его <code v-pre>UUID</code>.</p>
<ul>
<li><strong>Method:</strong> <code v-pre>GET</code></li>
<li><strong>URL:</strong> <code v-pre>/service/layout/list/{project_uuid}</code></li>
<li><strong>Authentication:</strong> <code v-pre>Bearer Token</code></li>
</ul>
<hr>
<h3 id="параметры-пути-path-parameters" tabindex="-1"><a class="header-anchor" href="#параметры-пути-path-parameters"><span>Параметры пути (Path Parameters)</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Параметр</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Описание</th>
<th style="text-align:left">Обязательный</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>project_uuid</code></td>
<td style="text-align:left"><code v-pre>UUID</code></td>
<td style="text-align:left">Уникальный идентификатор проекта, для которого запрашиваются планировки.</td>
<td style="text-align:left">Да</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="тело-ответа-200-ok" tabindex="-1"><a class="header-anchor" href="#тело-ответа-200-ok"><span>Тело ответа: <code v-pre>200 OK</code></span></a></h3>
<p>В случае успешного запроса API возвращает объект <code v-pre>ListResponse</code>, где поле <code v-pre>response</code> содержит массив объектов <code v-pre>Layout</code>.</p>
<h4 id="объект-listresponse" tabindex="-1"><a class="header-anchor" href="#объект-listresponse"><span>Объект <code v-pre>ListResponse</code></span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Поле</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>response</code></td>
<td style="text-align:left"><code v-pre>array</code></td>
<td style="text-align:left">Массив объектов (в данном случае <code v-pre>Layout</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>count</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Общее количество объектов.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>pages</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Общее количество страниц.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>current_page</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Номер текущей страницы.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="модель-layout" tabindex="-1"><a class="header-anchor" href="#модель-layout"><span>Модель <code v-pre>Layout</code></span></a></h3>
<p>Основной объект, описывающий планировку.</p>
<h4 id="идентификаторы" tabindex="-1"><a class="header-anchor" href="#идентификаторы"><span>Идентификаторы</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Поле</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Описание и пример</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>id</code></td>
<td style="text-align:left"><code v-pre>UUID</code></td>
<td style="text-align:left">Уникальный идентификатор планировки.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>request_id</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Внутренний идентификатор системы.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>project_uuid</code></td>
<td style="text-align:left"><code v-pre>UUID</code></td>
<td style="text-align:left">UUID проекта, к которому относится планировка.</td>
</tr>
</tbody>
</table>
<h4 id="расположение-в-здании" tabindex="-1"><a class="header-anchor" href="#расположение-в-здании"><span>Расположение в здании</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Поле</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>geo_house</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Номер дома (строения), напр., <code v-pre>&quot;160&quot;</code>.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>geo_house_entrance</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Номер подъезда.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>geo_flatnum</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Номер квартиры, напр., <code v-pre>&quot;135&quot;</code>.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>estate_floor</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Этаж расположения квартиры.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>estate_floors_in_house</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Общая этажность дома.</td>
</tr>
</tbody>
</table>
<h4 id="характеристики-недвижимости" tabindex="-1"><a class="header-anchor" href="#характеристики-недвижимости"><span>Характеристики недвижимости</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Поле</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>estate_area</code></td>
<td style="text-align:left"><code v-pre>float</code></td>
<td style="text-align:left">Общая площадь в м².</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>estate_rooms</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Количество комнат.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>estate_levelsCount</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Количество уровней в квартире (обычно <code v-pre>1</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>estate_planType</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Тип отделки/планировки (напр., <code v-pre>&quot;С перегородками&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>estate_planName</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Внутреннее/техническое название планировки.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>estate_housingClass</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Класс жилья (напр., <code v-pre>&quot;comfort&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>category</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Категория недвижимости (напр., <code v-pre>&quot;flat&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>layout_type</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Тип планировки (напр., <code v-pre>&quot;apartment&quot;</code>).</td>
</tr>
</tbody>
</table>
<h4 id="стоимость" tabindex="-1"><a class="header-anchor" href="#стоимость"><span>Стоимость</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Поле</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Описание (в тенге)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>estate_price</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Полная стоимость объекта.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>estate_price_m2</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Стоимость за квадратный метр.</td>
</tr>
</tbody>
</table>
<h4 id="статусы-и-флаги" tabindex="-1"><a class="header-anchor" href="#статусы-и-флаги"><span>Статусы и флаги</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Поле</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>is_published</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если планировка опубликована и видна.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>is_purchase</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если объект доступен для покупки.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>is_reserved</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если объект зарезервирован.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>is_sold</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если объект продан.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>oks_installment_plan</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если доступна рассрочка от застройщика.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>estate_group_buildState</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Стадия строительства (напр., <code v-pre>&quot;project&quot;</code>).</td>
</tr>
</tbody>
</table>
<h4 id="информация-о-продавце" tabindex="-1"><a class="header-anchor" href="#информация-о-продавце"><span>Информация о продавце</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Поле</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>company_name</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Название компании-застройщика.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>contacts_sell_name</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Название компании-продавца.</td>
</tr>
</tbody>
</table>
<h4 id="медиа-и-ссылки" tabindex="-1"><a class="header-anchor" href="#медиа-и-ссылки"><span>Медиа и ссылки</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Поле</th>
<th style="text-align:left">Тип</th>
<th style="text-align:left">Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>title</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Маркетинговый заголовок (напр., <code v-pre>&quot;1 комнатная, 39.6 м²&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>title_by_category</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Заголовок, сгенерированный по категории.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>title_image</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">URL изображения планировки.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>print_layout_url</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">URL для скачивания PDF-версии планировки.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="пример-полного-ответа" tabindex="-1"><a class="header-anchor" href="#пример-полного-ответа"><span>Пример полного ответа</span></a></h3>
<p><em>В данном примере для наглядности в массиве <code v-pre>response</code> показан только один объект.</em></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"response"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"8126d60d-d617-492e-9e10-aa5e73e4afe7"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"request_id"</span><span class="token operator">:</span> <span class="token number">6088878</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"project_uuid"</span><span class="token operator">:</span> <span class="token string">"60175bd5-a1f9-4191-9188-5345000a5f31"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"geo_flatnum"</span><span class="token operator">:</span> <span class="token string">"135"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"geo_house"</span><span class="token operator">:</span> <span class="token string">"160"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"geo_house_entrance"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"estate_levelsCount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"estate_area"</span><span class="token operator">:</span> <span class="token number">39.6</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"estate_price"</span><span class="token operator">:</span> <span class="token number">18572400</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"estate_price_m2"</span><span class="token operator">:</span> <span class="token number">469000</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"estate_floor"</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"estate_floors_in_house"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"estate_rooms"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"estate_group_buildState"</span><span class="token operator">:</span> <span class="token string">"project"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"estate_giveupType"</span><span class="token operator">:</span> <span class="token string">"12713"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"estate_planType"</span><span class="token operator">:</span> <span class="token string">"С перегородками"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"estate_planName"</span><span class="token operator">:</span> <span class="token string">"2-7_15"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"estate_housingClass"</span><span class="token operator">:</span> <span class="token string">"comfort"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"category"</span><span class="token operator">:</span> <span class="token string">"flat"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"is_published"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"is_purchase"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"is_reserved"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"is_sold"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"layout_type"</span><span class="token operator">:</span> <span class="token string">"apartment"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"oks_installment_plan"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"company_name"</span><span class="token operator">:</span> <span class="token string">"OKS Development"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"contacts_sell_name"</span><span class="token operator">:</span> <span class="token string">"ТОО Standard Construction-7"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"1 комнатная, 39.6 м²"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"title_by_category"</span><span class="token operator">:</span> <span class="token string">"1 комнатная, 39.6 м²"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"title_image"</span><span class="token operator">:</span> <span class="token string">"[https://banking.oks-group.kz/media/layout_images/2-7_15.png](https://banking.oks-group.kz/media/layout_images/2-7_15.png)"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"print_layout_url"</span><span class="token operator">:</span> <span class="token string">"[https://banking.oks-group.kz/ru/layout/pdf/8126d60d-d617-492e-9e10-aa5e73e4afe7/](https://banking.oks-group.kz/ru/layout/pdf/8126d60d-d617-492e-9e10-aa5e73e4afe7/)"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"count"</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


