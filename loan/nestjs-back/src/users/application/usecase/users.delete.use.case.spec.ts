import { Test, TestingModule } from "@nestjs/testing";
import { UsersExistsNicknameRepository } from "../../infrastructure/repository/users.exists.nickname.repository";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersExistsNicknameAdaptorInputDto } from "../../inbound/dtos/users.exists.nickname.adaptor.input.dto";
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from "@nestjs/common";
import { UsersDeleteUseCase } from "./users.delete.use.case";
import { UsersDeleteRepository } from "../../infrastructure/repository/users.delete.repository";
import { UsersDeleteAdaptorInputDto } from "../../inbound/dtos/users.delete.adaptor.input.dto";

describe("UsersDeleteUseCase", () => {
  let service: UsersDeleteUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersDeleteUseCase,
        PrismaService,
        {
          provide: "DELETE",
          useClass: UsersDeleteRepository,
        },
      ],
    }).compile();

    service = module.get<UsersDeleteUseCase>(UsersDeleteUseCase);
  });

  let dto: UsersDeleteAdaptorInputDto;
  describe("user delete process", () => {
    it("success should nickname does not exists", async () => {
      dto = {
        id: "31a0c8bf-ad6d-4e95-9efd-87c60da2060d",
      };

      const { response } = await service.delete(dto);
      console.log(response);
      expect(response).toStrictEqual({ delete: true });
    });

    it("user id is empty and will fail", async () => {
      dto = {
        id: "",
      };

      try {
        await service.delete(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          expect(errorMessage).toStrictEqual({
            statusCode: 400,
            message: "CONFIRM_REQUIRED_UNIQUE_ID_INFORMATION",
            error: "Bad Request",
          });
        }
      }
    });

    it("failed should wrong id", async () => {
      dto = {
        id: "c1e2d0df-3139-424f-bee4-15a0b11e0022",
      };

      try {
        await service.delete(dto);
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
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
