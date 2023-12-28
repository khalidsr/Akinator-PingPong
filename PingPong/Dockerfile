
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN  npm install @mui/material @emotion/react

COPY . .

EXPOSE 5173

RUN npm run build

CMD [ "npm", "run", "dev" ]


