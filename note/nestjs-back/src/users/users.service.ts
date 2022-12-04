import { Injectable } from '@nestjs/common';
import { UsersInterface } from './interfaces/users.interface';
import { DeleteInputUser, DeleteOutputUser } from './dtos/users.delete.dto';
import { FindInputUser, FindOutputUser } from './dtos/users.find.dto';
import { LoginInputUser, LoginOutputUser } from './dtos/users.login.dto';
import {
  RegisterInputUser,
  RegisterOutputUser,
} from './dtos/users.register.dto';
import { UpdateInputUser, UpdateOutputUser } from './dtos/users.update.dto';

@Injectable()
export class UsersService implements UsersInterface {
  delete({ id }: DeleteInputUser): Promise<DeleteOutputUser> {
    return Promise.resolve(undefined);
  }

  find({ id }: FindInputUser): Promise<FindOutputUser> {
    return Promise.resolve(undefined);
  }

  login({ noteId, password }: LoginInputUser): Promise<LoginOutputUser> {
    return Promise.resolve(undefined);
  }

  register(dto: RegisterInputUser): Promise<RegisterOutputUser> {
    return Promise.resolve(undefined);
  }

  update(dto: UpdateInputUser): Promise<UpdateOutputUser> {
    return Promise.resolve(undefined);
  }
}
