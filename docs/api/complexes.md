# Ресурс: Комплексы (Projects)

Этот ресурс предоставляет доступ к данным о жилых комплексах (ЖК).

## Получить список ЖК

Возвращает постраничный список всех жилых комплексов.

-   **Method:** `GET`
-   **URL:** `/service/project/list`
-   **Authentication:** `Bearer Token`

---

### Тело ответа: `200 OK`

В случае успешного запроса API возвращает объект `ListResponse`, где поле `response` содержит массив объектов `ProjectResponseDto`.

#### Объект `ListResponse`

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `response` | `array` | Массив объектов `ProjectResponseDto`. |
| `count` | `integer` | Общее количество объектов. |
| `pages` | `integer` | Общее количество страниц. |
| `current_page` | `integer` | Номер текущей страницы. |

---

### Модель `ProjectResponseDto`

Основной объект, описывающий жилой комплекс, сгруппированный по логическим блокам.

#### Идентификаторы

| Поле | Тип | Описание и пример |
| :--- | :--- | :--- |
| `slug` | `string` | Человекочитаемый идентификатор для URL (напр., `"zhk-prime-park-2"`). |
| `uuid` | `UUID` | Уникальный идентификатор проекта (UUID). |

<br/>

#### Вложенные объекты

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `class` | `ProjectClass` | Класс жилья. |
| `status` | `ProjectStatuses` | Набор статусов проекта (в продаже, построен и т.д.). |
| `completion` | `ProjectCompletion` | Год и квартал сдачи. |
| `location` | `ProjectLocation` | Адрес и географические координаты. |
| `pricing` | `ProjectPricing` | Информация о ценах и площади. |
| `media` | `ProjectMedia` | Медиа-ресурсы: изображения, панорамы, буклеты. |
| `links` | `ProjectLinks` | Внешние ссылки на документы и ресурсы. |
| `style` | `ProjectStyle` | Цветовые решения для оформления. |
| `infrastructure` | `InfraLocation` / `null` | Объекты инфраструктуры на карте. |
| `nearby_infrastructure` | `array[NearbyInfraItem]` / `null` | Список объектов ближайшей инфраструктуры. |

---

### Вложенные модели

#### Модель `ProjectClass`

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `code` | `string` | Кодовое обозначение класса (напр., `"business"`). |
| `name` | `string` | Название класса (напр., `"бизнес"`). |

#### Модель `ProjectStatuses`

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `is_sale` | `boolean` | `true`, если в ЖК ведутся продажи. |
| `is_completed` | `boolean` | `true`, если ЖК уже построен. |
| `has_housing_guarantee` | `boolean` | `true`, если проект участвует в программе гос. гарантий. |
| `has_decoration` | `boolean` | `true`, если проект декоротивный. |

#### Модель `ProjectCompletion`

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `year` | `integer`| Год сдачи объекта (напр., `2025`). |
| `quarter` | `integer`| Квартал сдачи объекта (1-4). |

#### Модель `ProjectLocation`

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `address` | `string` | Полный адрес объекта. |
| `coordinates` | `ProjectLatLon` | Объект с географическими координатами. |

#### Модель `ProjectPricing`

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `min_area_sqm`| `float` | Минимальная площадь квартир в продаже, м². |
| `min_price` | `integer`| Минимальная цена квартир в продаже (в тенге). |

#### Модель `ProjectMedia`

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `cover_image` | `string` / `null` | URL главного изображения (рендера) ЖК. |
| `images` | `array[string]` / `null` | Массив URL-адресов для галереи. |
| `panoramic_view`| `string` / `null` | Ссылка на панорамный вид. |
| `booklet_url` | `string` / `null` | URL для скачивания буклета проекта. |

#### Модель `ProjectLinks`

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `housing_guarantee_url`| `string` / `null` | Ссылка на страницу проекта на сайте КЖК. |
| `housing_guarantee_docs`| `string` / `null` | Ссылка на документы проекта на сайте КЖК. |

