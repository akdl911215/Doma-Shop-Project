import { ConfigModule, ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';

export const s3Factory = {
  imports: [ConfigModule],
  inject: [ConfigService],
  provide: 'S3_BUCKET',
  useFactory: async (configService: ConfigService) => {
    return new S3({
      accessKeyId: configService.get<string>('AWS_S3_AVATAR_ACCESS_KEY_ID'),
      secretAccessKey: configService.get<string>(
        'AWS_S3_AVATAR_SECRET_ACCESS_KEY',
      ),
      region: configService.get<string>('AWS_S3_AVATAR_REGION'),
    });
  },
};
