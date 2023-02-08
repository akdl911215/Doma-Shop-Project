import { Logger, Module } from "@nestjs/common";
import { PrismaService } from "../common/infrastructures/prisma/prisma.service";
import { TokenService } from "../common/infrastructures/token/token.service";
import { BcriptService } from "../common/infrastructures/bcript/bcript.service";
import { RefreshTokenStrategy } from "../common/infrastructures/token/strategys/refresh.token.strategy";
import { AccessTokenStrategy } from "../common/infrastructures/token/strategys/access.token.strategy";
import { TokenModule } from "../common/infrastructures/token/token.module";
import { BcriptModule } from "../common/infrastructures/bcript/bcript.module";
import { PassportModule } from "@nestjs/passport";
import { UsersWithdrawalUseCase } from "./application/usecase/users.withdrawal.use.case";
import { UsersRegisterUseCase } from "./application/usecase/users.register.use.case";
import { UsersProfileUseCase } from "./application/usecase/users.profile.use.case";
import { UsersLoginUseCase } from "./application/usecase/users.login.use.case";
import { UsersExistsAccountIdUseCase } from "./application/usecase/users.exists.user.id.use.case";
import { UsersExistsNicknameUseCase } from "./application/usecase/users.exists.nickname.use.case";
import { UsersExistsPhoneUseCase } from "./application/usecase/users.exists.phone.use.case";

@Module({
  imports: [PassportModule, BcriptModule, TokenModule],
  controllers: [],
  providers: [
    AccessTokenStrategy,
    RefreshTokenStrategy,
    // infrastructure
    PrismaService,
    BcriptService,
    Logger,
    TokenService,

    // useCase
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
    { provide: "WITHDRAWAL", useClass: UsersWithdrawalRepository },
    { provide: "LOGOUT", useClass: UsersLogoutRepository },
    {
      provide: "EXISTS_ACCOUNT_ID",
      useClass: UsersExistsAccountIdRepository,
    },
    { provide: "EXISTS_PHONE", useClass: UsersExistsPhoneRepository },
    { provide: "EXISTS_ID", useClass: UsersExistsIdRepository },
    { provide: "EXISTS_NICKNAME", useClass: UsersExistsNicknameRepository },
    { provide: "REGISTER", useClass: UsersRegisterRepository },
    { provide: "LOGIN", useClass: UsersLoginRepository },
    // { provide: 'UPDATE', useClass: UsersUpdateRepository },
    { provide: "UPDATE_PASSWORD", useClass: UsersUpdatePasswordRepository },
    { provide: "UPDATE_PHONE", useClass: UsersUpdatePhoneRepository },
    { provide: "UPDATE_NICKNAME", useClass: UsersUpdateNicknameRepository },
    { provide: "UPDATE_ACCOUNT_ID", useClass: UsersUpdateAccountIdRepository },
    { provide: "DELETE", useClass: UsersDeleteRepository },
    { provide: "PROFILE", useClass: UsersProfileRepository },
    {
      provide: "USERS_FIND_BY_ID",
      useClass: UsersFindByIdRepository,
    },
    {
      provide: "REFRESH_TOKEN_RE_ISSUANCE",
      useClass: UsersRefreshTokenReIssuanceRepository,
    },
    {
      provide: "COMPARE_CURRENT_PASSWORD_AND_PASSWORD",
      useClass: UsersCompareCurrentPasswordAndPasswordRepository,
    },
  ],
  exports: [
    {
      provide: "USE_CASE_USERS_FIND_BY_ID",
      useClass: UsersFindByIdUseCase,
    },
    {
      provide: "COMPARE_CURRENT_PASSWORD_AND_PASSWORD",
      useClass: UsersCompareCurrentPasswordAndPasswordRepository,
    },
  ],
})
export class UsersModule {}
