import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { UsersUpdateUserIdUseCase } from "./users.update.user.id.use.case";
import { UsersUpdateUserIdRepository } from "../../infrastructure/repository/users.update.user.id.repository";
import { UsersUpdateUserIdAdaptorInputDto } from "../../inbound/dtos/users.update.user.id.adaptor.input.dto";

describe("UsersUpdateUserIdUseCase", () => {
  let service: UsersUpdateUserIdUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        UsersUpdateUserIdUseCase,
        {
          provide: "UPDATE_USER_ID",
          useClass: UsersUpdateUserIdRepository,
        },
      ],
    }).compile();

    service = module.get<UsersUpdateUserIdUseCase>(UsersUpdateUserIdUseCase);
  });

  let dto: UsersUpdateUserIdAdaptorInputDto;
  describe("update user-id number process", () => {
    it("user id is empty and will fail", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
        userId: "",
      };

      try {
        await service.updateUserId(dto);
      } catch (e) {
        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            error: "Bad Request",
            message: "CONFIRM_REQUIRED_USER_ID_INFORMATION",
            statusCode: 400,
          });
        }
      }
    });

    it("failed should wrong id", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
        userId: "failed-user-id",
      };

      try {
        await service.updateUserId(dto);
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

    it("success should user userId", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e000f",
        userId: "update-user-id",
      };

      const { response } = await service.updateUserId(dto);
      console.log(response);

      expect(response.id).toStrictEqual("c2e2d0df-3139-424f-bee4-15a0b11e000f");
      expect(response.userId).toStrictEqual("update-user-id");
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
