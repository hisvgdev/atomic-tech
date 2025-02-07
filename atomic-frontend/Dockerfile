FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

RUN npm run build


FROM node:20-alpine AS production

WORKDIR /app

COPY --from=builder /app ./

RUN npm install --legacy-peer-deps --only=production

EXPOSE 3000

CMD ["npm", "start"]
