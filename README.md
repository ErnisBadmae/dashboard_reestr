## Работа с репозиторием

### Начало работы

node: v14.18.1
Cсылка для инсталяции: https://nodejs.org/en/download/

После клонирования репозитория запустите следующую команду из корня проекта:

```
npm install
```

### Установка пакета для конкретного воркспейса

Чтобы установить пакет для использования в конкретном воркспейсе используйте команду

```
npm i $DEPENDENCY_NAME$ -w
где:
- `$DEPENDENCY_NAME$` - название npm-пакета

Используемые пакеты в проекте:

    "@ant-design/icons": "^4.7.0",
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mui/icons-material": "^5.6.2",
    "@mui/material": "^5.6.3",
    "@reduxjs/toolkit": "^1.8.1",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.1.1",
    "@testing-library/user-event": "^13.5.0",
    "antd": "^4.20.2",
    "axios": "^0.27.2",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-redux": "^8.0.1",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux-logger": "^3.0.6",
    "sass": "^1.51.0",


Важно запускать эту команду, находясь в корне проекта.


## Разработка


Для запуска сервера разработки фронтэнда используйте из корня:

```

npm run start

```

```
