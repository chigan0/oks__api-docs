<template><div><h1 id="ресурс-квартиры-layouts" tabindex="-1"><a class="header-anchor" href="#ресурс-квартиры-layouts"><span>Ресурс: Квартиры (Layouts)</span></a></h1>
<p>Этот документ описывает подробную структуру данных для объекта &quot;Квартира&quot; (или &quot;Планировка&quot;). Эта структура используется во всех эндпоинтах, возвращающих данные о квартирах, включая список (<code v-pre>/service/projects/layouts</code>) и получение по UUID (<code v-pre>/service/projects/layouts/{layout_uuid}</code>).</p>
<h2 id="структура-объекта-квартира" tabindex="-1"><a class="header-anchor" href="#структура-объекта-квартира"><span>Структура объекта &quot;Квартира&quot;</span></a></h2>
<p>Основной объект, описывающий квартиру, сгруппированный по логическим блокам для удобства.</p>
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
<td style="text-align:left"><code v-pre>uuid</code></td>
<td style="text-align:left"><code v-pre>UUID</code></td>
<td style="text-align:left">Уникальный идентификатор квартиры.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>projectUuid</code></td>
<td style="text-align:left"><code v-pre>UUID</code></td>
<td style="text-align:left">UUID проекта, к которому относится квартира.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>core</code></td>
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left"><strong>(Блок)</strong> Основные параметры: цена, площадь, комнаты.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>geo</code></td>
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left"><strong>(Блок)</strong> Гео-данные: подъезд, номер квартиры.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>status</code></td>
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left"><strong>(Блок)</strong> Статусы: опубликовано, продано, в рассрочку.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>details</code></td>
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left"><strong>(Блок)</strong> Дополнительные технические детали.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>media</code></td>
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left"><strong>(Блок)</strong> Медиа-ссылки: изображения, PDF.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>company</code></td>
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left"><strong>(Блок)</strong> Информация о застройщике и продавце.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>areaBreakdown</code></td>
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left"><strong>(Блок)</strong> Детализация площади (кухня, комнаты).</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="блок-core" tabindex="-1"><a class="header-anchor" href="#блок-core"><span>Блок: <code v-pre>core</code></span></a></h3>
<p>Основные параметры, определяющие квартиру.</p>
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
<td style="text-align:left">Маркетинговый заголовок (напр., <code v-pre>&quot;3 комнатная, 82.31 м²&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>area</code></td>
<td style="text-align:left"><code v-pre>float</code></td>
<td style="text-align:left">Общая площадь в м².</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>price</code></td>
<td style="text-align:left"><code v-pre>number</code></td>
<td style="text-align:left">Полная стоимость объекта (в тенге).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>pricePerMeter</code></td>
<td style="text-align:left"><code v-pre>number</code></td>
<td style="text-align:left">Стоимость за квадратный метр.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>roomCount</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Количество комнат.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>floor</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Этаж расположения квартиры.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>totalFloors</code></td>
<td style="text-align:left"><code v-pre>integer</code></td>
<td style="text-align:left">Общая этажность дома.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>housingClass</code></td>
<td style="text-align:left"><code v-pre>string</code></td>
<td style="text-align:left">Класс жилья (напр., <code v-pre>&quot;comfort&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>ceilingHeight</code></td>
<td style="text-align:left"><code v-pre>float</code> / <code v-pre>null</code></td>
<td style="text-align:left">Высота потолков, м.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="блок-geo" tabindex="-1"><a class="header-anchor" href="#блок-geo"><span>Блок: <code v-pre>geo</code></span></a></h3>
<p>Расположение квартиры в здании.</p>
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
<td style="text-align:left"><code v-pre>entrance</code></td>
<td style="text-align:left"><code v-pre>integer</code> / <code v-pre>null</code></td>
<td style="text-align:left">Номер подъезда.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>flatNumber</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Номер квартиры.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>houseNumber</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Номер дома (строения).</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="блок-status" tabindex="-1"><a class="header-anchor" href="#блок-status"><span>Блок: <code v-pre>status</code></span></a></h3>
<p>Набор логических статусов квартиры.</p>
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
<td style="text-align:left"><code v-pre>isPublished</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если опубликовано и видно.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isPurchase</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если доступно для покупки.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isReserved</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если зарезервировано.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>isSold</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если продано.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>hasInstallmentPlan</code></td>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left"><code v-pre>true</code>, если доступна рассрочка.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="блок-details" tabindex="-1"><a class="header-anchor" href="#блок-details"><span>Блок: <code v-pre>details</code></span></a></h3>
<p>Дополнительные технические характеристики.</p>
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
<td style="text-align:left"><code v-pre>levelsCount</code></td>
<td style="text-align:left"><code v-pre>integer</code> / <code v-pre>null</code></td>
<td style="text-align:left">Количество уровней в квартире (обычно <code v-pre>1</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>buildState</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Стадия строительства (напр., <code v-pre>&quot;project&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>giveupType</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Внутренний код типа сдачи (напр., <code v-pre>&quot;12713&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>planType</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Описание типа планировки (напр., <code v-pre>&quot;С перегородками&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>planTypeCode</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Код типа планировки (напр., <code v-pre>&quot;walls&quot;</code> или <code v-pre>&quot;free&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>planName</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Внутреннее/техническое название планировки.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>layoutType</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Категория недвижимости (напр., <code v-pre>&quot;apartment&quot;</code>, <code v-pre>&quot;commercial&quot;</code>).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>titleByCategory</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Заголовок, сгенерированный по категории.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>parkingTypeId</code></td>
<td style="text-align:left"><code v-pre>integer</code> / <code v-pre>null</code></td>
<td style="text-align:left">ID типа парковки. <br> <strong>Доступные значения:</strong> <br> • <code v-pre>1</code> (Подземная) <br> • <code v-pre>2</code> (Наземная многоуровневая) <br> • <code v-pre>3</code> (За шлагбаумом во дворе) <br> • <code v-pre>4</code> (Открытая во дворе) <br> • <code v-pre>5</code> (Гараж) <br> • <code v-pre>6</code> (Охраняемая парковка) <br> • <code v-pre>7</code> (Надземный паркинг)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>livingHouseMaterialId</code></td>
<td style="text-align:left"><code v-pre>integer</code> / <code v-pre>null</code></td>
<td style="text-align:left">ID материала стен. <br> <strong>Доступные значения:</strong> <br> • <code v-pre>1</code>: (Кирпич) <br> • <code v-pre>3</code> (Монолит) <br> • <code v-pre>55</code> (Монолитно-кирпичный) <br> • <code v-pre>6</code> (Пенобетон) <br> • <code v-pre>7</code> (Панель) <br> • <code v-pre>8</code> (Железобетон) <br> • <code v-pre>9</code> (Дерево) <br> • <code v-pre>10</code> (Блочный) <br> • <code v-pre>11</code> (Сэндвич) <br> • <code v-pre>12</code> (Пеноблоки) <br> • <code v-pre>13</code> (Фахверк) <br> • <code v-pre>16</code> (Сборный железобетон) <br> • <code v-pre>20</code> (Комбинированный) <br> • <code v-pre>21</code> (Бетон) <br> • <code v-pre>22</code> (Монолитно-каркасный) <br> • <code v-pre>23</code> (Газобетон) <br> • <code v-pre>24</code> (Несъемная опалубка) <br> • <code v-pre>25</code> (Шлакоблок) <br> • <code v-pre>100</code> (Другое)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>buildingType</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Тип здания (напр., <code v-pre>&quot;living&quot;</code>, <code v-pre>&quot;business_center&quot;</code>, <code v-pre>business_center</code>, <code v-pre>shopping_center</code>, <code v-pre>administrative_building</code>, <code v-pre>other</code>s).</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="блок-media" tabindex="-1"><a class="header-anchor" href="#блок-media"><span>Блок: <code v-pre>media</code></span></a></h3>
<p>Ссылки на медиа-файлы.</p>
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
<td style="text-align:left"><code v-pre>titleImage</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">URL изображения планировки.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>printLayout</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">URL для скачивания PDF-версии планировки.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>floorPlan</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">URL изображения плана этажа (<code v-pre>null</code>, если нет).</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="блок-company" tabindex="-1"><a class="header-anchor" href="#блок-company"><span>Блок: <code v-pre>company</code></span></a></h3>
<p>Информация о продавце.</p>
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
<td style="text-align:left"><code v-pre>companyName</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Название компании-застройщика.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>sellerName</code></td>
<td style="text-align:left"><code v-pre>string</code> / <code v-pre>null</code></td>
<td style="text-align:left">Название компании-продавца.</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="блок-areabreakdown" tabindex="-1"><a class="header-anchor" href="#блок-areabreakdown"><span>Блок: <code v-pre>areaBreakdown</code></span></a></h3>
<p>Детализация площади по комнатам (может быть не заполнена).</p>
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
<td style="text-align:left"><code v-pre>kitchen</code></td>
<td style="text-align:left"><code v-pre>float</code> / <code v-pre>null</code></td>
<td style="text-align:left">Площадь кухни, м².</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>bathroom</code></td>
<td style="text-align:left"><code v-pre>float</code> / <code v-pre>null</code></td>
<td style="text-align:left">Площадь санузла, м².</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>hallway</code></td>
<td style="text-align:left"><code v-pre>float</code> / <code v-pre>null</code></td>
<td style="text-align:left">Площадь коридора/прихожей, м².</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>rooms</code></td>
<td style="text-align:left"><code v-pre>object</code></td>
<td style="text-align:left">Объект (словарь) с площадями комнат. Ключами являются <code v-pre>area_room_N</code> (комнаты) и <code v-pre>area_bedroom_N</code> (спальни).</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>areaBtiLiving</code></td>
<td style="text-align:left"><code v-pre>float</code> / <code v-pre>null</code></td>
<td style="text-align:left">Жилая площадь по БТИ, м².</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>areaMaxCustom</code></td>
<td style="text-align:left"><code v-pre>float</code> / <code v-pre>null</code></td>
<td style="text-align:left">Кастомная максимальная площадь, м².</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="пример-ответа-из-списка-service-projects-layouts" tabindex="-1"><a class="header-anchor" href="#пример-ответа-из-списка-service-projects-layouts"><span>Пример ответа (из списка <code v-pre>/service/projects/layouts</code>)</span></a></h3>
<p>Ниже приведен пример ответа от API. В массиве <code v-pre>data</code> для наглядности показан только один объект квартиры.</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"9345ef50-c2bd-45eb-8daa-4e127812bfbb"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"projectUuid"</span><span class="token operator">:</span> <span class="token string">"3c3a855a-51a5-41b3-94e8-dcbf6dfcc12a"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"core"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"3 комнатная, 82.31 м²"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"area"</span><span class="token operator">:</span> <span class="token number">82.31</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">31277800.0</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"pricePerMeter"</span><span class="token operator">:</span> <span class="token number">380000.0</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"roomCount"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"floor"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"totalFloors"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"housingClass"</span><span class="token operator">:</span> <span class="token string">"comfort"</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"ceilingHeight"</span><span class="token operator">:</span> <span class="token number">2.7</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"geo"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"entrance"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"flatNumber"</span><span class="token operator">:</span> <span class="token string">"23"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"houseNumber"</span><span class="token operator">:</span> <span class="token string">"241А"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"status"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"isPublished"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"isPurchase"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"isReserved"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"isSold"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"hasInstallmentPlan"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"details"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"levelsCount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"buildState"</span><span class="token operator">:</span> <span class="token string">"project"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"giveupType"</span><span class="token operator">:</span> <span class="token string">"12713"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"planType"</span><span class="token operator">:</span> <span class="token string">"С перегородками"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"planTypeCode"</span><span class="token operator">:</span> <span class="token string">"walls"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"planName"</span><span class="token operator">:</span> <span class="token string">"1-1_5-82,31"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"layoutType"</span><span class="token operator">:</span> <span class="token string">"apartment"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"titleByCategory"</span><span class="token operator">:</span> <span class="token string">"3 комнатная, 82.31 м²"</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"layoutType"</span><span class="token operator">:</span> <span class="token string">"apartment"</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"titleByCategory"</span><span class="token operator">:</span> <span class="token string">"3 комнатная, 82.31 м²"</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"parkingTypeId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"livingHouseMaterialId"</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"buildingType"</span><span class="token operator">:</span> <span class="token string">"living"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"media"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"titleImage"</span><span class="token operator">:</span> <span class="token string">"https://api.oks-group.kz/media/layout_images/1-1_5-8231.png"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"printLayout"</span><span class="token operator">:</span> <span class="token string">"https://api.oks-group.kz/ru/layout/pdf/9345ef50-c2bd-45eb-8daa-4e127812bfbb/"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"floorPlan"</span><span class="token operator">:</span> <span class="token string">"https://api.oks-group.kz/media/layout_images/podezd_2._yetazh_7.png"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"company"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">"companyName"</span><span class="token operator">:</span> <span class="token string">"OKS Development"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">"sellerName"</span><span class="token operator">:</span> <span class="token string">"ТОО «Asar house»"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token property">"areaBreakdown"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token property">"kitchen"</span><span class="token operator">:</span> <span class="token number">12.5</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"bathroom"</span><span class="token operator">:</span> <span class="token number">4.8</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"hallway"</span><span class="token operator">:</span> <span class="token number">6.2</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"rooms"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">					<span class="token property">"area_room_1"</span><span class="token operator">:</span> <span class="token number">22.0</span><span class="token punctuation">,</span></span>
<span class="line">					<span class="token property">"area_bedroom_1"</span><span class="token operator">:</span> <span class="token number">16.5</span><span class="token punctuation">,</span></span>
<span class="line">					<span class="token property">"area_bedroom_2"</span><span class="token operator">:</span> <span class="token number">14.0</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"areaBtiLiving"</span><span class="token operator">:</span> <span class="token number">52.5</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"areaMaxCustom"</span><span class="token operator">:</span> <span class="token null keyword">null</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"totalItems"</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"totalPages"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"currentPage"</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">		<span class="token comment">// ... и т.д</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


