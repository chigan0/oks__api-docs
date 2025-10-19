<template><div><h1 id="ресурс-комплексы-projects" tabindex="-1"><a class="header-anchor" href="#ресурс-комплексы-projects"><span>Ресурс: Комплексы (Projects)</span></a></h1>
<p>Этот документ описывает подробную структуру данных для объекта &quot;Жилой Комплекс&quot; (ЖК). Эта структура используется во всех эндпоинтах, возвращающих данные о ЖК, включая список (<code v-pre>/service/projects/list</code>) и получение по UUID (<code v-pre>/service/projects/{project_uuid}</code>).</p>
<h2 id="получить-список-жк" tabindex="-1"><a class="header-anchor" href="#получить-список-жк"><span>Получить список ЖК</span></a></h2>
<p>Возвращает постраничный список всех жилых комплексов.</p>
<ul>
<li><strong>Method:</strong> <code v-pre>GET</code></li>
<li><strong>URL:</strong> <code v-pre>/service/projects/list</code></li>
<li><strong>Authentication:</strong> <code v-pre>Bearer Token</code></li>
</ul>
<hr>
<h3 id="тело-ответа-200-ok" tabindex="-1"><a class="header-anchor" href="#тело-ответа-200-ok"><span>Тело ответа: 200 OK</span></a></h3>
<p>В случае успешного запроса API возвращает объект, где поле <code v-pre>data</code> содержит массив объектов ЖК, а поле <code v-pre>meta</code> — информацию о пагинации.</p>
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
<td style="text-align:left"><code v-pre>data</code></td>
<td style="text-align:left"><code v-pre>array</code></td>
<td style="text-align:left">Массив объектов, описывающих ЖК.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>meta</code></td>
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left">Объект с мета-информацией о пагинации.</td>
</tr>
</tbody>
</table>
<h4 id="объект-meta" tabindex="-1"><a class="header-anchor" href="#объект-meta"><span>Объект <code v-pre>meta</code></span></a></h4>
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
<td style="text-align:left"><code v-pre>total_items</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Общее количество объектов.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>total_pages</code></td>
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
<h3 id="структура-объекта-жк" tabindex="-1"><a class="header-anchor" href="#структура-объекта-жк"><span>Структура объекта ЖК</span></a></h3>
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
<h4 id="класс-жилья" tabindex="-1"><a class="header-anchor" href="#класс-жилья"><span>Класс жилья</span></a></h4>
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
<h4 id="статусы-проекта" tabindex="-1"><a class="header-anchor" href="#статусы-проекта"><span>Статусы проекта</span></a></h4>
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
<td style="text-align:left"><code v-pre>isSale</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если в ЖК ведутся продажи.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isCompleted</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если ЖК уже построен.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>hasHousingGuarantee</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если проект участвует в программе гос. гарантий.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>hasDecoration</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если проект декоротивный.</td>
</tr>
</tbody>
</table>
<h4 id="срок-сдачи" tabindex="-1"><a class="header-anchor" href="#срок-сдачи"><span>Срок сдачи</span></a></h4>
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
<h4 id="локация" tabindex="-1"><a class="header-anchor" href="#локация"><span>Локация</span></a></h4>
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
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left">Объект с географическими координатами (<code v-pre>lat</code>, <code v-pre>lon</code>).</td>
</tr>
</tbody>
</table>
<h4 id="ценообразование" tabindex="-1"><a class="header-anchor" href="#ценообразование"><span>Ценообразование</span></a></h4>
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
<td style="text-align:left"><code v-pre>minAreaSqm</code></td>
<td style="text-align:left"><code v-pre>float</code></td>
<td style="text-align:left">Минимальная площадь квартир в продаже, м².</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>minPrice</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Минимальная цена квартир в продаже (в тенге).</td>
</tr>
</tbody>
</table>
<h4 id="медиа-ресурсы" tabindex="-1"><a class="header-anchor" href="#медиа-ресурсы"><span>Медиа-ресурсы</span></a></h4>
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
<td style="text-align:left"><code v-pre>coverImage</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">URL главного изображения (рендера) ЖК.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>images</code></td>
<td style="text-align:left"><code v-pre>array[string]</code> / <code v-pre>null</code></td>
<td style="text-align:left">Массив URL-адресов для галереи.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>panoramicView</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Ссылка на панорамный вид.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>bookletUrl</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">URL для скачивания буклета проекта.</td>
</tr>
</tbody>
</table>
<h4 id="внешние-ссылки" tabindex="-1"><a class="header-anchor" href="#внешние-ссылки"><span>Внешние ссылки</span></a></h4>
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
<td style="text-align:left"><code v-pre>housingGuaranteeUrl</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Ссылка на страницу проекта на сайте КЖК.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>housingGuaranteeDocs</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Ссылка на документы проекта на сайте КЖК.</td>
</tr>
</tbody>
</table>
<h4 id="стиль" tabindex="-1"><a class="header-anchor" href="#стиль"><span>Стиль</span></a></h4>
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
<td style="text-align:left"><code v-pre>primaryColor</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">HEX-код основного цвета проекта (напр., <code v-pre>&quot;#0e3737&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>secondaryColor</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">HEX-код дополнительного цвета проекта.</td>
</tr>
</tbody>
</table>
<h4 id="инфраструктура-на-карте" tabindex="-1"><a class="header-anchor" href="#инфраструктура-на-карте"><span>Инфраструктура (на карте)</span></a></h4>
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
<td style="text-align:left"><code v-pre>array[object]</code></td>
<td style="text-align:left">Группы отметок на карте (школы, магазины и т.д.).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>projectData</code></td>
<td style="text-align:left"><code v-pre>object</code> / <code v-pre>null</code></td>
<td style="text-align:left">Координаты и главное изображение самого проекта.</td>
</tr>
</tbody>
</table>
<h4 id="ближаишая-инфраструктура" tabindex="-1"><a class="header-anchor" href="#ближаишая-инфраструктура"><span>Ближайшая инфраструктура</span></a></h4>
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
<td style="text-align:left"><code v-pre>locationName</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Название объекта (напр., <code v-pre>&quot;Shymkent city park&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>minutesUntil</code></td>
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
<p><em>В данном примере для наглядности в массиве <code v-pre>data</code> показан только один объект. Массивы координат (<code v-pre>placemarks</code>) сокращены.</em></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"zhk-prime-park-2"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"c093a188-f5ed-4617-a241-b7c6924b4f1c"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"class"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"business"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"бизнес"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"status"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"isSale"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"isCompleted"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"hasHousingGuarantee"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"hasDecoration"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
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
<span class="line">                <span class="token property">"minAreaSqm"</span><span class="token operator">:</span> <span class="token number">38.27</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"minPrice"</span><span class="token operator">:</span> <span class="token number">18045300</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"media"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"coverImage"</span><span class="token operator">:</span> <span class="token string">"[https://api.oks-group.kz/media/images/Prime_Park_2_%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.webp](https://api.oks-group.kz/media/images/Prime_Park_2_%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.webp)"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"images"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token string">"[https://api.oks-group.kz/media/images/%D0%9F%D1%80%D0%B0%D0%B9%D0%BC_2.webp](https://api.oks-group.kz/media/images/%D0%9F%D1%80%D0%B0%D0%B9%D0%BC_2.webp)"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string">"[https://api.oks-group.kz/media/images/Prime_Park_2_%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_3.webp](https://api.oks-group.kz/media/images/Prime_Park_2_%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_3.webp)"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string">"[https://api.oks-group.kz/media/images/Prime_Park_2_%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_2.webp](https://api.oks-group.kz/media/images/Prime_Park_2_%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_2.webp)"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string">"[https://api.oks-group.kz/media/images/Prime_Park_2_%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_1_uGdLb3E.webp](https://api.oks-group.kz/media/images/Prime_Park_2_%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_1_uGdLb3E.webp)"</span></span>
<span class="line">                <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"panoramicView"</span><span class="token operator">:</span> <span class="token string">"https://api.oks-group.kz/media/images/Tulpar-panorama.jpg"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"bookletUrl"</span><span class="token operator">:</span> <span class="token string">"[https://api.oks-group.kz/media/macro_projects/booklet/_Prime_Park_2_-_%D0%9B%D0%B8%D1%84%D0%BB%D0%B5%D1%82_%D0%A4%D0%98%D0%9D%D0%90%D0%9B_3_b4s7kPR.pdf](https://api.oks-group.kz/media/macro_projects/booklet/_Prime_Park_2_-_%D0%9B%D0%B8%D1%84%D0%BB%D0%B5%D1%82_%D0%A4%D0%98%D0%9D%D0%90%D0%9B_3_b4s7kPR.pdf)"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"housingGuaranteeUrl"</span><span class="token operator">:</span> <span class="token string">"https://homeportal.kz/projects/zk-khanzada-bloki-1-2"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"housingGuaranteeDocs"</span><span class="token operator">:</span> <span class="token string">"https://api.oks-group.kz/media/macro_projects/kzhk_docs/%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE_%D0%BF%D0%BE_%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D1%83_OKS_4_1_d2GwoGV.pdf"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"primaryColor"</span><span class="token operator">:</span> <span class="token string">"#0e3737"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"secondaryColor"</span><span class="token operator">:</span> <span class="token string">"#0e3737"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"infrastructure"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"placemarks"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Аптеки"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"[https://api.oks-group.kz/media/projects/infra_location/apteka.svg](https://api.oks-group.kz/media/projects/infra_location/apteka.svg)"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"placemarks"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                            <span class="token punctuation">[</span> <span class="token number">42.382121</span><span class="token punctuation">,</span> <span class="token number">69.629821</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token punctuation">[</span> <span class="token number">42.378971</span><span class="token punctuation">,</span> <span class="token number">69.642588</span> <span class="token punctuation">]</span></span>
<span class="line">                        <span class="token punctuation">]</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Магазины"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"[https://api.oks-group.kz/media/projects/infra_location/shop.svg](https://api.oks-group.kz/media/projects/infra_location/shop.svg)"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token property">"placemarks"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                            <span class="token punctuation">[</span> <span class="token number">42.380383</span><span class="token punctuation">,</span> <span class="token number">69.634754</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token punctuation">[</span> <span class="token number">42.379938</span><span class="token punctuation">,</span> <span class="token number">69.638853</span> <span class="token punctuation">]</span></span>
<span class="line">                        <span class="token punctuation">]</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"projectData"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token property">"titleImage"</span><span class="token operator">:</span> <span class="token string">"[https://api.oks-group.kz/media/images/Prime_Park_2_%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.webp](https://api.oks-group.kz/media/images/Prime_Park_2_%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.webp)"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"cords"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                        <span class="token number">42.38922356578563</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token number">69.62628422021632</span></span>
<span class="line">                    <span class="token punctuation">]</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"nearbyInfrastructure"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token property">"locationName"</span><span class="token operator">:</span> <span class="token string">"Shymkent city park"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"minutesUntil"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"[https://api.oks-group.kz/media/images/Group_1011.svg](https://api.oks-group.kz/media/images/Group_1011.svg)"</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token property">"locationName"</span><span class="token operator">:</span> <span class="token string">"Seitzhan school"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"minutesUntil"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"[https://api.oks-group.kz/media/images/Group_1011.svg](https://api.oks-group.kz/media/images/Group_1011.svg)"</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token property">"locationName"</span><span class="token operator">:</span> <span class="token string">"Diamond plaza"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"minutesUntil"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"[https://api.oks-group.kz/media/images/Vector7.svg](https://api.oks-group.kz/media/images/Vector7.svg)"</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"total_items"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"total_pages"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


