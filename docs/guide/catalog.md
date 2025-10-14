# Работа с каталогом

После успешной аутентификации вы можете получать данные о жилых комплексах (ЖК) и квартирах.

## Общий принцип

Все запросы к каталогу являются `GET`-запросами и требуют передачи валидного токена в заголовке `Authorization`:

`Authorization: Bearer <ваш_access_token>`

## Получение списка Жилых Комплексов (ЖК)

Чтобы получить полный список всех доступных ЖК, выполните запрос к эндпоинту `/service/project/list`.

#### Запрос
```bash
curl -X GET "[https://banking.oks-group.kz/service/project/list](https://banking.oks-group.kz/service/project/list)" \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

#### Структура ответа
Ответ всегда обернут в объект `ListResponse`. Сами данные находятся в поле `response`.

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

## Получение списка Квартир

Для получения полного списка всех квартир во всех ЖК, используйте эндпоинт `/service/project/layouts`.

#### Запрос
```bash
curl -X GET "[https://banking.oks-group.kz/service/project/layouts](https://banking.oks-group.kz/service/project/layouts)" \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

#### Структура ответа
```json
{
  "response": [
    {
      "uuid": "f0e9d8c7-b6a5-4321-fedc-ba9876543210",
      "project_uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "floor": 5,
      "rooms": 2,
      "area": 65.5,
      "price": 25000000,
      "status": "available"
    }
    // ...
  ],
  "count": 1250
}
```

> **На будущее:** В следующих версиях API для эндпоинтов каталога будет добавлена **возможность гибкой фильтрации** по параметрам (например, по городу для ЖК или по количеству комнат для квартир), что позволит делать более точные и эффективные запросы.