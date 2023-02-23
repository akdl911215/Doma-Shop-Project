"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WINSTON_MODULE = void 0;
const winston = require("winston");
const nest_winston_1 = require("nest-winston");
exports.WINSTON_MODULE = {
    logger: nest_winston_1.WinstonModule.createLogger({
        transports: [
            new winston.transports.Console({
                level: process.env.NODE_ENV === "production" ? "error" : "silly",
                format: winston.format.combine(winston.format.timestamp({
                    format: new Date().toLocaleString("ko-KR", { hour12: true }),
                }), nest_winston_1.utilities.format.nestLike("PALPALS-LIVEPICKSTAR", {
                    prettyPrint: true,
                })),
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
//# sourceMappingURL=winston.module.js.map