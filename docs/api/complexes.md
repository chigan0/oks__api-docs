# Ресурс: Комплексы (Projects)

Этот документ описывает подробную структуру данных для объекта "Жилой Комплекс" (ЖК). Эта структура используется во всех эндпоинтах, возвращающих данные о ЖК, включая список (`/service/projects/list`) и получение по UUID (`/service/projects/{project_uuid}`).

## Получить список ЖК

Возвращает постраничный список всех жилых комплексов.

-   **Method:** `GET`
-   **URL:** `/service/projects/list`
-   **Authentication:** `Bearer Token`

---

### Тело ответа: 200 OK

В случае успешного запроса API возвращает объект, где поле `data` содержит массив объектов ЖК, а поле `meta` — информацию о пагинации.

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `data` | `array` | Массив объектов, описывающих ЖК. |
| `meta` | `object` | Объект с мета-информацией о пагинации. |

#### Объект `meta`

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `totalItems` | `integer` | Общее количество объектов. |
| `totalPages` | `integer` | Общее количество страниц. |
| `currentPage` | `integer` | Номер текущей страницы. |

---

### Структура объекта ЖК

Основной объект, описывающий жилой комплекс, сгруппированный по логическим блокам.

#### Идентификаторы

| Поле | Тип | Описание и пример |
| :--- | :--- | :--- |
| `slug` | `string` | Человекочитаемый идентификатор для URL (напр., `"zhk-prime-park-2"`). |
| `uuid` | `UUID` | Уникальный идентификатор проекта (UUID). |

#### Класс жилья

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `code` | `string` | Кодовое обозначение класса (напр., `"business"`). |
| `name` | `string` | Название класса (напр., `"бизнес"`). |

#### Статусы проекта

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `isSale` | `boolean` | `true`, если в ЖК ведутся продажи. |
| `isCompleted` | `boolean` | `true`, если ЖК уже построен. |
| `hasHousingGuarantee` | `boolean` | `true`, если проект участвует в программе гос. гарантий. |
| `hasDecoration` | `boolean` | `true`, если проект декоротивный. |

#### Срок сдачи

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `year` | `integer`| Год сдачи объекта (напр., `2025`). |
| `quarter` | `integer`| Квартал сдачи объекта (1-4). |

#### Локация

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `address` | `string` | Полный адрес объекта. |
| `coordinates` | `object` | Объект с географическими координатами (`lat`, `lon`). |

#### Ценообразование

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `minAreaSqm`| `float` | Минимальная площадь квартир в продаже, м². |
| `minPrice` | `integer`| Минимальная цена квартир в продаже (в тенге). |

#### Медиа-ресурсы

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `coverImage` | `string` / `null` | URL главного изображения (рендера) ЖК. |
| `images` | `array[string]` / `null` | Массив URL-адресов для галереи. |
| `panoramicView`| `string` / `null` | Ссылка на панорамный вид. |
| `bookletUrl` | `string` / `null` | URL для скачивания буклета проекта. |

#### Внешние ссылки

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `housingGuaranteeUrl`| `string` / `null` | Ссылка на страницу проекта на сайте КЖК. |
| `housingGuaranteeDocs`| `string` / `null` | Ссылка на документы проекта на сайте КЖК. |

#### Стиль

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `primaryColor` | `string` / `null` | HEX-код основного цвета проекта (напр., `"#0e3737"`). |
| `secondaryColor`| `string` / `null` | HEX-код дополнительного цвета проекта. |

#### Инфраструктура (на карте)

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `placemarks` | `array[object]`| Группы отметок на карте (школы, магазины и т.д.). |
| `projectData`| `object` / `null` | Координаты и главное изображение самого проекта. |

#### Ближайшая инфраструктура

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `locationName`| `string` | Название объекта (напр., `"Shymkent city park"`). |
| `minutesUntil`| `integer` | Время в минутах (пешком или на авто). |
| `icon` | `string` | URL иконки для отображения. |

---

### Пример полного ответа

*В данном примере для наглядности в массиве `data` показан только один объект. Массивы координат (`placemarks`) сокращены.*

