import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { NotFoundException } from "@nestjs/common";
import { UsersLogoutService } from "./users.logout.service";
import { UsersLogoutRepository } from "../../infrastructure/repository/users.logout.repository";
import { UsersLogoutAdaptorInputDto } from "../../inbound/dtos/users.logout.adaptor.input.dto";

describe("UsersLogoutService", () => {
  let service: UsersLogoutService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        UsersLogoutService,
        {
          provide: "LOGOUT",
          useClass: UsersLogoutRepository,
        },
      ],
    }).compile();

    service = module.get<UsersLogoutService>(UsersLogoutService);
  });

  let dto: UsersLogoutAdaptorInputDto;
  describe("logout process", () => {
    it("failed should wrong id", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e0022",
      };

      try {
        await service.logout(dto);
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

    it("success should user logout", async () => {
      dto = {
        id: "c2e2d0df-3139-424f-bee4-15a0b11e000f",
      };

      const { response } = await service.logout(dto);
      console.log(response);

      expect(response).toStrictEqual({ logout: true });
    });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
