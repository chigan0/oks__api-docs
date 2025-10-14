<template><div><h1 id="справочник-api" tabindex="-1"><a class="header-anchor" href="#справочник-api"><span>Справочник API</span></a></h1>
<p>В этом разделе представлено детальное техническое описание каждого ресурса и эндпоинта OKS Group API. Этот справочник предназначен для разработчиков, которые уже ознакомились с <RouteLink to="/api/guide/">Основным руководством</RouteLink> и готовы к реализации.</p>
<h2 id="основные-принципы" tabindex="-1"><a class="header-anchor" href="#основные-принципы"><span>Основные принципы</span></a></h2>
<h3 id="базовыи-url" tabindex="-1"><a class="header-anchor" href="#базовыи-url"><span>Базовый URL</span></a></h3>
<p>Все эндпоинты, описанные в этом справочнике, используют следующий базовый URL:
<code v-pre>https://banking.oks-group.kz</code></p>
<h3 id="аутентификация" tabindex="-1"><a class="header-anchor" href="#аутентификация"><span>Аутентификация</span></a></h3>
<p>Все запросы к API требуют аутентификации. Необходимо передавать валидный <code v-pre>access_token</code> в заголовке <code v-pre>Authorization</code> со схемой <code v-pre>Bearer</code>. Подробную информацию о получении и управлении токенами можно найти в <RouteLink to="/guide/authentication.html">Руководстве по аутентификации</RouteLink>.</p>
<h3 id="структура-ответов" tabindex="-1"><a class="header-anchor" href="#структура-ответов"><span>Структура ответов</span></a></h3>
<p>Успешные ответы от эндпоинтов, возвращающих списки (например, список ЖК), всегда обернуты в стандартизированный объект <code v-pre>ListResponse</code>. Это обеспечивает предсказуемость и удобство при обработке данных.</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"response"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// ... массив с данными ...</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"count"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Подробное описание полей для каждой конкретной модели (например, <code v-pre>Project</code> или <code v-pre>Layout</code>) находится на соответствующей странице ресурса.</p>
<h2 id="ресурсы-api" tabindex="-1"><a class="header-anchor" href="#ресурсы-api"><span>Ресурсы API</span></a></h2>
<p>Эндпоинты сгруппированы по ресурсам, с которыми они взаимодействуют:</p>
<ul>
<li><strong><RouteLink to="/api/complexes.html">Комплексы (Projects)</RouteLink></strong> — Получение данных о жилых комплексах.</li>
<li><strong><RouteLink to="/api/apartments.html">Квартиры (Layouts)</RouteLink></strong> — Получение данных о квартирах и планировках.</li>
</ul>
<!-- * **[Бронирование (Bookings)](./bookings.md)** — Создание и управление бронью. --></div></template>