```json
{
    "data": [
        {
            "slug": "zhk-prime-park-2",
            "uuid": "c093a188-f5ed-4617-a241-b7c6924b4f1c",
            "class": {
                "code": "business",
                "name": "бизнес"
            },
            "status": {
                "isSale": true,
                "isCompleted": false,
                "hasHousingGuarantee": false,
                "hasDecoration": false
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
                "minAreaSqm": 38.27,
                "minPrice": 18045300
            },
            "media": {
                "coverImage": "[https://api.oks-group.kz/media/images/Prime_Park_2_%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.webp](https://api.oks-group.kz/media/images/Prime_Park_2_%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.webp)",
                "images": [
                    "[https://api.oks-group.kz/media/images/%D0%9F%D1%80%D0%B0%D0%B9%D0%BC_2.webp](https://api.oks-group.kz/media/images/%D0%9F%D1%80%D0%B0%D0%B9%D0%BC_2.webp)",
                    "[https://api.oks-group.kz/media/images/Prime_Park_2_%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_3.webp](https://api.oks-group.kz/media/images/Prime_Park_2_%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_3.webp)",
                    "[https://api.oks-group.kz/media/images/Prime_Park_2_%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_2.webp](https://api.oks-group.kz/media/images/Prime_Park_2_%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_2.webp)",
                    "[https://api.oks-group.kz/media/images/Prime_Park_2_%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_1_uGdLb3E.webp](https://api.oks-group.kz/media/images/Prime_Park_2_%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_1_uGdLb3E.webp)"
                ],
                "panoramicView": "https://api.oks-group.kz/media/images/Tulpar-panorama.jpg",
                "bookletUrl": "[https://api.oks-group.kz/media/macro_projects/booklet/_Prime_Park_2_-_%D0%9B%D0%B8%D1%84%D0%BB%D0%B5%D1%82_%D0%A4%D0%98%D0%9D%D0%90%D0%9B_3_b4s7kPR.pdf](https://api.oks-group.kz/media/macro_projects/booklet/_Prime_Park_2_-_%D0%9B%D0%B8%D1%84%D0%BB%D0%B5%D1%82_%D0%A4%D0%98%D0%9D%D0%90%D0%9B_3_b4s7kPR.pdf)"
            },
            "links": {
                "housingGuaranteeUrl": "https://homeportal.kz/projects/zk-khanzada-bloki-1-2",
                "housingGuaranteeDocs": "https://api.oks-group.kz/media/macro_projects/kzhk_docs/%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE_%D0%BF%D0%BE_%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D1%83_OKS_4_1_d2GwoGV.pdf"
            },
            "style": {
                "primaryColor": "#0e3737",
                "secondaryColor": "#0e3737"
            },
            "infrastructure": {
                "placemarks": [
                    {
                        "title": "Аптеки",
                        "icon": "[https://api.oks-group.kz/media/projects/infra_location/apteka.svg](https://api.oks-group.kz/media/projects/infra_location/apteka.svg)",
                        "placemarks": [
                            [ 42.382121, 69.629821 ],
                            [ 42.378971, 69.642588 ]
                        ]
                    },
                    {
                        "title": "Магазины",
                        "icon": "[https://api.oks-group.kz/media/projects/infra_location/shop.svg](https://api.oks-group.kz/media/projects/infra_location/shop.svg)",
                        "placemarks": [
                            [ 42.380383, 69.634754 ],
                            [ 42.379938, 69.638853 ]
                        ]
                    }
                ],
                "projectData": {
                    "titleImage": "[https://api.oks-group.kz/media/images/Prime_Park_2_%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.webp](https://api.oks-group.kz/media/images/Prime_Park_2_%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.webp)",
                    "cords": [
                        42.38922356578563,
                        69.62628422021632
                    ]
                }
            },
            "nearbyInfrastructure": [
                {
                    "locationName": "Shymkent city park",
                    "minutesUntil": 5,
                    "icon": "[https://api.oks-group.kz/media/images/Group_1011.svg](https://api.oks-group.kz/media/images/Group_1011.svg)"
                },
                {
                    "locationName": "Seitzhan school",
                    "minutesUntil": 10,
                    "icon": "[https://api.oks-group.kz/media/images/Group_1011.svg](https://api.oks-group.kz/media/images/Group_1011.svg)"
                },
                {
                    "locationName": "Diamond plaza",
                    "minutesUntil": 15,
                    "icon": "[https://api.oks-group.kz/media/images/Vector7.svg](https://api.oks-group.kz/media/images/Vector7.svg)"
                }
            ]
        }
    ],
    "meta": {
        "totalItems": 1,
        "totalPages": 1,
        "currentPage": 1
    }
}