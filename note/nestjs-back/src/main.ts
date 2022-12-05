import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger, ValidationPipe } from "@nestjs/common";
import { HttpExceptionFilter } from "./common/exceptions/http.exception.filter";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as winston from "winston";
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from "nest-winston";

const WINSTON_MODULE = {
  logger: WinstonModule.createLogger({
    transports: [
      new winston.transports.Console({
        level: process.env.NODE_ENV === "production" ? "error" : "silly",
        format: winston.format.combine(
          winston.format.timestamp({
            format: new Date().toLocaleString("ko-KR", { hour12: true }),
          }),
          nestWinstonModuleUtilities.format.nestLike("PALPALS-LIVEPICKSTAR", {
            prettyPrint: true,
          })
        ),
      }),
      new winston.transports.File({
        filename: "combined.log",
        level: "info",
      }),
      new winston.transports.File({
        filename: "query.log",
        level: "warn",
      }),
      new winston.transports.File({
        filename: "errors.log",
        level: "error",
      }),
    ],
  }),
};

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, WINSTON_MODULE);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      transformOptions: { enableImplicitConversion: true },
    })
  );
  app.useGlobalFilters(new HttpExceptionFilter(logger));

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>("PORT");

  const config = new DocumentBuilder()
    .addBearerAuth(
      { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      "access_token"
    )
    .addBearerAuth(
      { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      "refresh_token"
    )
    .setTitle("note project")
    .setDescription("The users API description")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  await app.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}/docs`));
}
bootstrap().then((res) => console.log("bootstrap start"));
