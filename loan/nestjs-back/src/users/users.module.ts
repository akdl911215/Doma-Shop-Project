import { Module } from "@nestjs/common";
import { UsersUpdateNicknameController } from "./infrastructure/presentation/users.update.nickname.controller";
import { PrismaService } from "../common/infrastructures/prisma/prisma.service";
import { TokenModule } from "./infrastructure/token/token.module";
import { UsersWithdrawalUseCase } from "./application/usecase/users.withdrawal.use.case";
import { UsersRegisterUseCase } from "./application/usecase/users.register.use.case";
import { UsersProfileUseCase } from "./application/usecase/users.profile.use.case";
import { UsersLoginUseCase } from "./application/usecase/users.login.use.case";
import { UsersExistsUserIdUseCase } from "./application/usecase/users.exists.user.id.use.case";
import { UsersExistsNicknameUseCase } from "./application/usecase/users.exists.nickname.use.case";
import { UsersExistsPhoneUseCase } from "./application/usecase/users.exists.phone.use.case";
import { UsersWithdrawalRepository } from "./infrastructure/repository/users.withdrawal.repository";
import { UsersLoginRepository } from "./infrastructure/repository/users.login.repository";
import { UsersRegisterRepository } from "./infrastructure/repository/users.register.repository";
import { UsersUpdatePasswordRepository } from "./infrastructure/repository/users.update.password.repository";
import { UsersUpdatePhoneRepository } from "./infrastructure/repository/users.update.phone.repository";
import { UsersUpdateNicknameRepository } from "./infrastructure/repository/users.update.nickname.repository";
import { UsersProfileRepository } from "./infrastructure/repository/users.profile.repository";
import { AccessTokenStrategy } from "./infrastructure/token/strategy/access.token.strategy";
import { RefreshTokenStrategy } from "./infrastructure/token/strategy/refresh.token.strategy";
import { UsersFindByIdUseCase } from "./infrastructure/token/application/usecase/users.find.by.id.use.case";
import { UsersFindByIdRepository } from "./infrastructure/repository/users.find.by.id.repository";
import { UsersExistsUserIdRepository } from "./infrastructure/repository/users.exists.user.id.repository";
import { UsersExistsPhoneRepository } from "./infrastructure/repository/users.exists.phone.repository";
import { UsersExistsNicknameRepository } from "./infrastructure/repository/users.exists.nickname.repository";
import { HashDecodedService } from "./infrastructure/bcrypt/hash.decoded.service";
import { HashEncodedService } from "./infrastructure/bcrypt/hash.encoded.service";
import { UsersRegisterController } from "./infrastructure/presentation/users.register.controller";
import { UsersExistsUserIdController } from "./infrastructure/presentation/users.exists.user.id.controller";
import { UsersExistsPhoneController } from "./infrastructure/presentation/users.exists.phone.controller";
import { UsersExistsNicknameController } from "./infrastructure/presentation/users.exists.nickname.controller";
import { UsersUpdatePhoneUseCase } from "./application/usecase/users.update.phone.use.case";
import { UsersUpdateUserIdUseCase } from "./application/usecase/users.update.user.id.use.case";
import { UsersUpdatePasswordUseCase } from "./application/usecase/users.update.password.use.case";
import { UsersUpdateNicknameUseCase } from "./application/usecase/users.update.nickname.use.case";
import { UsersUpdateNameUseCase } from "./application/usecase/users.update.name.use.case";
import { UsersUpdateAddressUseCase } from "./application/usecase/users.update.address.use.case";
import { UsersUpdateUserIdRepository } from "./infrastructure/repository/users.update.user.id.repository";
import { UsersUpdateNameRepository } from "./infrastructure/repository/users.update.name.repository";
import { UsersUpdateAddressRepository } from "./infrastructure/repository/users.update.address.repository";
import { UsersLogoutRepository } from "./infrastructure/repository/users.logout.repository";
import { UsersLogoutService } from "./domain/service/users.logout.service";
import { UsersLoginController } from "./infrastructure/presentation/users.login.controller";
import { UsersLogoutController } from "./infrastructure/presentation/users.logout.controller";
import { UsersUpdateAddressController } from "./infrastructure/presentation/users.update.address.controller";
import { UsersUpdateNameController } from "./infrastructure/presentation/users.update.name.controller";
import { UsersUpdatePasswordController } from "./infrastructure/presentation/users.update.password.controller";
import { UsersUpdatePhoneController } from "./infrastructure/presentation/users.update.phone.controller";
import { UsersUpdateUserIdController } from "./infrastructure/presentation/users.update.user.id.controller";
import { UsersWithdrawalController } from "./infrastructure/presentation/users.withdrawal.controller";
import { UsersDeleteUseCase } from "./application/usecase/users.delete.use.case";
import { UsersDeleteRepository } from "./infrastructure/repository/users.delete.repository";
import { UsersDeleteController } from "./infrastructure/presentation/users.delete.controller";
import { UsersProfileController } from "./infrastructure/presentation/users.profile.controller";

