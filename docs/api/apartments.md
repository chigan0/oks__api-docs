# Ресурс: Планировки (Layouts)

Этот ресурс предоставляет доступ к данным о планировках квартир, доступных в рамках определённого жилого комплекса (ЖК).

## Получить список планировок для ЖК

Возвращает постраничный список всех доступных планировок для конкретного проекта, идентифицированного по его `UUID`.

- **Method:** `GET`
- **URL:** `/service/layout/list/{project_uuid}`
- **Authentication:** `Bearer Token`

---
### Параметры пути (Path Parameters)

| Параметр | Тип | Описание | Обязательный |
| :--- | :--- | :--- | :--- |
| `project_uuid` | `UUID` | Уникальный идентификатор проекта, для которого запрашиваются планировки. | Да |

---
### Тело ответа: `200 OK`

В случае успешного запроса API возвращает объект `ListResponse`, где поле `response` содержит массив объектов `Layout`.

#### Объект `ListResponse`
| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `response` | `array` | Массив объектов (в данном случае `Layout`). |
| `count` | `integer` | Общее количество объектов. |
| `pages` | `integer` | Общее количество страниц. |
| `current_page`| `integer` | Номер текущей страницы. |

---
### Модель `Layout`
Основной объект, описывающий планировку.

#### Идентификаторы
| Поле | Тип | Описание и пример |
| :--- | :--- | :--- |
| `id` | `UUID` | Уникальный идентификатор планировки. |
| `request_id` | `integer`| Внутренний идентификатор системы. |
| `project_uuid`| `UUID` | UUID проекта, к которому относится планировка. |

#### Расположение в здании
| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `geo_house` | `string` | Номер дома (строения), напр., `"160"`. |
| `geo_house_entrance`| `integer`| Номер подъезда. |
| `geo_flatnum` | `string` | Номер квартиры, напр., `"135"`. |
| `estate_floor` | `integer`| Этаж расположения квартиры. |
| `estate_floors_in_house`|`integer`| Общая этажность дома. |

#### Характеристики недвижимости
| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `estate_area` | `float` | Общая площадь в м². |
| `estate_rooms` | `integer`| Количество комнат. |
| `estate_levelsCount`| `integer`| Количество уровней в квартире (обычно `1`). |
| `estate_planType` | `string` | Тип отделки/планировки (напр., `"С перегородками"`). |
| `estate_planName` | `string` | Внутреннее/техническое название планировки. |
| `estate_housingClass`|`string` | Класс жилья (напр., `"comfort"`). |
| `category` | `string` | Категория недвижимости (напр., `"flat"`). |
| `layout_type` | `string` | Тип планировки (напр., `"apartment"`). |

#### Стоимость
| Поле | Тип | Описание (в тенге) |
| :--- | :--- | :--- |
| `estate_price` | `integer`| Полная стоимость объекта. |
| `estate_price_m2`| `integer`| Стоимость за квадратный метр. |

#### Статусы и флаги
| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `is_published` | `boolean`| `true`, если планировка опубликована и видна. |
| `is_purchase` | `boolean`| `true`, если объект доступен для покупки. |
| `is_reserved` | `boolean`| `true`, если объект зарезервирован. |
| `is_sold` | `boolean`| `true`, если объект продан. |
| `oks_installment_plan`| `boolean`| `true`, если доступна рассрочка от застройщика. |
| `estate_group_buildState`| `string`| Стадия строительства (напр., `"project"`). |

#### Информация о продавце
| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `company_name` | `string` | Название компании-застройщика. |
| `contacts_sell_name`|`string` | Название компании-продавца. |

#### Медиа и ссылки
| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `title` | `string` | Маркетинговый заголовок (напр., `"1 комнатная, 39.6 м²"`). |
| `title_by_category`|`string` | Заголовок, сгенерированный по категории. |
| `title_image` | `string` | URL изображения планировки. |
| `print_layout_url`|`string` | URL для скачивания PDF-версии планировки. |

---
### Пример полного ответа

*В данном примере для наглядности в массиве `response` показан только один объект.*
```json
{
    "response": [
        {
            "id": "8126d60d-d617-492e-9e10-aa5e73e4afe7",
            "request_id": 6088878,
            "project_uuid": "60175bd5-a1f9-4191-9188-5345000a5f31",
            "geo_flatnum": "135",
            "geo_house": "160",
            "geo_house_entrance": 2,
            "estate_levelsCount": 1,
            "estate_area": 39.6,
            "estate_price": 18572400,
            "estate_price_m2": 469000,
            "estate_floor": 11,
            "estate_floors_in_house": 16,
            "estate_rooms": 1,
            "estate_group_buildState": "project",
            "estate_giveupType": "12713",
            "estate_planType": "С перегородками",
            "estate_planName": "2-7_15",
            "estate_housingClass": "comfort",
            "category": "flat",
            "is_published": true,
            "is_purchase": true,
            "is_reserved": false,
            "is_sold": false,
            "layout_type": "apartment",
            "oks_installment_plan": true,
            "company_name": "OKS Development",
            "contacts_sell_name": "ТОО Standard Construction-7",
            "title": "1 комнатная, 39.6 м²",
            "title_by_category": "1 комнатная, 39.6 м²",
            "title_image": "[https://banking.oks-group.kz/media/layout_images/2-7_15.png](https://banking.oks-group.kz/media/layout_images/2-7_15.png)",
            "print_layout_url": "[https://banking.oks-group.kz/ru/layout/pdf/8126d60d-d617-492e-9e10-aa5e73e4afe7/](https://banking.oks-group.kz/ru/layout/pdf/8126d60d-d617-492e-9e10-aa5e73e4afe7/)"
        }
    ],
    "count": 42,
    "pages": 3,
    "current_page": 1
}