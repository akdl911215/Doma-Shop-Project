import { Module } from '@nestjs/common';
import { PrismaService } from '../common/infrastructure/prisma/prisma.service';
import { UsersExitsDomainService } from './domain/service/users.exits.domain.service';
import { HashEncodedService } from './infrastructure/bcrypt/hash.encoded.service';
import { HashDecodedService } from './infrastructure/bcrypt/hash.decoded.service';
import { UsersRegisterController } from './infrastructure/presentation/users.register.controller';
import { UsersDeleteController } from './infrastructure/presentation/users.delete.controller';
import { UsersLoginController } from './infrastructure/presentation/users.login.controller';
import { UsersUpdateController } from './infrastructure/presentation/users.update.controller';
import { TokenModule } from './infrastructure/token/token.module';
import { UsersRegisterRepository } from './infrastructure/repository/users.register.repository';
import { UsersRegisterUseCase } from './application/usecase/users.register.use.case';
import { UsersLoginRepository } from './infrastructure/repository/users.login.repository';
import { UsersUpdateRepository } from './infrastructure/repository/users.update.repository';
import { UsersDeleteRepository } from './infrastructure/repository/users.delete.repository';
import { UsersDeleteUseCase } from './application/usecase/users.delete.use.case';
import { UsersLoginUseCase } from './application/usecase/users.login.use.case';
import { UsersUpdateUseCase } from './application/usecase/users.update.use.case';
import { UsersFindByIdRepository } from './infrastructure/repository/users.find.by.id.repository';
import { AccessTokenStrategy } from './infrastructure/token/strategys/access.token.strategy';
import { UsersExistsAccountIdUseCase } from './application/usecase/users.exists.account.id.use.case';
import { UsersExistsPhoneUseCase } from './application/usecase/users.exists.phone.use.case';
import { UsersExistsAccountIdRepository } from './infrastructure/repository/users.exists.account.id.repository';
import { UsersExistsPhoneRepository } from './infrastructure/repository/users.exists.phone.repository';
import { UsersExistsAccountIdController } from './infrastructure/presentation/users.exists.account.id.controller';
import { UsersExistsPhoneController } from './infrastructure/presentation/users.exists.phone.controller';
import { UsersRefreshTokenReIssuanceController } from './infrastructure/presentation/users.refresh.token.re.issuance.controller';
import { RefreshTokenStrategy } from './infrastructure/token/strategys/refresh.token.strategy';
import { UsersFindByIdUseCase } from './infrastructure/token/application/usecase/users.find.by.id.use.case';
import { UsersProfileController } from './infrastructure/presentation/users.profile.controller';
import { UsersProfileUseCase } from './application/usecase/users.profile.use.case';
import { UsersProfileRepository } from './infrastructure/repository/users.profile.repository';
import { UsersUploadBackgroundRegisterService } from './domain/service/users.upload.background.register.service';
import { UsersUploadBackgroundDeleteService } from './domain/service/users.upload.background.delete.service';
import { UsersUploadProfileRegisterService } from './domain/service/users.upload.profile.register.service';
import { UsersUploadProfileDeleteService } from './domain/service/users.upload.profile.delete.service';
import { UsersUploadBackgroundRegisterController } from './infrastructure/presentation/users.upload.background.register.controller';
import { UsersUploadBackgroundDeleteController } from './infrastructure/presentation/users.upload.background.delete.controller';
import { UsersUploadProfileRegisterController } from './infrastructure/presentation/users.upload.profile.register.controller';
import { UsersUploadProfileDeleteController } from './infrastructure/presentation/users.upload.profile.delete.controller';
import { s3Factory } from '../common/infrastructure/aws/s3/global.S3Factory.module';
import { UsersUploadBackgroundRegisterRepository } from './infrastructure/repository/users.upload.background.register.repository';
import { UsersExistsIdRepository } from './infrastructure/repository/users.exists.id.repository';
import { UsersUploadBackgroundDeleteRepository } from './infrastructure/repository/users.upload.background.delete.repository';
import { UsersUploadProfileRegisterRepository } from './infrastructure/repository/users.upload.profile.register.repository';
import { UsersUploadProfileDeleteRepository } from './infrastructure/repository/users.upload.profile.delete.repository';
import { UsersUploadBackgroundRegisterAwsS3 } from '../common/infrastructure/aws/s3/service/users.upload.background.register.aws.s3';
import { UsersUploadBackgroundDeleteAwsS3 } from '../common/infrastructure/aws/s3/service/users.upload.background.delete.aws.s3';
import { UsersUploadProfileRegisterAwsS3 } from '../common/infrastructure/aws/s3/service/users.upload.profile.register.aws.s3';
import { UsersUploadProfileDeleteAwsS3 } from '../common/infrastructure/aws/s3/service/users.upload.profile.delete.aws.s3';
import { UsersRefreshTokenReIssuanceUseCase } from './application/usecase/users.refresh.token.re.issuance.use.case';
import { UsersRefreshTokenReIssuanceRepository } from './infrastructure/repository/users.refresh.token.re.issuance.repository';

