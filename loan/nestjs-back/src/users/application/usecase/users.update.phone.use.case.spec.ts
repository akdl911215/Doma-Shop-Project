import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { UsersUpdateNicknameAdaptorInputDto } from "../../inbound/dtos/users.update.nickname.adaptor.input.dto";
import { UsersUpdatePhoneUseCase } from "./users.update.phone.use.case";
import { UsersUpdatePhoneRepository } from "../../infrastructure/repository/users.update.phone.repository";
import { UsersUpdatePhoneAdaptorInputDto } from "../../inbound/dtos/users.update.phone.adaptor.input.dto";

describe("UsersUpdatePhoneUseCase", () => {
  let service: UsersUpdatePhoneUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        UsersUpdatePhoneUseCase,
        {
          provide: "UPDATE_PHONE",
          useClass: UsersUpdatePhoneRepository,
        },
      ],
    }).compile();

    service = module.get<UsersUpdatePhoneUseCase>(UsersUpdatePhoneUseCase);
  });

  let dto: UsersUpdatePhoneAdaptorInputDto;
  describe("update phone number process", () => {
    it("phone number is empty and will fail", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
        phone: "",
      };

      try {
        await service.updatePhone(dto);
      } catch (e) {
        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            error: "Bad Request",
            message: "CONFIRM_REQUIRED_PHONE_INFORMATION",
            statusCode: 400,
          });
        }
      }
    });

    it("failed should wrong id", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
        phone: "failed-phone-number",
      };

      try {
        await service.updatePhone(dto);
      } catch (e) {
        console.log(e);

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

    it("success should user phone number", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e000f",
        phone: "01022221111",
      };

      const { response } = await service.updatePhone(dto);
      console.log(response);

      expect(response.id).toStrictEqual("c2e2d0df-3139-424f-bee4-15a0b11e000f");
      expect(response.userId).toStrictEqual("aaa");
      expect(response.nickname).toStrictEqual("변경한 별명이지롱 3333");
      expect(response.password).toStrictEqual(
        "$2b$10$ANjZVzrO1LUvUv8WfwVO0.4AhrXcxVIWi8Qn2Ue9EP6uwtSYMGLha"
      );
      expect(response.name).toStrictEqual("변경한 이름이지롱 111");
      expect(response.phone).toStrictEqual("01022221111");
      expect(response.address).toStrictEqual("변경한 주소지롱 111 222");
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
