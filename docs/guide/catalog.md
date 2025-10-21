# Работа с каталогом

После успешной аутентификации вы можете получать данные о жилых комплексах (ЖК) и квартирах.

## Общий принцип

Все запросы к каталогу являются `GET`-запросами и требуют передачи валидного токена в заголовке `Authorization`:

`Authorization: Bearer <ваш_access_token>`

## Получение списка Жилых Комплексов (ЖК)

Чтобы получить список всех доступных ЖК, выполните запрос к эндпоинту `/service/projects`. Эндпоинт поддерживает фильтрацию через query-параметры.

#### Параметры фильтрации (Query Params)

| Параметр | Тип | Описание |
| :--- | :--- | :--- |
| `classCode` | string | Фильтр по коду класса проекта. Доступные значения: `economy`, `standard`, `comfort`, `recreation`, `business`, `premium`, `luxury`. |
| `isSale` | boolean | Фильтр по статусу "в продаже". |
| `isCompleted` | boolean | Фильтр по статусу "завершен". |
| `hasGuarantee` | boolean | Фильтр по наличию жилищной гарантии. |
| `minCompletionYear` | integer | Фильтр по минимальному году завершения (начиная с 2020). |

#### Пример запроса (с фильтрацией)
```bash
curl -X GET "https://banking.oks-group.kz/api/v1/service/projects?isSale=true&classCode=business" \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

#### Структура ответа
Данные находятся в поле data, информация о пагинации — в поле meta

```json
{
  "data": [
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
  "meta": {
    "totalItems": 8,
    "totalPages": 1,
    "currentPage": 1
  }
}
```

## Получение детальной информации о ЖК

Чтобы получить подробную информацию о конкретном жилом комплексе, используйте его `uuid` в качестве path-параметра.

#### Запрос
```bash
curl -X GET "https://banking.oks-group.kz/api/v1/service/projects/{project_uuid}" \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

* {project_uuid} (string, required): Уникальный идентификатор проекта.

#### Структура ответа

Ответ содержит полную информацию по указанному ЖК, без оберток data и meta.

```json
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
  },
  "total_area": 15000.50,
  "status": "on_sale",
  "completionYear": 2025 
  // ... и все остальные поля проекта
}
```

* **[Комплексы (Projects)](/api/complexes.md)** — Подробный разбор полей и структуры данных ЖК.

## Получение списка Квартир

Для получения списка всех квартир во всех ЖК, используйте эндпоинт `/service/projects`. Этот эндпоинт поддерживает гибкую фильтрацию и пагинацию.

#### Параметры пагинации (Query Params)

| Параметр | Тип | По умолч. | Описание |
| :--- | :--- | :--- | :--- |
| `page` | integer | 1 | Номер запрашиваемой страницы. |
| `limit` | integer | 25 | Количество элементов на странице (min: 1, max: 50). |

#### Параметры фильтрации (Query Params)

| Параметр | Тип | Описание |
| :--- | :--- | :--- |
| `projectUuid` | string (uuid) | Фильтр по UUID конкретного проекта. |
| `layoutType` | string | Фильтр по типу планировки (Доступные значения, `storeroom`, `parking`, `apartment`, `commercial`). |
| `roomCount` | integer | Фильтр по точному количеству комнат. |
| `priceMin` | integer | Фильтр по минимальной общей стоимости (значение $\ge$ 1,000,000). |
| `priceMax` | integer | Фильтр по максимальной общей стоимости (значение $\ge$ 1,000,000). |
| `areaMin` | integer | Фильтр по минимальной общей площади в м² (значение $\ge$ 4). |
| `areaMax` | integer | Фильтр по максимальной общей площади в м² (значение $\ge$ 4). |
| `pricePerMeterMin` | integer | Фильтр по минимальной цене за м² (значение $\ge$ 50,000). |
| `pricePerMeterMax` | integer | Фильтр по максимальной цене за м² (значение $\ge$ 50,000). |
| `floorMin` | integer | Фильтр по минимальному номеру этажа (значение $\ge$ -2). |
| `floorMax` | integer | Фильтр по максимальному номеру этажа (значение $\ge$ -2). |
| `totalFloorsMin` | integer | Фильтр по минимальной общей этажности дома (значение $\ge$ -2). |
| `totalFloorsMax` | integer | Фильтр по максимальной общей этажности дома (значение $\ge$ -2). |
| `isPublished` | boolean | Фильтр по статусу "опубликовано" (true/false). |
| `isPurchase` | boolean | Фильтр по статусу "доступно к покупке" (true/false). |
| `isReserved` | boolean | Фильтр по статусу "зарезервировано" (true/false). |
| `isSold` | boolean | Фильтр по статусу "продано" (true/false). |
| `hasInstallmentPlan` | boolean | Фильтр квартир, у которых есть рассрочка (true/false). |
| `planTypeCode` | string | Фильтр по типу планировки. Доступные значения: `free` (Свободная планировка), `walls` (С перегородками). |

#### Запрос
```bash
curl -X GET "https://banking.oks-group.kz/api/v1/service/projects/layouts?limit=25&page=1&layoutType=parking" \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

#### Структура ответа
```json
{
  "data": [
    {
      "uuid": "8d1222e4-e78a-4b60-9dbb-7293ce22285d",
      "projectUuid": "c093a188-f5ed-4617-a241-b7c6924b4f1c",
      "core": {
        "title": "1 комнатная, 164.82 м²",
        "area": 164.82,
        "price": 118670400.0,
        "pricePerMeter": 720000.0,
        "roomCount": 1,
        "floor": 1,
        "totalFloors": 2,
        "housingClass": "business"
      },
      "geo": {
        "entrance": 2,
        "flatNumber": "3",
        "houseNumber": "2/1"
      },
		// и другие поля проекта
    }
    // ... (другие квартиры)
  ],
  "meta": {
    "totalItems": 33,
    "totalPages": 2,
    "currentPage": 2
  }
}
```

---

## Получение детальной информации о Квартире

Чтобы получить подробную информацию о конкретной квартире (планировке), используйте ее `uuid` в качестве path-параметра.

#### Запрос
```bash
curl -X GET "https://banking.oks-group.kz/api/v1/service/projects/layouts/{layout_uuid}" \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```
* {layout_uuid} (string, required): Уникальный идентификатор квартиры/планировки.

#### Структура ответа

Ответ содержит полную информацию по указанному ЖК, без оберток data и meta.

```json
{
  "uuid": "8d1222e4-e78a-4b60-9dbb-7293ce22285d",
  "projectUuid": "c093a188-f5ed-4617-a241-b7c6924b4f1c",
  "core": {
    "title": "1 комнатная, 164.82 м²",
    "area": 164.82,
    "price": 118670400.0,
    "pricePerMeter": 720000.0,
    "roomCount": 1,
    "floor": 1,
    "totalFloors": 2,
    "housingClass": "business"
  },
  "geo": {
    "entrance": 2,
    "flatNumber": "3",
    "houseNumber": "2/1"
  },
  "status": {
    "isPublished": true,
    "isPurchase": false,
    "isReserved": false,
    "isSold": false,
    "hasInstallmentPlan": true
  },
  "details": {
    "levelsCount": 1,
    "buildState": "unfinished",
    "giveupType": "12713",
    "planType": "С перегородками",
    "planTypeCode": "walls",
    "planName": "К-164.82-Блок 9",
    "layoutType": "commercial",
    "titleByCategory": "коммерческое помещение, 164.82 м²"
  },
  "media": {
    "titleImage": "[https://api.oks-group.kz/media/layout_images/k-164.82-blok_9.png](https://api.oks-group.kz/media/layout_images/k-164.82-blok_9.png)",
    "printLayout": "[https://api.oks-group.kz/ru/layout/pdf/8d1222e4-e78a-4b60-9dbb-7293ce22285d/](https://api.oks-group.kz/ru/layout/pdf/8d1222e4-e78a-4b60-9dbb-7293ce22285d/)",
    "floorPlan": null
  },
  "company": {
    "companyName": "OKS Development",
    "sellerName": "ТОО «Prime Park»"
  },
  "areaBreakdown": {
    "kitchen": null,
    "bathroom": null,
    "hallway": null,
    "rooms": {}
  }
}
```

* **[Квартиры (Layouts)](/api/apartments.md)** — Подробный разбор полей и структуры данных квартиры.