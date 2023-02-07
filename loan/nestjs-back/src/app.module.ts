import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";

const CONFIG_MODULE = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development",

  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid("production", "development")
      .default("development"),
    PORT: Joi.number().required(),
    DATABASE_URL: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
    JWT_ACCESS_EXPIRE_IN: Joi.string().required(),
    JWT_REFRESH_EXPIRE_IN: Joi.string().required(),
  }),
});

@Module({
  imports: [CONFIG_MODULE, UsersModule],
})
export class AppModule {}
