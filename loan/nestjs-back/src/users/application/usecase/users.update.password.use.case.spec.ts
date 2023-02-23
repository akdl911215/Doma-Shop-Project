import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { UsersUpdatePasswordUseCase } from "./users.update.password.use.case";
import { UsersUpdatePasswordRepository } from "../../infrastructure/repository/users.update.password.repository";
import { UsersUpdatePasswordAdaptorInputDto } from "../../inbound/dtos/users.update.password.adaptor.input.dto";
import { HashEncodedService } from "../../infrastructure/bcrypt/hash.encoded.service";
import { ConfigService } from "@nestjs/config";

describe("UsersUpdatePasswordUseCase", () => {
  let service: UsersUpdatePasswordUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        UsersUpdatePasswordUseCase,
        {
          provide: "UPDATE_PASSWORD",
          useClass: UsersUpdatePasswordRepository,
        },
        {
          provide: "HASH_ENCODED",
          useClass: HashEncodedService,
        },
        ConfigService,
      ],
    }).compile();

    service = module.get<UsersUpdatePasswordUseCase>(
      UsersUpdatePasswordUseCase
    );
  });

  let dto: UsersUpdatePasswordAdaptorInputDto;
  describe("update password process", () => {
    it("password is empty and will fail", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
        password: "",
      };

      try {
        await service.updatePassword(dto);
      } catch (e) {
        // console.log(e);
        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            error: "Bad Request",
            message: "CONFIRM_REQUIRED_PASSWORD_INFORMATION",
            statusCode: 400,
          });
        }
      }
    });

    it("failed should wrong id", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
        password: "qweqweqweqwewqewqeq",
      };

      try {
        await service.updatePassword(dto);
      } catch (e) {
        // console.log(e);

        if (e instanceof NotFoundException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(404);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            error: "Not Found",
            message: "NOTFOUND_USER",
            statusCode: 404,
          });
        }
      }
    });

    it("success should user name", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e000f",
        password: "qwer!234",
      };

      const { response } = await service.updatePassword(dto);
      console.log(response);

      expect(response.id).toStrictEqual("c2e2d0df-3139-424f-bee4-15a0b11e000f");
      expect(response.userId).toStrictEqual("aaa");
      expect(response.nickname).toStrictEqual("변경한 별명이지롱 3333");
      expect(response.name).toStrictEqual("변경한 이름이지롱 111");
      expect(response.phone).toStrictEqual("01050939902");
      expect(response.address).toStrictEqual("변경한 주소지롱 111 222");
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
