# React + TypeScript + Vite

# Описание проекта
Приложение Supplies предназначено для управления поставками. Оно позволяет просматривать, добавлять, редактировать и удалять записи о поставках. В приложении также реализован поиск поставок.

Основные компоненты

Запуск проекта в режиме разработки

```
npm run dev

```

Структура проекта

```
src/
├── assets/
│   ├── icons/
│   │   ├── icon-plus.svg
│   │   └── icon-search.svg
│   └── mock-data/
│       └── mock-data.ts
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.css
│   ├── CustomModal/
│   │   ├── CustomModal.tsx
│   │   └── CustomModal.css
│   ├── SearchInput/
│   │   ├── SearchInput.tsx
│   │   └── SearchInput.css
│   ├── Table/
│   │   ├── TableView.tsx
│   │   └── TableView.css
│   └── TextInput/
│       ├── TextInput.tsx
│       └── TextInput.css
├── models/
│   └── models.ts
├── store/
│   ├── supplies/
│   │   ├── supplies.api.ts
│   │   └── supplies.slice.ts
│   └── store.ts
└── pages/
    ├── Supplies/
    │   ├── Supplies.tsx
    │   └── Supplies.css
`
