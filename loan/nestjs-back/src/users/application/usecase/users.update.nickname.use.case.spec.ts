import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { UsersUpdateNameAdaptorInputDto } from "../../inbound/dtos/users.update.name.adaptor.input.dto";
import { UsersUpdateNicknameUseCase } from "./users.update.nickname.use.case";
import { UsersUpdateNicknameRepository } from "../../infrastructure/repository/users.update.nickname.repository";
import { UsersUpdateNicknameAdaptorInputDto } from "../../inbound/dtos/users.update.nickname.adaptor.input.dto";

describe("UsersUpdateNicknameUseCase", () => {
  let service: UsersUpdateNicknameUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        UsersUpdateNicknameUseCase,
        {
          provide: "UPDATE_NICKNAME",
          useClass: UsersUpdateNicknameRepository,
        },
      ],
    }).compile();

    service = module.get<UsersUpdateNicknameUseCase>(
      UsersUpdateNicknameUseCase
    );
  });

  let dto: UsersUpdateNicknameAdaptorInputDto;
  describe("update nick-name process", () => {
    it("nick-name is empty and will fail", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
        nickname: "",
      };

      try {
        await service.updateNickname(dto);
      } catch (e) {
        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            error: "Bad Request",
            message: "CONFIRM_REQUIRED_NICKNAME_INFORMATION",
            statusCode: 400,
          });
        }
      }
    });

    it("failed should wrong id", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
        nickname: "failed-nickname",
      };

      try {
        await service.updateNickname(dto);
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
        nickname: "변경한 별명이지롱 3333",
      };

      const { response } = await service.updateNickname(dto);
      console.log(response);

      expect(response.id).toStrictEqual("c2e2d0df-3139-424f-bee4-15a0b11e000f");
      expect(response.userId).toStrictEqual("aaa");
      expect(response.nickname).toStrictEqual("변경한 별명이지롱 3333");
      expect(response.password).toStrictEqual(
        "$2b$10$xBqjQweWRGsVFT.UOujny.W6cnEh3OrH/u37qgHSJJ69qwfpYeOdO"
      );
      expect(response.name).toStrictEqual("변경한 이름이지롱 111");
      expect(response.phone).toStrictEqual("01050939902");
      expect(response.address).toStrictEqual("변경한 주소지롱 111 222");
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
