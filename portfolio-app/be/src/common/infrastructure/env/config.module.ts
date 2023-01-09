import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

export const CONFIG_MODULE = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath:
    process.env.NODE_ENV === 'production'
      ? '.env.production'
      : '.env.development',
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('production', 'development')
      .default('development'),
    PORT: Joi.number().required(),
  }),
});
