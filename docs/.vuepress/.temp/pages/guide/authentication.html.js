import comp from "/Users/maksimmakarov/projects/oks/oks__api-docs/docs/.vuepress/.temp/pages/guide/authentication.html.vue"
const data = JSON.parse("{\"path\":\"/guide/authentication.html\",\"title\":\"Аутентификация (OAuth 2.0)\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Обзор\",\"slug\":\"обзор\",\"link\":\"#обзор\",\"children\":[]},{\"level\":2,\"title\":\"Эндпоинт получения токена\",\"slug\":\"эндпоинт-получения-токена\",\"link\":\"#эндпоинт-получения-токена\",\"children\":[{\"level\":3,\"title\":\"Grant Type: client_credentials\",\"slug\":\"grant-type-client-credentials\",\"link\":\"#grant-type-client-credentials\",\"children\":[]},{\"level\":3,\"title\":\"Grant Type: refresh_token\",\"slug\":\"grant-type-refresh-token\",\"link\":\"#grant-type-refresh-token\",\"children\":[]}]},{\"level\":2,\"title\":\"Использование Access Token\",\"slug\":\"использование-access-token\",\"link\":\"#использование-access-token\",\"children\":[]},{\"level\":2,\"title\":\"Обработка истечения срока действия токена\",\"slug\":\"обработка-истечения-срока-деиствия-токена\",\"link\":\"#обработка-истечения-срока-деиствия-токена\",\"children\":[{\"level\":3,\"title\":\"Подход 1: Проактивное обновление по TTL\",\"slug\":\"подход-1-проактивное-обновление-по-ttl\",\"link\":\"#подход-1-проактивное-обновление-по-ttl\",\"children\":[]},{\"level\":3,\"title\":\"Подход 2: Реактивное обновление по ошибке 401\",\"slug\":\"подход-2-реактивное-обновление-по-ошибке-401\",\"link\":\"#подход-2-реактивное-обновление-по-ошибке-401\",\"children\":[]},{\"level\":3,\"title\":\"Рекомендация\",\"slug\":\"рекомендация\",\"link\":\"#рекомендация\",\"children\":[]}]}],\"git\":{\"contributors\":[{\"name\":\"Ratmir\",\"username\":\"Ratmir\",\"email\":\"naz.abylai50@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Ratmir\"}],\"changelog\":[{\"hash\":\"c77be51ef65c9db555be5fb0c5762caad25e9337\",\"time\":1760467589000,\"email\":\"naz.abylai50@gmail.com\",\"author\":\"Ratmir\",\"message\":\"init\"}]},\"filePathRelative\":\"guide/authentication.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
