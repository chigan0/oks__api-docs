# Ресурс: Квартиры (Layouts)

Этот документ описывает подробную структуру данных для объекта "Квартира" (или "Планировка"). Эта структура используется во всех эндпоинтах, возвращающих данные о квартирах, включая список (`/service/projects/layouts`) и получение по UUID (`/service/projects/layouts/{layout_uuid}`).

## Структура объекта "Квартира"

Основной объект, описывающий квартиру, сгруппированный по логическим блокам для удобства.

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `uuid` | `UUID` | Уникальный идентификатор квартиры. |
| `projectUuid` | `UUID` | UUID проекта, к которому относится квартира. |
| `core` | `object` | **(Блок)** Основные параметры: цена, площадь, комнаты. |
| `geo` | `object` | **(Блок)** Гео-данные: подъезд, номер квартиры. |
| `status` | `object` | **(Блок)** Статусы: опубликовано, продано, в рассрочку. |
| `details` | `object` | **(Блок)** Дополнительные технические детали. |
| `media` | `object` | **(Блок)** Медиа-ссылки: изображения, PDF. |
| `company` | `object` | **(Блок)** Информация о застройщике и продавце. |
| `area_breakdown`| `object` | **(Блок)** Детализация площади (кухня, комнаты). |

---

### Блок: `core`
Основные параметры, определяющие квартиру.

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `title` | `string` | Маркетинговый заголовок (напр., `"3 комнатная, 82.31 м²"`). |
| `area` | `float` | Общая площадь в м². |
| `price` | `number` | Полная стоимость объекта (в тенге). |
| `pricePerMeter` | `number` | Стоимость за квадратный метр. |
| `roomCount` | `integer` | Количество комнат. |
| `floor` | `integer` | Этаж расположения квартиры. |
| `totalFloors` | `integer` | Общая этажность дома. |
| `housingClass` | `string` | Класс жилья (напр., `"comfort"`). |

---

### Блок: `geo`
Расположение квартиры в здании.

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `entrance` | `integer` / `null` | Номер подъезда. |
| `flatNumber` | `string` / `null` | Номер квартиры. |
| `houseNumber` | `string` / `null` | Номер дома (строения). |

---

### Блок: `status`
Набор логических статусов квартиры.

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `isPublished` | `boolean` | `true`, если опубликовано и видно. |
| `isPurchase` | `boolean` | `true`, если доступно для покупки. |
| `isReserved` | `boolean` | `true`, если зарезервировано. |
| `isSold` | `boolean` | `true`, если продано. |
| `hasInstallmentPlan` | `boolean` | `true`, если доступна рассрочка. |

---

### Блок: `details`
Дополнительные технические характеристики.

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `levelsCount` | `integer` / `null` | Количество уровней в квартире (обычно `1`). |
| `buildState` | `string` / `null` | Стадия строительства (напр., `"project"`). |
| `giveupType` | `string` / `null` | Внутренний код типа сдачи (напр., `"12713"`). |
| `planType` | `string` / `null` | Описание типа планировки (напр., `"С перегородками"`). |
| `planTypeCode` | `string` / `null` | Код типа планировки (напр., `"walls"` или `"free"`). |
| `planName` | `string` / `null` | Внутреннее/техническое название планировки. |
| `layoutType` | `string` / `null` | Категория недвижимости (напр., `"apartment"`, `"commercial"`). |
| `titleByCategory` | `string` / `null` | Заголовок, сгенерированный по категории. |

---

### Блок: `media`
Ссылки на медиа-файлы.

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `titleImage` | `string` / `null` | URL изображения планировки. |
| `printLayout` | `string` / `null` | URL для скачивания PDF-версии планировки. |
| `floorPlan` | `string` / `null` | URL изображения плана этажа (`null`, если нет). |

---

### Блок: `company`
Информация о продавце.

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `companyName` | `string` / `null` | Название компании-застройщика. |
| `sellerName` | `string` / `null` | Название компании-продавца. |

---

### Блок: `area_breakdown`
Детализация площади по комнатам (может быть не заполнена).

| Поле | Тип | Описание |
| :--- | :--- | :--- |
| `kitchen` | `float` / `null` | Площадь кухни, м². |
| `bathroom` | `float` / `null` | Площадь санузла, м². |
| `hallway` | `float` / `null` | Площадь коридора/прихожей, м². |
| `rooms` | `object` | Объект (словарь) с площадями комнат. Ключами являются `area_room_N` (комнаты) и `area_bedroom_N` (спальни). |

---

### Пример ответа (из списка `/service/projects/layouts`)

Ниже приведен пример ответа от API. В массиве `data` для наглядности показан только один объект квартиры.

```json
{
    "data": [
        {
            "uuid": "9345ef50-c2bd-45eb-8daa-4e127812bfbb",
            "projectUuid": "3c3a855a-51a5-41b3-94e8-dcbf6dfcc12a",
            "core": {
                "title": "3 комнатная, 82.31 м²",
                "area": 82.31,
                "price": 31277800.0,
                "pricePerMeter": 380000.0,
                "roomCount": 3,
                "floor": 4,
                "totalFloors": 5,
                "housingClass": "comfort"
            },
            "geo": {
                "entrance": 1,
                "flatNumber": "23",
                "houseNumber": "241А"
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
                "buildState": "project",
                "giveupType": "12713",
                "planType": "С перегородками",
                "planTypeCode": "walls",
                "planName": "1-1_5-82,31",
                "layoutType": "apartment",
                "titleByCategory": "3 комнатная, 82.31 м²"
            },
            "media": {
                "titleImage": "https://api.oks-group.kz/media/layout_images/1-1_5-8231.png",
                "printLayout": "https://api.oks-group.kz/ru/layout/pdf/9345ef50-c2bd-45eb-8daa-4e127812bfbb/",
                "floorPlan": "https://api.oks-group.kz/media/layout_images/podezd_2._yetazh_7.png"
            },
            "company": {
                "companyName": "OKS Development",
                "sellerName": "ТОО «Asar house»"
            },
			"area_breakdown": {
				"kitchen": 12.5,
				"bathroom": 4.8,
				"hallway": 6.2,
				"rooms": {
					"area_room_1": 22.0,
					"area_bedroom_1": 16.5,
					"area_bedroom_2": 14.0
				}
			}
        }
    ],
    "meta": {
        "totalItems": 33,
        "totalPages": 2,
        "currentPage": 2
		// ... и т.д
    }
}