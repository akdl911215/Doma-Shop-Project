import { Module } from "@nestjs/common";
import { PrismaService } from "../common/infrastructures/prisma/prisma.service";
import { TokenModule } from "../common/infrastructures/token/token.module";
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
import { AccessTokenStrategy } from "../common/infrastructures/token/strategy/access.token.strategy";
import { RefreshTokenStrategy } from "../common/infrastructures/token/strategy/refresh.token.strategy";
import { UsersFindByIdUseCase } from "../common/infrastructures/token/application/usecase/users.find.by.id.use.case";
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

@Module({
  imports: [TokenModule],
  controllers: [
    UsersRegisterController,
    UsersExistsUserIdController,
    UsersExistsPhoneController,
    UsersExistsNicknameController,
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
    {
      provide: "USE_CASE_PROFILE",
      useClass: UsersProfileUseCase,
    },
    { provide: "USE_CASE_LOGIN", useClass: UsersLoginUseCase },
    // { provide: 'USE_CASE_UPDATE_PHONE', useClass: UsersUpdatePhoneUseCase },
    // {
    //   provide: 'USE_CASE_UPDATE_USER_ID',
    //   useClass: UsersUpdateUserIdUseCase,
    // },
    // {
    //   provide: 'USE_CASE_UPDATE_PASSWORD',
    //   useClass: UsersUpdatePasswordUseCase,
    // },
    // {
    //   provide: 'USE_CASE_UPDATE_NICKNAME',
    //   useClass: UsersUpdateNicknameUseCase,
    // },
    {
      provide: "USE_CASE_EXISTS_USER_ID",
      useClass: UsersExistsUserIdUseCase,
    },
    {
      provide: "USE_CASE_EXISTS_NICKNAME",
      useClass: UsersExistsNicknameUseCase,
    },
    { provide: "USE_CASE_EXISTS_PHONE", useClass: UsersExistsPhoneUseCase },
    // {
    //   provide: 'USE_CASE_REFRESH_TOKEN_RE_ISSUANCE',
    //   useClass: UsersRefreshTokenReIssuanceUseCase,
    // },

    // service
    // { provide: 'EXISTS', useClass: UsersExitsDomainService },
    // { provide: 'SERVICE_LOGOUT', useClass: UsersLogoutService },

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
    { provide: "PROFILE", useClass: UsersProfileRepository },
  ],
  exports: [
    // {
    //   provide: "USE_CASE_USERS_FIND_BY_ID",
    //   useClass: UsersFindByIdUseCase,
    // },
  ],
})
export class UsersModule {}
