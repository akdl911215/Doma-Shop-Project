"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG_MODULE = void 0;
const config_1 = require("@nestjs/config");
const Joi = require("joi");
exports.CONFIG_MODULE = config_1.ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: process.env.NODE_ENV === "production"
        ? ".env.production"
        : ".env.development",
    validationSchema: Joi.object({
        NODE_ENV: Joi.string()
            .valid("production", "development")
            .default("development"),
        DATABASE_URL: Joi.string().required(),
        PORT: Joi.number().required(),
        HOST: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_ACCESS_SECRET: Joi.string().required(),
        JWT_REFRESH_SECRET: Joi.string().required(),
        JWT_ACCESS_EXPIRE_IN: Joi.string().required(),
        JWT_REFRESH_EXPIRE_IN: Joi.string().required(),
        BCRIPT_SOLT_NUMBER: Joi.number().required(),
    }),
});
//# sourceMappingURL=config.module.js.map