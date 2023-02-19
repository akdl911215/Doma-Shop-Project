"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordCheckingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let PasswordCheckingInterceptor = class PasswordCheckingInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest().body;
        if ("confirmPassword" in request) {
            if (request.password === request.confirmPassword) {
                console.log("check");
                delete request["confirmPassword"];
                delete request["currentPassword"];
            }
            else {
                throw new common_1.BadRequestException("password !== confirmPassword");
            }
        }
        return next.handle().pipe((0, operators_1.tap)((data) => delete data.response.password));
    }
};
PasswordCheckingInterceptor = __decorate([
    (0, common_1.Injectable)()
], PasswordCheckingInterceptor);
exports.PasswordCheckingInterceptor = PasswordCheckingInterceptor;
//# sourceMappingURL=password.checking.interceptor.js.map