<template><div><h1 id="ресурс-комплексы-projects" tabindex="-1"><a class="header-anchor" href="#ресурс-комплексы-projects"><span>Ресурс: Комплексы (Projects)</span></a></h1>
<p>Этот ресурс предоставляет доступ к данным о жилых комплексах (ЖК).</p>
<h2 id="получить-список-жк" tabindex="-1"><a class="header-anchor" href="#получить-список-жк"><span>Получить список ЖК</span></a></h2>
<p>Возвращает постраничный список всех жилых комплексов.</p>
<ul>
<li><strong>Method:</strong> <code v-pre>GET</code></li>
<li><strong>URL:</strong> <code v-pre>/service/project/list</code></li>
<li><strong>Authentication:</strong> <code v-pre>Bearer Token</code></li>
</ul>
<hr>
<h3 id="тело-ответа-200-ok" tabindex="-1"><a class="header-anchor" href="#тело-ответа-200-ok"><span>Тело ответа: <code v-pre>200 OK</code></span></a></h3>
<p>В случае успешного запроса API возвращает объект <code v-pre>ListResponse</code>, где поле <code v-pre>response</code> содержит массив объектов <code v-pre>ProjectResponseDto</code>.</p>
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
<td style="text-align:left">Массив объектов <code v-pre>ProjectResponseDto</code>.</td>
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
<h3 id="модель-projectresponsedto" tabindex="-1"><a class="header-anchor" href="#модель-projectresponsedto"><span>Модель <code v-pre>ProjectResponseDto</code></span></a></h3>
<p>Основной объект, описывающий жилой комплекс, сгруппированный по логическим блокам.</p>
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
<td style="text-align:left"><code v-pre>slug</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Человекочитаемый идентификатор для URL (напр., <code v-pre>&quot;zhk-prime-park-2&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>uuid</code></td>
<td style="text-align:left"><code v-pre>UUID</code></td>
<td style="text-align:left">Уникальный идентификатор проекта (UUID).</td>
</tr>
</tbody>
</table>
<br/>
<h4 id="вложенные-объекты" tabindex="-1"><a class="header-anchor" href="#вложенные-объекты"><span>Вложенные объекты</span></a></h4>
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
<td style="text-align:left"><code v-pre>class</code></td>
<td style="text-align:left"><code v-pre>ProjectClass</code></td>
<td style="text-align:left">Класс жилья.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>status</code></td>
<td style="text-align:left"><code v-pre>ProjectStatuses</code></td>
<td style="text-align:left">Набор статусов проекта (в продаже, построен и т.д.).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>completion</code></td>
<td style="text-align:left"><code v-pre>ProjectCompletion</code></td>
<td style="text-align:left">Год и квартал сдачи.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>location</code></td>
<td style="text-align:left"><code v-pre>ProjectLocation</code></td>
<td style="text-align:left">Адрес и географические координаты.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>pricing</code></td>
<td style="text-align:left"><code v-pre>ProjectPricing</code></td>
<td style="text-align:left">Информация о ценах и площади.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>media</code></td>
<td style="text-align:left"><code v-pre>ProjectMedia</code></td>
<td style="text-align:left">Медиа-ресурсы: изображения, панорамы, буклеты.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>links</code></td>
<td style="text-align:left"><code v-pre>ProjectLinks</code></td>
<td style="text-align:left">Внешние ссылки на документы и ресурсы.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>style</code></td>
<td style="text-align:left"><code v-pre>ProjectStyle</code></td>
<td style="text-align:left">Цветовые решения для оформления.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>infrastructure</code></td>
<td style="text-align:left"><code v-pre>InfraLocation</code> / <code v-pre>null</code></td>
<td style="text-align:left">Объекты инфраструктуры на карте.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>nearby_infrastructure</code></td>
<td style="text-align:left"><code v-pre>array[NearbyInfraItem]</code> / <code v-pre>null</code></td>
<td style="text-align:left">Список объектов ближайшей инфраструктуры.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="вложенные-модели" tabindex="-1"><a class="header-anchor" href="#вложенные-модели"><span>Вложенные модели</span></a></h3>
<h4 id="модель-projectclass" tabindex="-1"><a class="header-anchor" href="#модель-projectclass"><span>Модель <code v-pre>ProjectClass</code></span></a></h4>
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
<td style="text-align:left"><code v-pre>code</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Кодовое обозначение класса (напр., <code v-pre>&quot;business&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>name</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Название класса (напр., <code v-pre>&quot;бизнес&quot;</code>).</td>
</tr>
</tbody>
</table>
<h4 id="модель-projectstatuses" tabindex="-1"><a class="header-anchor" href="#модель-projectstatuses"><span>Модель <code v-pre>ProjectStatuses</code></span></a></h4>
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
<td style="text-align:left"><code v-pre>is_sale</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если в ЖК ведутся продажи.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>is_completed</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если ЖК уже построен.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>has_housing_guarantee</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если проект участвует в программе гос. гарантий.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>has_decoration</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если проект декоротивный.</td>
</tr>
</tbody>
</table>
<h4 id="модель-projectcompletion" tabindex="-1"><a class="header-anchor" href="#модель-projectcompletion"><span>Модель <code v-pre>ProjectCompletion</code></span></a></h4>
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
<td style="text-align:left"><code v-pre>year</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Год сдачи объекта (напр., <code v-pre>2025</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>quarter</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Квартал сдачи объекта (1-4).</td>
</tr>
</tbody>
</table>
<h4 id="модель-projectlocation" tabindex="-1"><a class="header-anchor" href="#модель-projectlocation"><span>Модель <code v-pre>ProjectLocation</code></span></a></h4>
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
<td style="text-align:left"><code v-pre>address</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Полный адрес объекта.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>coordinates</code></td>
<td style="text-align:left"><code v-pre>ProjectLatLon</code></td>
<td style="text-align:left">Объект с географическими координатами.</td>
</tr>
</tbody>
</table>
<h4 id="модель-projectpricing" tabindex="-1"><a class="header-anchor" href="#модель-projectpricing"><span>Модель <code v-pre>ProjectPricing</code></span></a></h4>
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
<td style="text-align:left"><code v-pre>min_area_sqm</code></td>
<td style="text-align:left"><code v-pre>float</code></td>
<td style="text-align:left">Минимальная площадь квартир в продаже, м².</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>min_price</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Минимальная цена квартир в продаже (в тенге).</td>
</tr>
</tbody>
</table>
<h4 id="модель-projectmedia" tabindex="-1"><a class="header-anchor" href="#модель-projectmedia"><span>Модель <code v-pre>ProjectMedia</code></span></a></h4>
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
<td style="text-align:left"><code v-pre>cover_image</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">URL главного изображения (рендера) ЖК.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>images</code></td>
<td style="text-align:left"><code v-pre>array[string]</code> / <code v-pre>null</code></td>
<td style="text-align:left">Массив URL-адресов для галереи.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>panoramic_view</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Ссылка на панорамный вид.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>booklet_url</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">URL для скачивания буклета проекта.</td>
</tr>
</tbody>
</table>
<h4 id="модель-projectlinks" tabindex="-1"><a class="header-anchor" href="#модель-projectlinks"><span>Модель <code v-pre>ProjectLinks</code></span></a></h4>
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
<td style="text-align:left"><code v-pre>housing_guarantee_url</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Ссылка на страницу проекта на сайте КЖК.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>housing_guarantee_docs</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Ссылка на документы проекта на сайте КЖК.</td>
</tr>
</tbody>
</table>
<h4 id="модель-projectstyle" tabindex="-1"><a class="header-anchor" href="#модель-projectstyle"><span>Модель <code v-pre>ProjectStyle</code></span></a></h4>
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
<td style="text-align:left"><code v-pre>primary_color</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">HEX-код основного цвета проекта (напр., <code v-pre>&quot;#0e3737&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>secondary_color</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">HEX-код дополнительного цвета проекта.</td>
</tr>
</tbody>
</table>
<h4 id="модель-infralocation" tabindex="-1"><a class="header-anchor" href="#модель-infralocation"><span>Модель <code v-pre>InfraLocation</code></span></a></h4>
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
<td style="text-align:left"><code v-pre>placemarks</code></td>
<td style="text-align:left"><code v-pre>array[InfraPlacemarkItem]</code></td>
<td style="text-align:left">Группы отметок на карте (школы, магазины и т.д.).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>project_data</code></td>
<td style="text-align:left"><code v-pre>object</code> / <code v-pre>null</code></td>
<td style="text-align:left">Координаты и главное изображение самого проекта.</td>
</tr>
</tbody>
</table>
<h4 id="модель-nearbyinfraitem" tabindex="-1"><a class="header-anchor" href="#модель-nearbyinfraitem"><span>Модель <code v-pre>NearbyInfraItem</code></span></a></h4>
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
<td style="text-align:left"><code v-pre>location_name</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Название объекта (напр., <code v-pre>&quot;Shymkent city park&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>minutes_until</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Время в минутах (пешком или на авто).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>icon</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">URL иконки для отображения.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="пример-полного-ответа" tabindex="-1"><a class="header-anchor" href="#пример-полного-ответа"><span>Пример полного ответа</span></a></h3>
<p><em>В данном примере для наглядности в массиве <code v-pre>response</code> показан только один объект. Массивы координат (<code v-pre>placemarks</code>) сокращены.</em></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"response"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"zhk-prime-park-2"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"7e97c863-337b-4a4a-9ad3-0215a04d443f"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"class"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"business"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"бизнес"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"status"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"is_sale"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"is_completed"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"has_housing_guarantee"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"has_decoration"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"completion"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"year"</span><span class="token operator">:</span> <span class="token number">2025</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"quarter"</span><span class="token operator">:</span> <span class="token number">4</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"location"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"Шымкент, кв. Шымсити, д. 2/2"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"coordinates"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token property">"lat"</span><span class="token operator">:</span> <span class="token number">42.38922356578563</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"lon"</span><span class="token operator">:</span> <span class="token number">69.62628422021632</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"pricing"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"min_area_sqm"</span><span class="token operator">:</span> <span class="token number">38.27</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"min_price"</span><span class="token operator">:</span> <span class="token number">18045300</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"media"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"cover_image"</span><span class="token operator">:</span> <span class="token string">"https://banking.oks-group.kz/media/images/Prime_Park_2_превью.webp"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"images"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token string">"https://banking.oks-group.kz/media/images/Прайм_2.webp"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string">"https://banking.oks-group.kz/media/images/Prime_Park_2_слайдер_3.webp"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string">"https://banking.oks-group.kz/media/images/Prime_Park_2_слайдер_2.webp"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string">"https://banking.oks-group.kz/media/images/Prime_Park_2_слайдер_1.webp"</span></span>
<span class="line">                <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"panoramic_view"</span><span class="token operator">:</span> <span class="token string">"https://banking.oks-group.kz/media/images/Prime_Park_2_panorama_day.webp"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"booklet_url"</span><span class="token operator">:</span> <span class="token string">"https://banking.oks-group.kz/media/macro_projects/booklet/_Prime_Park_2_-_Лифлет_ФИНАЛ_3_b4s7kPR.pdf"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"housing_guarantee_url"</span><span class="token operator">:</span> <span class="token string">"https://homeportal.kz/projects/zk-prime-park-2"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"housing_guarantee_docs"</span><span class="token operator">:</span> <span class="token string">"https://banking.oks-group.kz/media/macro_projects/kzhk_docs/prime-park-2-guarantee.pdf"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"primary_color"</span><span class="token operator">:</span> <span class="token string">"#0e3737"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"secondary_color"</span><span class="token operator">:</span> <span class="token string">"#FFFFFF"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"infrastructure"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"placemarks"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Аптеки"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"https://banking.oks-group.kz/media/projects/infra_location/apteka.svg"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"placemarks"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                            <span class="token punctuation">[</span> <span class="token number">42.382121</span><span class="token punctuation">,</span> <span class="token number">69.629821</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token punctuation">[</span> <span class="token number">42.378971</span><span class="token punctuation">,</span> <span class="token number">69.642588</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token punctuation">[</span> <span class="token number">42.382423</span><span class="token punctuation">,</span> <span class="token number">69.646279</span> <span class="token punctuation">]</span></span>
<span class="line">                        <span class="token punctuation">]</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Магазины"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"https://banking.oks-group.kz/media/projects/infra_location/shop.svg"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"placemarks"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                             <span class="token punctuation">[</span> <span class="token number">42.380383</span><span class="token punctuation">,</span> <span class="token number">69.634754</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                             <span class="token punctuation">[</span> <span class="token number">42.379938</span><span class="token punctuation">,</span> <span class="token number">69.638853</span> <span class="token punctuation">]</span></span>
<span class="line">                        <span class="token punctuation">]</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"project_data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token property">"title_imae"</span><span class="token operator">:</span> <span class="token string">"https://banking.oks-group.kz/media/images/Prime_Park_2_превью.webp"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"cords"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">42.389223</span><span class="token punctuation">,</span> <span class="token number">69.626284</span> <span class="token punctuation">]</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"nearby_infrastructure"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"Shymkent city park"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"minutes_until"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"https://banking.oks-group.kz/media/images/Group_1011.svg"</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"Seitzhan school"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"minutes_until"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"https://banking.oks-group.kz/media/images/Group_1011.svg"</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token property">"location_name"</span><span class="token operator">:</span> <span class="token string">"Diamond plaza"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"minutes_until"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"https://banking.oks-group.kz/media/images/Vector7.svg"</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"count"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


