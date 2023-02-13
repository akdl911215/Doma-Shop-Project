import { Test, TestingModule } from "@nestjs/testing";
import { UsersExistsNicknameUseCase } from "./users.exists.nickname.use.case";
import { UsersExistsNicknameRepository } from "../../infrastructure/repository/users.exists.nickname.repository";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersExistsNicknameAdaptorInputDto } from "../../inbound/dtos/users.exists.nickname.adaptor.input.dto";
import { ConflictException } from "@nestjs/common";

describe("UsersExistsNicknameUseCase", () => {
  let service: UsersExistsNicknameUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersExistsNicknameUseCase,
        PrismaService,
        {
          provide: "EXISTS_NICKNAME",
          useClass: UsersExistsNicknameRepository,
        },
      ],
    }).compile();

    service = module.get<UsersExistsNicknameUseCase>(
      UsersExistsNicknameUseCase
    );
  });

  let dto: UsersExistsNicknameAdaptorInputDto;
  describe("exists nickname", () => {
    it("success should nickname does not exists", async () => {
      dto = {
        nickname: "a",
      };

      const {
        response: { validateNickname },
      } = await service.existsNickname(dto);

      expect(validateNickname).toStrictEqual(true);
    });

    it("failed should nickname already exists", async () => {
      dto = {
        nickname: "admin",
      };

      try {
        const {
          response: { validateNickname },
        } = await service.existsNickname(dto);
      } catch (e) {
        if (e instanceof ConflictException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(409);

          const errorMessage = e.getResponse();
          expect(errorMessage).toStrictEqual({
            statusCode: 409,
            message: "ALREADY_NICKNAME_EXISTS",
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
