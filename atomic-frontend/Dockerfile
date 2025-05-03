# Этап сборки
FROM node:20-slim AS builder

WORKDIR /app

# Комируем зависимости и устанавливаем
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Копируем исходные файлы и сборка
COPY . .
RUN npm run build

# Этап production
FROM node:20-alpine AS production

WORKDIR /app

# Копируем все файлы из этапа сборки
COPY --from=builder /app ./

# Устанавливаем только производственные зависимости
RUN npm install --legacy-peer-deps --only=production

# Открываем порт 3000
EXPOSE 3000

# Запускаем приложение в продакшн-режиме
CMD ["npm", "start"]
