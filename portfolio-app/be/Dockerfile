FROM node:16.15.1-alpine

WORKDIR /app/server

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install -g dotenv-cli
RUN npm i -g prisma
RUN npm install

COPY ./ ./

ENV HOST=3.38.236.42
ENV PORT=4545
ENV DATABASE_URL=pos```tgresql://palpals:vkfvkfwm1379!@psqldb:5432/livepickstardev
ENV JWT_SECRET=3A8DDECEE3F4B5212FF2C31D7DECA
ENV JWT_ACCESS_SECRET=3DCCB595AE63E47BF5C56B56B3FA7
ENV JWT_REFRESH_SECRET=BDCAF1EA959E775EB86958FEB515D
ENV JWT_ACCESS_EXPIRE_IN=60s
ENV JWT_REFRESH_EXPIRE_IN=7d

ENV AWS_S3_AVATAR_ACCESS_KEY_ID=AKIA6PONQJXFX2RSLIO3
ENV AWS_S3_AVATAR_SECRET_ACCESS_KEY=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
ENV AWS_S3_AVATAR_REGION=ap-northeast-2
ENV AWS_S3_BUCKET_NAME=livepickstar-avatar
ENV AWS_S3_ACL=public-read

RUN rm -rf ./dist || true
RUN prisma generate
RUN npm run build

CMD ["npm", "run", "start:prod"]