# Этап сборки
FROM node:20-alpine AS builder

WORKDIR /app

# Копирование зависимостей и установка
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Копирование исходных файлов и сборка
COPY . .
RUN npm run build

# Этап продакшн
FROM node:20-alpine AS production

WORKDIR /app

# Копирование всех файлов из этапа сборки
COPY --from=builder /app ./

# Установка только производственных зависимостей
RUN npm install --legacy-peer-deps --only=production

# Открытие порта 3000
EXPOSE 3000

# Запуск приложения в продакшн-режиме
CMD ["npm", "start"]
