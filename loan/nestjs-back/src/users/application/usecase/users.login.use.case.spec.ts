import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { BadRequestException } from "@nestjs/common";
import { UsersLoginUseCase } from "./users.login.use.case";
import { UsersLoginRepository } from "../../infrastructure/repository/users.login.repository";
import { UsersLoginAdaptorInputDto } from "../../inbound/dtos/users.login.adaptor.input.dto";
import { HashDecodedService } from "../../infrastructure/bcrypt/hash.decoded.service";
import { TokenService } from "../../../_common/infrastructures/token/token.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

describe("UsersLoginUseCase", () => {
  let service: UsersLoginUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersLoginUseCase,
        PrismaService,
        {
          provide: "HASH_DECODED",
          useClass: HashDecodedService,
        },
        {
          provide: "TOKEN_SERVICE",
          useClass: TokenService,
        },
        JwtService,
        ConfigService,
        {
          provide: "LOGIN",
          useClass: UsersLoginRepository,
        },
      ],
    }).compile();

    service = module.get<UsersLoginUseCase>(UsersLoginUseCase);
  });

  let dto: UsersLoginAdaptorInputDto;
  describe("login process", () => {
    it("success should user id does not exists", async () => {
      dto = {
        userId: "aaa",
        password: "qwer!234",
      };

      const { response } = await service.login(dto);

      expect(response.id).toStrictEqual("c2e2d0df-3139-424f-bee4-15a0b11e000f");
      expect(response.userId).toStrictEqual("aaa");
      expect(response.nickname).toStrictEqual("admin");
      expect(response.password).toStrictEqual(
        "$2b$10$xBqjQweWRGsVFT.UOujny.W6cnEh3OrH/u37qgHSJJ69qwfpYeOdO"
      );
      expect(response.name).toStrictEqual("admain222");
      expect(response.phone).toStrictEqual("01050939902");
      expect(response.address).toStrictEqual("asdads");
    });

    it("failed should user id does not exist", async () => {
      dto = {
        userId: "fail_id",
        password: "",
      };

      try {
        const { response } = await service.login(dto);
      } catch (e) {
        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          expect(errorMessage).toStrictEqual({
            statusCode: 400,
            message: "NO_MATCH_USER_ID",
            error: "Bad Request",
          });
        }
      }
    });

    it("failed should password does not exist", async () => {
      dto = {
        userId: "aaa",
        password: "",
      };

      try {
        const { response } = await service.login(dto);
      } catch (e) {
        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          expect(errorMessage).toStrictEqual({
            statusCode: 400,
            message: "NO_MATCH_PASSWORD",
            error: "Bad Request",
          });
        }
      }
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
