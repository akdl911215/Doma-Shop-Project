"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const users_update_nickname_controller_1 = require("./infrastructure/presentation/users.update.nickname.controller");
const prisma_service_1 = require("../common/infrastructures/prisma/prisma.service");
const token_module_1 = require("../common/infrastructures/token/token.module");
const users_withdrawal_use_case_1 = require("./application/usecase/users.withdrawal.use.case");
const users_register_use_case_1 = require("./application/usecase/users.register.use.case");
const users_profile_use_case_1 = require("./application/usecase/users.profile.use.case");
const users_login_use_case_1 = require("./application/usecase/users.login.use.case");
const users_exists_user_id_use_case_1 = require("./application/usecase/users.exists.user.id.use.case");
const users_exists_nickname_use_case_1 = require("./application/usecase/users.exists.nickname.use.case");
const users_exists_phone_use_case_1 = require("./application/usecase/users.exists.phone.use.case");
const users_withdrawal_repository_1 = require("./infrastructure/repository/users.withdrawal.repository");
const users_login_repository_1 = require("./infrastructure/repository/users.login.repository");
const users_register_repository_1 = require("./infrastructure/repository/users.register.repository");
const users_update_password_repository_1 = require("./infrastructure/repository/users.update.password.repository");
const users_update_phone_repository_1 = require("./infrastructure/repository/users.update.phone.repository");
const users_update_nickname_repository_1 = require("./infrastructure/repository/users.update.nickname.repository");
const users_profile_repository_1 = require("./infrastructure/repository/users.profile.repository");
const access_token_strategy_1 = require("../common/infrastructures/token/strategy/access.token.strategy");
const refresh_token_strategy_1 = require("../common/infrastructures/token/strategy/refresh.token.strategy");
const users_find_by_id_use_case_1 = require("../common/infrastructures/token/application/usecase/users.find.by.id.use.case");
const users_find_by_id_repository_1 = require("./infrastructure/repository/users.find.by.id.repository");
const users_exists_user_id_repository_1 = require("./infrastructure/repository/users.exists.user.id.repository");
const users_exists_phone_repository_1 = require("./infrastructure/repository/users.exists.phone.repository");
const users_exists_nickname_repository_1 = require("./infrastructure/repository/users.exists.nickname.repository");
const hash_decoded_service_1 = require("./infrastructure/bcrypt/hash.decoded.service");
const hash_encoded_service_1 = require("./infrastructure/bcrypt/hash.encoded.service");
const users_register_controller_1 = require("./infrastructure/presentation/users.register.controller");
const users_exists_user_id_controller_1 = require("./infrastructure/presentation/users.exists.user.id.controller");
const users_exists_phone_controller_1 = require("./infrastructure/presentation/users.exists.phone.controller");
const users_exists_nickname_controller_1 = require("./infrastructure/presentation/users.exists.nickname.controller");
const users_update_phone_use_case_1 = require("./application/usecase/users.update.phone.use.case");
const users_update_user_id_use_case_1 = require("./application/usecase/users.update.user.id.use.case");
const users_update_password_use_case_1 = require("./application/usecase/users.update.password.use.case");
const users_update_nickname_use_case_1 = require("./application/usecase/users.update.nickname.use.case");
const users_update_name_use_case_1 = require("./application/usecase/users.update.name.use.case");
const users_update_address_use_case_1 = require("./application/usecase/users.update.address.use.case");
const users_update_user_id_repository_1 = require("./infrastructure/repository/users.update.user.id.repository");
const users_update_name_repository_1 = require("./infrastructure/repository/users.update.name.repository");
const users_update_address_repository_1 = require("./infrastructure/repository/users.update.address.repository");
const users_logout_repository_1 = require("./infrastructure/repository/users.logout.repository");
const users_logout_service_1 = require("./domain/service/users.logout.service");
const users_login_controller_1 = require("./infrastructure/presentation/users.login.controller");
const users_logout_controller_1 = require("./infrastructure/presentation/users.logout.controller");
const users_update_address_controller_1 = require("./infrastructure/presentation/users.update.address.controller");
const users_update_name_controller_1 = require("./infrastructure/presentation/users.update.name.controller");
const users_update_password_controller_1 = require("./infrastructure/presentation/users.update.password.controller");
const users_update_phone_controller_1 = require("./infrastructure/presentation/users.update.phone.controller");
const users_update_user_id_controller_1 = require("./infrastructure/presentation/users.update.user.id.controller");
const users_withdrawal_controller_1 = require("./infrastructure/presentation/users.withdrawal.controller");
const common_1 = require("@nestjs/common");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [token_module_1.TokenModule],
        controllers: [
            users_register_controller_1.UsersRegisterController,
            users_exists_user_id_controller_1.UsersExistsUserIdController,
            users_exists_phone_controller_1.UsersExistsPhoneController,
            users_exists_nickname_controller_1.UsersExistsNicknameController,
            users_login_controller_1.UsersLoginController,
            users_logout_controller_1.UsersLogoutController,
            users_update_address_controller_1.UsersUpdateAddressController,
            users_update_name_controller_1.UsersUpdateNameController,
            users_update_password_controller_1.UsersUpdatePasswordController,
            users_update_phone_controller_1.UsersUpdatePhoneController,
            users_update_user_id_controller_1.UsersUpdateUserIdController,
            users_withdrawal_controller_1.UsersWithdrawalController,
            users_update_nickname_controller_1.UsersUpdateNicknameController,
        ],
        providers: [
            access_token_strategy_1.AccessTokenStrategy,
            refresh_token_strategy_1.RefreshTokenStrategy,
            prisma_service_1.PrismaService,
            { provide: "HASH_ENCODED", useClass: hash_encoded_service_1.HashEncodedService },
            { provide: "HASH_DECODED", useClass: hash_decoded_service_1.HashDecodedService },
            {
                provide: "USE_CASE_USERS_FIND_BY_ID",
                useClass: users_find_by_id_use_case_1.UsersFindByIdUseCase,
            },
            { provide: "USE_CASE_WITHDRAWAL", useClass: users_withdrawal_use_case_1.UsersWithdrawalUseCase },
            { provide: "USE_CASE_REGISTER", useClass: users_register_use_case_1.UsersRegisterUseCase },
            { provide: "USE_CASE_PROFILE", useClass: users_profile_use_case_1.UsersProfileUseCase },
            { provide: "USE_CASE_LOGIN", useClass: users_login_use_case_1.UsersLoginUseCase },
            { provide: "USE_CASE_USER_ID", useClass: users_update_user_id_use_case_1.UsersUpdateUserIdUseCase },
            { provide: "USE_CASE_UPDATE_PHONE", useClass: users_update_phone_use_case_1.UsersUpdatePhoneUseCase },
            {
                provide: "USE_CASE_UPDATE_USER_ID",
                useClass: users_update_user_id_use_case_1.UsersUpdateUserIdUseCase,
            },
            {
                provide: "USE_CASE_UPDATE_PASSWORD",
                useClass: users_update_password_use_case_1.UsersUpdatePasswordUseCase,
            },
            {
                provide: "USE_CASE_UPDATE_NICKNAME",
                useClass: users_update_nickname_use_case_1.UsersUpdateNicknameUseCase,
            },
            {
                provide: "USE_CASE_UPDATE_NAME",
                useClass: users_update_name_use_case_1.UsersUpdateNameUseCase,
            },
            {
                provide: "USE_CASE_UPDATE_ADDRESS",
                useClass: users_update_address_use_case_1.UsersUpdateAddressUseCase,
            },
            {
                provide: "USE_CASE_UPDATE_PHONE",
                useClass: users_update_phone_use_case_1.UsersUpdatePhoneUseCase,
            },
            {
                provide: "USE_CASE_EXISTS_USER_ID",
                useClass: users_exists_user_id_use_case_1.UsersExistsUserIdUseCase,
            },
            {
                provide: "USE_CASE_EXISTS_NICKNAME",
                useClass: users_exists_nickname_use_case_1.UsersExistsNicknameUseCase,
            },
            { provide: "USE_CASE_EXISTS_PHONE", useClass: users_exists_phone_use_case_1.UsersExistsPhoneUseCase },
            { provide: "SERVICE_LOGOUT", useClass: users_logout_service_1.UsersLogoutService },
            { provide: "EXISTS_NICKNAME", useClass: users_exists_nickname_repository_1.UsersExistsNicknameRepository },
            { provide: "EXISTS_PHONE", useClass: users_exists_phone_repository_1.UsersExistsPhoneRepository },
            {
                provide: "EXISTS_USER_ID",
                useClass: users_exists_user_id_repository_1.UsersExistsUserIdRepository,
            },
            {
                provide: "USERS_FIND_BY_ID",
                useClass: users_find_by_id_repository_1.UsersFindByIdRepository,
            },
            { provide: "WITHDRAWAL", useClass: users_withdrawal_repository_1.UsersWithdrawalRepository },
            { provide: "REGISTER", useClass: users_register_repository_1.UsersRegisterRepository },
            { provide: "LOGIN", useClass: users_login_repository_1.UsersLoginRepository },
            { provide: "UPDATE_PASSWORD", useClass: users_update_password_repository_1.UsersUpdatePasswordRepository },
            { provide: "UPDATE_PHONE", useClass: users_update_phone_repository_1.UsersUpdatePhoneRepository },
            { provide: "UPDATE_NICKNAME", useClass: users_update_nickname_repository_1.UsersUpdateNicknameRepository },
            { provide: "UPDATE_USER_ID", useClass: users_update_user_id_repository_1.UsersUpdateUserIdRepository },
            { provide: "UPDATE_NAME", useClass: users_update_name_repository_1.UsersUpdateNameRepository },
            { provide: "UPDATE_ADDRESS", useClass: users_update_address_repository_1.UsersUpdateAddressRepository },
            { provide: "PROFILE", useClass: users_profile_repository_1.UsersProfileRepository },
            { provide: "LOGOUT", useClass: users_logout_repository_1.UsersLogoutRepository },
        ],
        exports: [
            {
                provide: "USE_CASE_USERS_FIND_BY_ID",
                useClass: users_find_by_id_use_case_1.UsersFindByIdUseCase,
            },
        ],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map