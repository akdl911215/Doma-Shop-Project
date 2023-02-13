import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { ConflictException } from "@nestjs/common";
import { UsersExistsPhoneUseCase } from "./users.exists.phone.use.case";
import { UsersExistsPhoneAdaptorInputDto } from "../../inbound/dtos/users.exists.phone.adaptor.input.dto";
import { UsersExistsPhoneRepository } from "../../infrastructure/repository/users.exists.phone.repository";

describe("UsersExistsPhoneUseCase", () => {
  let service: UsersExistsPhoneUseCase;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersExistsPhoneUseCase,
        PrismaService,
        {
          provide: "EXISTS_PHONE",
          useClass: UsersExistsPhoneRepository,
        },
      ],
    }).compile();

    service = module.get<UsersExistsPhoneUseCase>(UsersExistsPhoneUseCase);
  });

  let dto: UsersExistsPhoneAdaptorInputDto;
  describe("exists phone number", () => {
    it("success should phone number does not exists", async () => {
      dto = {
        phone: "010",
      };

      const {
        response: { validatePhone },
      } = await service.existsPhone(dto);

      expect(validatePhone).toStrictEqual(true);
    });

    it("failed should phone number already exists", async () => {
      dto = {
        phone: "01050939902",
      };

      try {
        const {
          response: { validatePhone },
        } = await service.existsPhone(dto);
      } catch (e) {
        if (e instanceof ConflictException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(409);

          const errorMessage = e.getResponse();
          expect(errorMessage).toStrictEqual({
            statusCode: 409,
            message: "ALREADY_PHONE_EXISTS",
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
