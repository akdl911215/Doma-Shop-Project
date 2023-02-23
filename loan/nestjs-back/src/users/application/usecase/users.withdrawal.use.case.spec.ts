import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { UsersWithdrawalUseCase } from "./users.withdrawal.use.case";
import { UsersWithdrawalRepository } from "../../infrastructure/repository/users.withdrawal.repository";
import { UsersWithdrawalAdaptorInputDto } from "../../inbound/dtos/users.withdrawal.adaptor.input.dto";

describe("UsersWithdrawalUseCase", () => {
  let service: UsersWithdrawalUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        UsersWithdrawalUseCase,
        {
          provide: "WITHDRAWAL",
          useClass: UsersWithdrawalRepository,
        },
      ],
    }).compile();

    service = module.get<UsersWithdrawalUseCase>(UsersWithdrawalUseCase);
  });

  let dto: UsersWithdrawalAdaptorInputDto;
  describe("user withdrawal process", () => {
    it("user id is empty and will fail", async () => {
      dto = {
        id: "",
      };

      try {
        await service.withdrawal(dto);
      } catch (e) {
        console.log(e);

        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          console.log(errorMessage);
          expect(errorMessage).toStrictEqual({
            error: "Bad Request",
            message: "CONFIRM_REQUIRED_UNIQUE_ID_INFORMATION",
            statusCode: 400,
          });
        }
      }
    });

    it("failed should wrong id", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bef4-15a0b11e0022",
      };

      try {
        await service.withdrawal(dto);
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

    it("success should user unique-id", async () => {
      dto = {
        id: "65b2f2b3-93ed-4919-a3cf-41bc921d9c6e",
      };

      const { response } = await service.withdrawal(dto);
      console.log(response);
      expect(response).toStrictEqual({ withdrawal: true });
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
