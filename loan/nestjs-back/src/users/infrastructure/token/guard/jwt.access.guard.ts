import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class AccessTokenGuard extends AuthGuard("JWT-ACCESS-TOKEN") {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    console.log("access token guard user", user);
    console.log("access token guard err", err);
    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    return user;
  }
}
