# Бронирования планировки

## Создание брони (Асинхронный)

Чтобы забронировать квартиру (планировку), выполните `POST`-запрос к эндпоинту `/api/v1/service/projects/layouts/book`.

Этот эндпоинт инициирует асинхронный процесс (фоновую задачу) для создания бронирования. В ответ сервер немедленно возвращает информацию о запущенной задаче, а не саму бронь.

### Запрос
`POST /api/v1/service/projects/layouts/book`

### Тело запроса (Request Body)

| Параметр | Тип | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `layoutUuid` | string (uuid) | Да | Уникальный идентификатор квартиры/планировки для бронирования. |
| `phone` | string | Да | Контактный номер телефона клиента (максимум 16 символов). |
| `firstName` | string | Да | Имя клиента (от 1 до 76 символов). |
| `lastName` | string | Да | Фамилия клиента (от 1 до 76 символов). |
| `middleName` | string | Нет | Отчество клиента (если имеется). |
| `reserveDays` | integer | Нет | Количество дней брони. По умолчанию `1`. (Примечание: на данный момент поддерживается только значение `1`). |

### Пример запроса
```bash
curl -X POST "https://banking.oks-group.kz/api/v1/service/projects/layouts/book" \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
           "layoutUuid": "8d1222e4-e78a-4b60-9dbb-7293ce22285d",
           "phone": "+77071234567",
           "firstName": "Иван",
           "lastName": "Иванов",
           "middleName": "Иванович",
           "reserveDays": 1
         }'

```

### Структура ответа (200 Accepted)

В случае успешного запуска задачи, сервер вернет 200 и JSON-объект с идентификатором задачи, ее текущим статусом (pending) и временем создания.

```json
{
    "taskId": "1e36045f-5924-43a7-b199-e71457af0a89",
    "status": "pending",
    "createdAt": "2025-10-28T16:22:42.381514Z"
}
```

## Получение статуса задачи (бронирования)

Для отслеживания состояния асинхронной задачи, запущенной при создании брони, используйте `GET`-запрос к эндпоинту `/api/v1/service/projects/layouts/book/status/{task_id}`.

В качестве path-параметра необходимо передать `taskId`, полученный в ответе на запрос о создании брони.

#### Запрос
```bash
curl -X GET "[https://banking.oks-group.kz/api/v1/service/projects/layouts/book/status/](https://banking.oks-group.kz/api/v1/service/projects/layouts/book/status/){task_id}" \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

- {task_id} (string, required): Идентификатор задачи, полученный при создании брони.

### Структура ответа

Ответ будет содержать актуальный статус задачи (`status`) и, в случае завершения, поле `result`.

### 1. Задача успешно завершена (Completed)

Статус `completed`. Поле `result` содержит идентификаторы, связанные с успешно созданной бронью.

```json
{
    "taskId": "1e36045f-5924-43a7-b199-e71457af0a89",
    "status": "completed",
    "createdAt": "2025-10-28T16:22:42.381514Z",
    "result": {
        "contact_id": 5835313,
        "shows_id": 836603,
        "contact_created": false
    }
}
```

### 2. Задача в процессе выполнения (Processing)

Статус `processing`. Задача все еще выполняется в фоновом режиме. Поле `result` в этом состоянии равно `null`.

```json
{
    "taskId": "1e36045f-5924-43a7-b199-e71457af0a89",
    "status": "processing",
    "createdAt": "2025-10-28T16:22:42.381514Z",
    "result": null
}
```

### 3. Задача завершилась с ошибкой (Failed)

Статус `failed`. Поле `result` содержит объект с описанием причины сбоя.

```json
{
    "taskId": "9ace4f14-363f-48ec-bc4a-7cd594c643be",
    "status": "failed",
    "createdAt": "2025-10-28T17:03:42.670794Z",
    "result": {
        "detail": "Failed to create reservation",
        "api_error": "Property unit is booked by user "
    }
} 
```

## Снятие брони

Для снятия существующей брони с квартиры (планировки) выполните `POST`-запрос к эндпоинту `/api/v1/service/projects/layouts/unbook`.

Снятие брони требует передачи `contact_id` и `shows_id`, полученных в `result` при успешном завершении задачи [Получение статуса задачи](#получение-статуса-задачи-бронирования).

### Запрос
`POST /api/v1/service/projects/layouts/unbook`

### Тело запроса (Request Body)

| Параметр | Тип | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `contact_id` | integer | Да | Идентификатор контакта, связанного с бронью. |
| `shows_id` | integer | Да | Идентификатор показа (сделки), связанного с бронью. |

#### Пример запроса
```bash
curl -X POST "[https://banking.oks-group.kz/api/v1/service/projects/layouts/unbook](https://banking.oks-group.kz/api/v1/service/projects/layouts/unbook)" \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
           "contact_id": 5835313,
           "shows_id": 836603
         }'
```

### Структура ответа

#### 1. Успешное снятие (200 OK)

В случае успешного снятия брони, сервер вернет ответ со статусом 200 OK (тело ответа не определено или пустое).

#### 2. Ошибка при снятии

В случае, если бронь не может быть снята (например, она уже не в том статусе), сервер вернет JSON-объект с описанием ошибки.

```json
{
    "detail": "Failed to remove reservation",
    "api_error": "Сделка не в брони"
}
```