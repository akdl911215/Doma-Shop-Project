import { Controller, Inject } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UsersInterface } from "./interfaces/users.interface";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(
    @Inject("USERS_SERVICE") private readonly usersService: UsersInterface
  ) {}
}