#### Модель `ProjectStyle`

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `primary_color` | `string` / `null` | HEX-код основного цвета проекта (напр., `"#0e3737"`). |
| `secondary_color`| `string` / `null` | HEX-код дополнительного цвета проекта. |

#### Модель `InfraLocation`

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `placemarks` | `array[InfraPlacemarkItem]`| Группы отметок на карте (школы, магазины и т.д.). |
| `project_data`| `object` / `null` | Координаты и главное изображение самого проекта. |

#### Модель `NearbyInfraItem`

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `location_name`| `string` | Название объекта (напр., `"Shymkent city park"`). |
| `minutes_until`| `integer` | Время в минутах (пешком или на авто). |
| `icon` | `string` | URL иконки для отображения. |

---

### Пример полного ответа

*В данном примере для наглядности в массиве `response` показан только один объект. Массивы координат (`placemarks`) сокращены.*

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
            "status": {
                "is_sale": true,
                "is_completed": false,
                "has_housing_guarantee": true,
                "has_decoration": false
            },
            "completion": {
                "year": 2025,
                "quarter": 4
            },
            "location": {
                "address": "Шымкент, кв. Шымсити, д. 2/2",
                "coordinates": {
                    "lat": 42.38922356578563,
                    "lon": 69.62628422021632
                }
            },
            "pricing": {
                "min_area_sqm": 38.27,
                "min_price": 18045300
            },
            "media": {
                "cover_image": "https://banking.oks-group.kz/media/images/Prime_Park_2_превью.webp",
                "images": [
                    "https://banking.oks-group.kz/media/images/Прайм_2.webp",
                    "https://banking.oks-group.kz/media/images/Prime_Park_2_слайдер_3.webp",
                    "https://banking.oks-group.kz/media/images/Prime_Park_2_слайдер_2.webp",
                    "https://banking.oks-group.kz/media/images/Prime_Park_2_слайдер_1.webp"
                ],
                "panoramic_view": "https://banking.oks-group.kz/media/images/Prime_Park_2_panorama_day.webp",
                "booklet_url": "https://banking.oks-group.kz/media/macro_projects/booklet/_Prime_Park_2_-_Лифлет_ФИНАЛ_3_b4s7kPR.pdf"
            },
            "links": {
                "housing_guarantee_url": "https://homeportal.kz/projects/zk-prime-park-2",
                "housing_guarantee_docs": "https://banking.oks-group.kz/media/macro_projects/kzhk_docs/prime-park-2-guarantee.pdf"
            },
            "style": {
                "primary_color": "#0e3737",
                "secondary_color": "#FFFFFF"
            },
            "infrastructure": {
                "placemarks": [
                    {
                        "title": "Аптеки",
                        "icon": "https://banking.oks-group.kz/media/projects/infra_location/apteka.svg",
                        "placemarks": [
                            [ 42.382121, 69.629821 ],
                            [ 42.378971, 69.642588 ],
                            [ 42.382423, 69.646279 ]
                        ]
                    },
                    {
                        "title": "Магазины",
                        "icon": "https://banking.oks-group.kz/media/projects/infra_location/shop.svg",
                        "placemarks": [
                             [ 42.380383, 69.634754 ],
                             [ 42.379938, 69.638853 ]
                        ]
                    }
                ],
                "project_data": {
                    "title_imae": "https://banking.oks-group.kz/media/images/Prime_Park_2_превью.webp",
                    "cords": [ 42.389223, 69.626284 ]
                }
            },
            "nearby_infrastructure": [
                {
                    "location_name": "Shymkent city park",
                    "minutes_until": 5,
                    "icon": "https://banking.oks-group.kz/media/images/Group_1011.svg"
                },
                {
                    "location_name": "Seitzhan school",
                    "minutes_until": 10,
                    "icon": "https://banking.oks-group.kz/media/images/Group_1011.svg"
                },
                {
                    "location_name": "Diamond plaza",
                    "minutes_until": 15,
                    "icon": "https://banking.oks-group.kz/media/images/Vector7.svg"
                }
            ]
        }
    ],
    "count": 1,
    "pages": 1,
    "current_page": 1
}
```