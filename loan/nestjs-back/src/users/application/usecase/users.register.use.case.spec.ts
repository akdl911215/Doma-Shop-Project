import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersRegisterUseCase } from "./users.register.use.case";
import { UsersRegisterRepository } from "../../infrastructure/repository/users.register.repository";
import { UsersRegisterAdaptorInputDto } from "../../inbound/dtos/users.register.adaptor.input.dto";
import { UsersExistsUserIdRepository } from "../../infrastructure/repository/users.exists.user.id.repository";
import { UsersExistsPhoneRepository } from "../../infrastructure/repository/users.exists.phone.repository";
import { UsersExistsNicknameRepository } from "../../infrastructure/repository/users.exists.nickname.repository";
import { HashEncodedService } from "../../infrastructure/bcrypt/hash.encoded.service";
import { ConfigService } from "@nestjs/config";
import { BadRequestException, ConflictException } from "@nestjs/common";

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
        {
          provide: "HASH_ENCODED",
          useClass: HashEncodedService,
        },
        ConfigService,
        {
          provide: "EXISTS_USER_ID",
          useClass: UsersExistsUserIdRepository,
        },
        {
          provide: "EXISTS_PHONE",
          useClass: UsersExistsPhoneRepository,
        },
        {
          provide: "EXISTS_NICKNAME",
          useClass: UsersExistsNicknameRepository,
        },
      ],
    }).compile();

    service = module.get<UsersRegisterUseCase>(UsersRegisterUseCase);
  });

  let dto: UsersRegisterAdaptorInputDto;
  describe("register process", () => {
    it("failed should user register information empty", async () => {
      dto = {
        userId: "",
        nickname: "",
        name: "",
        password: "",
        phone: "",
        address: "",
        confirmPassword: "",
      };

      try {
        await service.register(dto);
      } catch (e) {
        if (e instanceof BadRequestException) {
          const status = e.getStatus();
          expect(status).toStrictEqual(400);

          const errorMessage = e.getResponse();
          expect(errorMessage).toStrictEqual({
            statusCode: 400,
            message: "CONFIRM_REQUIRED_USER_INFORMATION",
            error: "Bad Request",
          });
        }
      }
    });

    it("user-id is duplicated and fails", async () => {
      dto = {
        userId: "aaa",
        nickname: "aaaaaaaaaaaa",
        name: "bbbbbbbbbbbb",
        password: "bbbbbbbbbb",
        phone: "010123123213123",
        address: "01qwdqwdqwdqwd",
        confirmPassword: "wqedwqewqdewqeqweqw",
      };

      try {
        await service.register(dto);
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

    it("phone number is duplicated and fails", async () => {
      dto = {
        userId: "eee",
        nickname: "admin",
        name: "bbbbbbbbbbbb",
        password: "bbbbbbbbbb",
        phone: "01050939902",
        address: "01qwdqwdqwdqwd",
        confirmPassword: "wqedwqewqdewqeqweqw",
      };

      try {
        await service.register(dto);
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

    it("phone number is duplicated and fails", async () => {
      dto = {
        userId: "eee",
        nickname: "admin",
        name: "bbbbbbbbbbbb",
        password: "bbbbbbbbbb",
        phone: "01055554444",
        address: "01qwdqwdqwdqwd",
        confirmPassword: "wqedwqewqdewqeqweqw",
      };

      try {
        await service.register(dto);
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

    it("success should user register", async () => {
      dto = {
        userId: "ddd",
        nickname: "jest-test3",
        name: "leejunghyun",
        password: "qwer!234",
        phone: "01009098712",
        address: "jest-address",
        confirmPassword: "qwer!234",
      };

      const { response } = await service.register(dto);

      expect(response.userId).toStrictEqual("ddd");
      expect(response.nickname).toStrictEqual("jest-test3");
      expect(response.name).toStrictEqual("leejunghyun");
      expect(response.phone).toStrictEqual("01009098712");
      expect(response.address).toStrictEqual("jest-address");
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
