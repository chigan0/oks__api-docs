# Начало работы

Добро пожаловать в документацию OKS Group API! Этот API предоставляет программный доступ к данным о жилых комплексах, квартирах и позволяет управлять процессом бронирования.

Этот гайд поможет вам сделать ваш первый успешный запрос к API.

## Шаг 0: Получение доступов

Для начала работы вам потребуются **`сlient_id`** и **`client_secret`**. Эти данные являются вашим уникальным идентификатором и секретным ключом для доступа к системе.

> ⚠️ **Важно:** Эти ключи предоставляются вашим персональным менеджером в OKS Group. Вы не можете сгенерировать их самостоятельно через API.

## Шаг 1: Получение Access Token

Доступ ко всем ресурсам API защищен с помощью **Access Token**, который вы получаете в обмен на ваши `Client ID` и `Client Secret`. Токен имеет ограниченный срок жизни.

Отправьте `POST`-запрос на эндпоинт `/service/token`:

```bash
curl -X POST "[https://banking.oks-group.kz/service/token](https://banking.oks-group.kz/service/token)" \
     -H "Content-Type: application/json" \
     -d '{
           "grant_type": "client_credentials",
           "client_id": YOUR_CLIENT_ID,
           "client_secret": "YOUR_CLIENT_SECRET"
         }'
```

В ответ вы получите токен доступа:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

Сохраните значение `access_token`. Оно понадобится на следующем шаге.

## Шаг 2: Ваш первый запрос к API

Теперь, имея токен, вы можете запрашивать данные. Давайте получим список всех жилых комплексов. Для этого нужно отправить `GET`-запрос, передав токен в заголовке `Authorization`.

```bash
curl -X GET "[https://banking.oks-group.kz/service/project/list](https://banking.oks-group.kz/service/project/list)" \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

В случае успеха вы получите список проектов:

```json
{
  "response": [
    {
      "slug": "zhk-prime-park-2",
      "uuid": "7e97c863-337b-4a4a-9ad3-0215a04d443f",
      "class": {
          "code": "business",
          "name": "бизнес"
      },
      "location": {
          "address": "Шымкент, кв. Шымсити, д. 2/2",
          "coordinates": {
              "lat": 42.389223,
              "lon": 69.626284
          }
      }
      // ... и другие поля проекта
    }
    // ... другие проекты
  ],
  "count": 8,
  "pages": 1,
  "current_page": 1
}
```

Поздравляем! Вы успешно интегрировались с OKS Group API.

## Дальнейшие шаги

* Изучите детальное руководство по [Аутентификации](./authentication.md), чтобы понять жизненный цикл токена.
* Перейдите к разделу [Работа с каталогом](./catalog.md) для получения информации о квартирах.