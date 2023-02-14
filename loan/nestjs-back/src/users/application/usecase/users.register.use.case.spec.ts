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
import { InternalServerErrorException } from "@nestjs/common";
import exp from "constants";

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

    it("failed should profile does not exist", async () => {
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
        const { response } = await service.register(dto);
      } catch (e) {
        console.log(e);
        // console.log(e.get);
        // console.log(e.errors);
        // console.log(e.errorCode);

        expect(e).toThrowError("Sign-up form check");
        // expect(e).toStrictEqual("Sign-up form check");
        if (e instanceof InternalServerErrorException) {
        }
      }
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