@Module({
  imports: [TokenModule],
  controllers: [
    UsersRegisterController,
    UsersLoginController,
    UsersProfileController,
    UsersLogoutController,
    UsersExistsUserIdController,
    UsersExistsPhoneController,
    UsersExistsNicknameController,
    UsersDeleteController,
    UsersUpdateAddressController,
    UsersUpdateNameController,
    UsersUpdatePasswordController,
    UsersUpdatePhoneController,
    UsersUpdateUserIdController,
    UsersWithdrawalController,
    UsersUpdateNicknameController,
  ],
  providers: [
    AccessTokenStrategy,
    RefreshTokenStrategy,

    // infrastructure
    PrismaService,
    { provide: "HASH_ENCODED", useClass: HashEncodedService },
    { provide: "HASH_DECODED", useClass: HashDecodedService },

    // useCase
    {
      provide: "USE_CASE_USERS_FIND_BY_ID",
      useClass: UsersFindByIdUseCase,
    },
    { provide: "USE_CASE_WITHDRAWAL", useClass: UsersWithdrawalUseCase },
    { provide: "USE_CASE_REGISTER", useClass: UsersRegisterUseCase },
    { provide: "USE_CASE_PROFILE", useClass: UsersProfileUseCase },
    { provide: "USE_CASE_LOGIN", useClass: UsersLoginUseCase },
    { provide: "USE_CASE_USER_ID", useClass: UsersUpdateUserIdUseCase },
    { provide: "USE_CASE_DELETE", useClass: UsersDeleteUseCase },
    { provide: "USE_CASE_UPDATE_PHONE", useClass: UsersUpdatePhoneUseCase },
    {
      provide: "USE_CASE_UPDATE_USER_ID",
      useClass: UsersUpdateUserIdUseCase,
    },
    {
      provide: "USE_CASE_UPDATE_PASSWORD",
      useClass: UsersUpdatePasswordUseCase,
    },
    {
      provide: "USE_CASE_UPDATE_NICKNAME",
      useClass: UsersUpdateNicknameUseCase,
    },
    {
      provide: "USE_CASE_UPDATE_NAME",
      useClass: UsersUpdateNameUseCase,
    },
    {
      provide: "USE_CASE_UPDATE_ADDRESS",
      useClass: UsersUpdateAddressUseCase,
    },
    {
      provide: "USE_CASE_UPDATE_PHONE",
      useClass: UsersUpdatePhoneUseCase,
    },
    {
      provide: "USE_CASE_EXISTS_USER_ID",
      useClass: UsersExistsUserIdUseCase,
    },
    {
      provide: "USE_CASE_EXISTS_NICKNAME",
      useClass: UsersExistsNicknameUseCase,
    },
    { provide: "USE_CASE_EXISTS_PHONE", useClass: UsersExistsPhoneUseCase },

    // service
    { provide: "SERVICE_LOGOUT", useClass: UsersLogoutService },

    // repository
    { provide: "EXISTS_NICKNAME", useClass: UsersExistsNicknameRepository },
    { provide: "EXISTS_PHONE", useClass: UsersExistsPhoneRepository },
    {
      provide: "EXISTS_USER_ID",
      useClass: UsersExistsUserIdRepository,
    },
    {
      provide: "USERS_FIND_BY_ID",
      useClass: UsersFindByIdRepository,
    },
    { provide: "WITHDRAWAL", useClass: UsersWithdrawalRepository },
    { provide: "REGISTER", useClass: UsersRegisterRepository },
    { provide: "LOGIN", useClass: UsersLoginRepository },
    { provide: "UPDATE_PASSWORD", useClass: UsersUpdatePasswordRepository },
    { provide: "UPDATE_PHONE", useClass: UsersUpdatePhoneRepository },
    { provide: "UPDATE_NICKNAME", useClass: UsersUpdateNicknameRepository },
    { provide: "UPDATE_USER_ID", useClass: UsersUpdateUserIdRepository },
    { provide: "UPDATE_NAME", useClass: UsersUpdateNameRepository },
    { provide: "UPDATE_ADDRESS", useClass: UsersUpdateAddressRepository },
    { provide: "PROFILE", useClass: UsersProfileRepository },
    { provide: "LOGOUT", useClass: UsersLogoutRepository },
    { provide: "DELETE", useClass: UsersDeleteRepository },
  ],
  exports: [
    {
      provide: "USE_CASE_USERS_FIND_BY_ID",
      useClass: UsersFindByIdUseCase,
    },
  ],
})
export class UsersModule {}
