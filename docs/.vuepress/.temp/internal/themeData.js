export const themeData = JSON.parse("{\"lastUpdated\":false,\"contributors\":false,\"logo\":\"/images/oks-logo.svg\",\"navbar\":[{\"text\":\"Руководство\",\"link\":\"/guide/\"},{\"text\":\"Справочник API\",\"link\":\"/api/\"}],\"sidebar\":{\"/guide/\":[{\"text\":\"Руководство\",\"children\":[\"/guide/README.md\",\"/guide/authentication.md\",\"/guide/catalog.md\",\"/guide/booking.md\"]}],\"/api/\":[{\"text\":\"Справочник API\",\"children\":[\"/api/README.md\",\"/api/complexes.md\",\"/api/apartments.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
