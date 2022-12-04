import { ConflictException, Injectable } from "@nestjs/common";
import { UsersInterface } from "./interfaces/users.interface";
import { DeleteInputUser, DeleteOutputUser } from "./dtos/users.delete.dto";
import { FindInputUser, FindOutputUser } from "./dtos/users.find.dto";
import { LoginInputUser, LoginOutputUser } from "./dtos/users.login.dto";
import {
  RegisterInputUser,
  RegisterOutputUser,
} from "./dtos/users.register.dto";
import { UpdateInputUser, UpdateOutputUser } from "./dtos/users.update.dto";
import { PrismaService } from "../prisma.service";
import {
  ALREADY_ACCOUNT_ID_EXISTS,
  ALREADY_PHONE_EXISTS,
} from "../common/constants/http/errors/409";

@Injectable()
export class UsersService implements UsersInterface {
  constructor(private readonly prisma: PrismaService) {}

  public async register({
    noteId: userNoteId,
    phone: userPhone,
  }: RegisterInputUser): Promise<RegisterOutputUser> {
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [
          {
            noteId: userNoteId,
          },
          {
            phone: userPhone,
          },
        ],
      },
    });
    if (user?.noteId) throw new ConflictException(ALREADY_ACCOUNT_ID_EXISTS);
    if (user?.phone) throw new ConflictException(ALREADY_PHONE_EXISTS);

    const { noteId, password, phone, address, name } = user;

    try {
      return {
        response: await this.prisma.users.create({
          data: {
            noteId,
            password,
            phone,
            address,
            name,
          },
        }),
      };
    } catch (e) {
      throw new Error("USER REGISTER PRISMA CREATE FAILED " + e);
    }
  }

  delete({ id }: DeleteInputUser): Promise<DeleteOutputUser> {
    return Promise.resolve(undefined);
  }

  find({ id }: FindInputUser): Promise<FindOutputUser> {
    return Promise.resolve(undefined);
  }

  login({ noteId, password }: LoginInputUser): Promise<LoginOutputUser> {
    return Promise.resolve(undefined);
  }

  update(dto: UpdateInputUser): Promise<UpdateOutputUser> {
    return Promise.resolve(undefined);
  }
}
