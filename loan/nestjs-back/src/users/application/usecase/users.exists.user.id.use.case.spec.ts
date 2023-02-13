import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { ConflictException } from "@nestjs/common";
import { UsersExistsUserIdRepository } from "../../infrastructure/repository/users.exists.user.id.repository";
import { UsersExistsUserIdAdaptorInputDto } from "../../inbound/dtos/users.exists.user.id.adaptor.input.dto";
import { UsersExistsUserIdUseCase } from "./users.exists.user.id.use.case";

describe("UsersExistsUserIdUseCase", () => {
  let service: UsersExistsUserIdUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersExistsUserIdUseCase,
        PrismaService,
        {
          provide: "EXISTS_USER_ID",
          useClass: UsersExistsUserIdRepository,
        },
      ],
    }).compile();

    service = module.get<UsersExistsUserIdUseCase>(UsersExistsUserIdUseCase);
  });

  let dto: UsersExistsUserIdAdaptorInputDto;
  describe("exists user id", () => {
    it("success should user id does not exists", async () => {
      dto = {
        userId: "ddqweqweqweaxcxzcsdvcdsa",
      };

      const {
        response: { validateUserId },
      } = await service.existsUserId(dto);

      expect(validateUserId).toStrictEqual(true);
    });

    it("failed should user id already exists", async () => {
      dto = {
        userId: "aaa",
      };

      try {
        const {
          response: { validateUserId },
        } = await service.existsUserId(dto);
      } catch (e) {
        if (e instanceof ConflictException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(409);

          const errorMessage = e.getResponse();
          expect(errorMessage).toStrictEqual({
            statusCode: 409,
            message: "ALREADY_USER_ID_EXISTS",
            error: "Conflict",
          });
        }
      }
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
