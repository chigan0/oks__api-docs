export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/maksimmakarov/projects/oks/oks__api-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"OKS Group API"} }],
  ["/api/", { loader: () => import(/* webpackChunkName: "api_index.html" */"/Users/maksimmakarov/projects/oks/oks__api-docs/docs/.vuepress/.temp/pages/api/index.html.js"), meta: {"title":"Справочник API"} }],
  ["/api/apartments.html", { loader: () => import(/* webpackChunkName: "api_apartments.html" */"/Users/maksimmakarov/projects/oks/oks__api-docs/docs/.vuepress/.temp/pages/api/apartments.html.js"), meta: {"title":"Ресурс: Планировки (Layouts)"} }],
  ["/api/complexes.html", { loader: () => import(/* webpackChunkName: "api_complexes.html" */"/Users/maksimmakarov/projects/oks/oks__api-docs/docs/.vuepress/.temp/pages/api/complexes.html.js"), meta: {"title":"Ресурс: Комплексы (Projects)"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/maksimmakarov/projects/oks/oks__api-docs/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Начало работы"} }],
  ["/guide/authentication.html", { loader: () => import(/* webpackChunkName: "guide_authentication.html" */"/Users/maksimmakarov/projects/oks/oks__api-docs/docs/.vuepress/.temp/pages/guide/authentication.html.js"), meta: {"title":"Аутентификация (OAuth 2.0)"} }],
  ["/guide/booking.html", { loader: () => import(/* webpackChunkName: "guide_booking.html" */"/Users/maksimmakarov/projects/oks/oks__api-docs/docs/.vuepress/.temp/pages/guide/booking.html.js"), meta: {"title":""} }],
  ["/guide/catalog.html", { loader: () => import(/* webpackChunkName: "guide_catalog.html" */"/Users/maksimmakarov/projects/oks/oks__api-docs/docs/.vuepress/.temp/pages/guide/catalog.html.js"), meta: {"title":"Работа с каталогом"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/maksimmakarov/projects/oks/oks__api-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
