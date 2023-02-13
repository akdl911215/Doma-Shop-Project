import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { NotFoundException } from "@nestjs/common";
import { UsersProfileAdaptorInputDto } from "../../inbound/dtos/users.profile.adaptor.input.dto";
import { UsersRegisterUseCase } from "./users.register.use.case";
import { UsersRegisterRepository } from "../../infrastructure/repository/users.register.repository";
import { UsersRegisterAdaptorInputDto } from "../../inbound/dtos/users.register.adaptor.input.dto";

describe("UsersRegisterUseCase", () => {
  let service: UsersRegisterUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersRegisterUseCase,
        PrismaService,
        {
          provide: "REGISTER",
          useClass: UsersRegisterRepository,
        },
      ],
    }).compile();

    service = module.get<UsersRegisterUseCase>(UsersRegisterUseCase);
  });

  let dto: UsersRegisterAdaptorInputDto;
  describe("register process", () => {
    it("success should user register", async () => {
      dto = {
        userId: "bbbb",
        name: "leejunghyun",
        password: "qwer!234",
      };

      const { response } = await service.profile(dto);

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

    it("failed should profile does not exist", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
      };

      try {
        const { response } = await service.profile(dto);
      } catch (e) {
        if (e instanceof NotFoundException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(404);

          const errorMessage = e.getResponse();
          expect(errorMessage).toStrictEqual({
            statusCode: 404,
            message: "NOTFOUND_USER",
            error: "Not Found",
          });
        }
      }
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
