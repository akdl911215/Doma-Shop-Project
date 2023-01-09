import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { UsersExistsAccountIdAdaptorInputDto } from '../src/users/inbound/dtos/users.exists.account.id.adaptor.input.dto';
import { UsersExistsPhoneAdaptorInputDto } from '../src/users/inbound/dtos/users.exists.phone.adaptor.input.dto';
import { UsersRegisterAdaptorInputDto } from '../src/users/inbound/dtos/users.register.adaptor.input.dto';
import { UsersLoginAdaptorInputDto } from '../src/users/inbound/dtos/users.login.adaptor.input.dto';
import { NO_MATCH_PASSWORD } from '../src/common/constants/http/errors/400';
import { UsersDeleteAdaptorInputDto } from '../src/users/inbound/dtos/users.delete.adaptor.input.dto';
import { NOTFOUND_USER } from '../src/common/constants/http/errors/404';
import { UsersUpdateAdaptorInputDto } from '../src/users/inbound/dtos/users.update.adaptor.input.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let accessToken: string;
  let primaryKey: number;
  let userModel = {};

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await console.log('user test end');
  });

  describe('users module', () => {
    describe('users register', () => {
      describe('should success check this two fields account id and phone number', () => {
        it('should success pass to accountId', async () => {
          const url = '/users/exists/accountId';
          const dto: UsersExistsAccountIdAdaptorInputDto = {
            accountId: 'mad',
          };
          const response = await request(app.getHttpServer())
            .get(url)
            .send(dto)
            .expect(404);
          expect(response.body).toEqual({
            error: 'Not Found',
            message: 'Cannot GET /users/exists/accountId',
            statusCode: 404,
          });
        });
        it('should success pass to phone number', async () => {
          const url = '/users/exists/phone';
          const dto: UsersExistsPhoneAdaptorInputDto = {
            phone: '01012341234',
          };
          const response = await request(app.getHttpServer())
            .get(url)
            .send(dto)
            .expect(404);
          expect(response.body).toEqual({
            statusCode: 404,
            message: 'Cannot GET /users/exists/phone',
            error: 'Not Found',
          });
        });
      });

      describe('should register checking', () => {
        const url = '/users/register';
        it('should failed check the password', async () => {
          const dto: UsersRegisterAdaptorInputDto = {
            accountId: 'mad',
            phone: '01012341234',
            password: 'qwe123123!',
            confirmPassword: 'qwe123123!!',
            isMarketing: true,
          };
          const response = await request(app.getHttpServer())
            .post(url)
            .send(dto)
            .expect(400);
          expect(response.body).toEqual({
            statusCode: 400,
            message: 'password !== confirmPassword',
            error: 'Bad Request',
          });
        });
        it('should success register', async () => {
          const dto: UsersRegisterAdaptorInputDto = {
            accountId: 'mad',
            phone: '01012341234',
            password: 'qwe123123!',
            confirmPassword: 'qwe123123!',
            isMarketing: true,
          };
          const response = await request(app.getHttpServer())
            .post(url)
            .send(dto)
            .expect(201);
          expect(response.body).toEqual(expect.any(Object));
        });
      });
    });

    describe('users login', () => {
      const url = '/users/login';
      let dto: UsersLoginAdaptorInputDto;
      describe('should failed login fields', () => {
        it('should failed accountId', async () => {
          dto = {
            accountId: 'mad99',
            password: 'qwe123123!',
          };
          const response = await request(app.getHttpServer())
            .post(url)
            .send(dto)
            .expect(404);
          expect(response.body).toEqual({
            statusCode: 404,
            message: NOTFOUND_USER,
            error: 'Not Found',
          });
        });
        it('should no match the user password', async () => {
          dto = {
            accountId: 'mad',
            password: 'qwe123123!!',
          };
          const response = await request(app.getHttpServer())
            .post(url)
            .send(dto)
            .expect(400);
          expect(response.body).toEqual({
            statusCode: 400,
            message: NO_MATCH_PASSWORD,
            error: 'Bad Request',
          });
        });
      });
      describe('should success login', () => {
        it('should success login', async () => {
          dto = {
            accountId: 'mad',
            password: 'qwe123123!',
          };
          const response = await request(app.getHttpServer())
            .post(url)
            .send(dto)
            .expect(201);
          expect(response.body).toEqual(expect.any(Object));
          accessToken = response.body.response.accessToken;
          primaryKey = response.body.response.id;
          userModel = response.body.response;
        });
      });
    });

    describe('users profile inquiry', () => {
      const url = '/users';
      describe('should no match the user access token', () => {
        it('should failed user profile inquiry', async () => {
          const response = await request(app.getHttpServer())
            .get(url)
            .set('Authorization', `Bearer qwerasdfzxcv`)
            .send(userModel)
            .expect(401);
          expect(response.body).toEqual({
            statusCode: 401,
            message: 'Unauthorized',
          });
        });
      });
      describe('should success user profile inquiry', () => {
        it('should success user profile inquiry', async () => {
          const response = await request(app.getHttpServer())
            .get(url)
            .set('Authorization', `Bearer ${accessToken}`)
            .send(userModel)
            .expect(200);
          expect(response.body).toEqual(expect.any(Object));
        });
      });
    });

    describe('users profile modify', () => {
      const url = '/users/update';
      let dto: UsersUpdateAdaptorInputDto;
      describe('should success user profile modify', () => {
        it('should success user accountId modify', async () => {
          dto = {
            accountId: 'mad2',
            phone: '',
            password: '',
            confirmPassword: '',
          };
          const response = await request(app.getHttpServer())
            .patch(url)
            .set('Authorization', `Bearer ${accessToken}`)
            .send(dto)
            .expect(200);
          expect(response.body).toEqual(expect.any(Object));
        });

        it('should success user password modify', async () => {
          dto = {
            accountId: '',
            phone: '',
            password: 'qwer!234',
            confirmPassword: 'qwer!234',
          };
          const response = await request(app.getHttpServer())
            .patch(url)
            .set('Authorization', `Bearer ${accessToken}`)
            .send(dto)
            .expect(200);
          expect(response.body).toEqual(expect.any(Object));
        });

        it('should success user phone modify', async () => {
          dto = {
            accountId: '',
            phone: '01099990000',
            password: '',
            confirmPassword: '',
          };
          const response = await request(app.getHttpServer())
            .patch(url)
            .set('Authorization', `Bearer ${accessToken}`)
            .send(dto)
            .expect(200);
          expect(response.body).toEqual(expect.any(Object));
        });

        it('should success user profile return', async () => {
          dto = {
            accountId: 'mad',
            phone: '01012341234',
            password: 'qwe123123!',
            confirmPassword: 'qwe123123!',
          };
          const response = await request(app.getHttpServer())
            .patch(url)
            .set('Authorization', `Bearer ${accessToken}`)
            .send(dto)
            .expect(200);
          expect(response.body).toEqual(expect.any(Object));
        });
      });
    });
  });

  describe('background module', () => {
    const url = '/background';
    describe('should success background image register', () => {
      it('should success background image upload', async () => {
        const response = await request(app.getHttpServer())
          .patch(url)
          .set('Content-Type', `multipart/form-data;`)
          .set('Authorization', `Bearer ${accessToken}`)
          .attach('file', 'raincoatPuppy.jpeg')
          .expect(200);
        expect(response.body).toEqual(expect.any(Object));
      });
    });

    describe('should success background image delete', () => {
      const dto = {
        id: primaryKey,
      };
      it('should success background image delete', async () => {
        const response = await request(app.getHttpServer())
          .delete(url)
          .set('Authorization', `Bearer ${accessToken}`)
          .send(dto)
          .expect(200);

        expect(response.body).toEqual({ response: { delete: true } });
      });
    });
  });

  describe('profile module', () => {
    const url = '/profile';
    describe('should success profile image register', () => {
      it('should success profile image upload', async () => {
        const response = await request(app.getHttpServer())
          .patch(url)
          .set('Content-Type', `multipart/form-data;`)
          .set('Authorization', `Bearer ${accessToken}`)
          .attach('file', 'raincoatPuppy.jpeg')
          .expect(200);
        expect(response.body).toEqual(expect.any(Object));
      });
    });

    describe('should success profile image delete', () => {
      const dto = {
        id: primaryKey,
      };
      it('should success profile image delete', async () => {
        const response = await request(app.getHttpServer())
          .delete(url)
          .set('Authorization', `Bearer ${accessToken}`)
          .send(dto)
          .expect(200);

        console.log('response.body : ', response.body);
        expect(response.body).toEqual({ response: { delete: true } });
      });
    });
  });

  describe('users delete', () => {
    const url = '/users';
    describe('should failed user delete', () => {
      it('user unique id not exist in DB', async () => {
        const dto: UsersDeleteAdaptorInputDto = {
          id: 999999999,
        };
        const response = await request(app.getHttpServer())
          .delete(url)
          .set('Authorization', `Bearer ${accessToken}`)
          .send(dto)
          .expect(404);
        expect(response.body).toEqual({
          statusCode: 404,
          message: 'user',
          error: 'Not Found',
        });
      });
      it('user no match accessToken', async () => {
        const dto: UsersDeleteAdaptorInputDto = {
          id: primaryKey,
        };
        const response = await request(app.getHttpServer())
          .delete(url)
          .set('Authorization', `Bearer reqrq3eewd21e212w1`)
          .send(dto)
          .expect(401);
        expect(response.body).toEqual({
          statusCode: 401,
          message: 'Unauthorized',
        });
      });
    });
    describe('should success user delete', () => {
      it('should success user delete', async () => {
        const dto: UsersDeleteAdaptorInputDto = {
          id: primaryKey,
        };
        const response = await request(app.getHttpServer())
          .delete(url)
          .set('Authorization', `Bearer ${accessToken}`)
          .send(dto)
          .expect(200);
        expect(response.body).toEqual(expect.any(Object));
      });
    });
  });
});