@Module({
  imports: [TokenModule],
  controllers: [
    UsersRegisterController,
    UsersDeleteController,
    UsersProfileController,
    UsersLoginController,
    UsersUpdateController,
    UsersExistsAccountIdController,
    UsersExistsPhoneController,
    UsersRefreshTokenReIssuanceController,
    UsersUploadBackgroundRegisterController,
    UsersUploadBackgroundDeleteController,
    UsersUploadProfileRegisterController,
    UsersUploadProfileDeleteController,
  ],
  providers: [
    AccessTokenStrategy,
    RefreshTokenStrategy,
    // infrastructure
    s3Factory,
    PrismaService,
    { provide: 'HASH_ENCODED', useClass: HashEncodedService },
    { provide: 'HASH_DECODED', useClass: HashDecodedService },
    // S3
    {
      provide: 'S3_BACKGROUND_REGISTER',
      useClass: UsersUploadBackgroundRegisterAwsS3,
    },
    {
      provide: 'S3_BACKGROUND_DELETE',
      useClass: UsersUploadBackgroundDeleteAwsS3,
    },
    {
      provide: 'S3_PROFILE_REGISTER',
      useClass: UsersUploadProfileRegisterAwsS3,
    },
    {
      provide: 'S3_PROFILE_DELETE',
      useClass: UsersUploadProfileDeleteAwsS3,
    },
    // USE_CASE
    { provide: 'USE_CASE_REGISTER', useClass: UsersRegisterUseCase },
    { provide: 'USE_CASE_DELETE', useClass: UsersDeleteUseCase },
    {
      provide: 'USE_CASE_PROFILE',
      useClass: UsersProfileUseCase,
    },
    { provide: 'USE_CASE_LOGIN', useClass: UsersLoginUseCase },
    { provide: 'USE_CASE_UPDATE', useClass: UsersUpdateUseCase },
    {
      provide: 'USE_CASE_USERS_FIND_BY_ID',
      useClass: UsersFindByIdUseCase,
    },
    {
      provide: 'USE_CASE_EXISTS_ACCOUNT_ID',
      useClass: UsersExistsAccountIdUseCase,
    },
    { provide: 'USE_CASE_EXISTS_PHONE', useClass: UsersExistsPhoneUseCase },
    {
      provide: 'USE_CASE_REFRESH_TOKEN_RE_ISSUANCE',
      useClass: UsersRefreshTokenReIssuanceUseCase,
    },
    // SERVICE
    {
      provide: 'SERVICE_BACKGROUND_REGISTER',
      useClass: UsersUploadBackgroundRegisterService,
    },
    {
      provide: 'SERVICE_BACKGROUND_DELETE',
      useClass: UsersUploadBackgroundDeleteService,
    },
    {
      provide: 'SERVICE_PROFILE_REGISTER',
      useClass: UsersUploadProfileRegisterService,
    },
    {
      provide: 'SERVICE_PROFILE_DELETE',
      useClass: UsersUploadProfileDeleteService,
    },
    { provide: 'EXISTS', useClass: UsersExitsDomainService },
    // REPOSITORY
    {
      provide: 'EXISTS_ACCOUNT_ID',
      useClass: UsersExistsAccountIdRepository,
    },
    { provide: 'EXISTS_PHONE', useClass: UsersExistsPhoneRepository },
    { provide: 'EXISTS_ID', useClass: UsersExistsIdRepository },
    { provide: 'REGISTER', useClass: UsersRegisterRepository },
    { provide: 'LOGIN', useClass: UsersLoginRepository },
    { provide: 'UPDATE', useClass: UsersUpdateRepository },
    { provide: 'DELETE', useClass: UsersDeleteRepository },
    { provide: 'PROFILE', useClass: UsersProfileRepository },
    {
      provide: 'USERS_FIND_BY_ID',
      useClass: UsersFindByIdRepository,
    },
    {
      provide: 'BACKGROUND_REGISTER',
      useClass: UsersUploadBackgroundRegisterRepository,
    },
    {
      provide: 'BACKGROUND_DELETE',
      useClass: UsersUploadBackgroundDeleteRepository,
    },
    {
      provide: 'PROFILE_REGISTER',
      useClass: UsersUploadProfileRegisterRepository,
    },
    {
      provide: 'PROFILE_DELETE',
      useClass: UsersUploadProfileDeleteRepository,
    },
    {
      provide: 'REFRESH_TOKEN_RE_ISSUANCE',
      useClass: UsersRefreshTokenReIssuanceRepository,
    },
  ],
  exports: [
    {
      provide: 'USE_CASE_USERS_FIND_BY_ID',
      useClass: UsersFindByIdUseCase,
    },
  ],
})
export class UsersModule {}
