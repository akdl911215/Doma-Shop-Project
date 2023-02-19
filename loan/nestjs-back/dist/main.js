"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./common/exceptions/http.exception.filter");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const winston_module_1 = require("./common/infrastructures/winston/winston.module");
async function bootstrap() {
    const logger = new common_1.Logger();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, winston_module_1.WINSTON_MODULE);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter(logger));
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get("PORT");
    const SERVER_HOST = configService.get("HOST");
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth({ type: "http", scheme: "bearer", bearerFormat: "JWT" }, "access_token")
        .addBearerAuth({ type: "http", scheme: "bearer", bearerFormat: "JWT" }, "refresh_token")
        .setTitle("loan project")
        .setDescription("API description")
        .setVersion("1.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("docs", app, document);
    await app.listen(PORT, () => console.log(`${SERVER_HOST}:${PORT}/docs`));
}
bootstrap().then((res) => console.log("bootstrap start"));
//# sourceMappingURL=main.js.map