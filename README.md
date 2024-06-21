# React + TypeScript + Vite

# Описание проекта

Приложение Supplies предназначено для управления поставками. Оно позволяет просматривать, добавлять, редактировать и удалять записи о поставках. В приложении также реализован поиск поставок.

## Установка и запуск

```
npm run dev

```

## Инструменты

React + TS: Основной фреймворк для разработки пользовательского интерфейса.
Redux Toolkit и RTK Query: Для управления состоянием приложения и работы с API.
react-router-dom: Для навигации и управления маршрутами.

### API документация

-GET /supplies: Получить список всех поставок.
-POST /supplies: Создать новую поставку.
-PUT /supplies/:supplyId: Обновить информацию о существующей поставке.
-DELETE /supplies/:supplyId: Удалить существующую поставку.

### Архитектура

src/
├── assets/
│ ├── icons/
│ │ ├── icon-plus.svg
│ │ └── icon-search.svg
├── components/
│ ├── Button/
│ │ ├── Button.tsx
│ │ └── Button.css
│ ├── CustomModal/
│ │ ├── CustomModal.tsx
│ │ └── CustomModal.css
│ ├── SearchInput/
│ │ ├── SearchInput.tsx
│ │ └── SearchInput.css
│ ├── Table/
│ │ ├── TableView.tsx
│ │ └── TableView.css
│ └── TextInput/
│ ├── TextInput.tsx
│ └── TextInput.css
├── models/
│ └── models.ts
├── store/
│ ├── supplies/
│ │ ├── supplies.api.ts
│ │ └── supplies.slice.ts
│ └── store.ts
└── pages/
├── Supplies/
│ ├── Supplies.tsx
│ └── Supplies.css
`
