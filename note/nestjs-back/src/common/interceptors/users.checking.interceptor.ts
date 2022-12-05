import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express';

@Injectable()
export class UsersCheckingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>().body;

    if ('confirmPassword' in request) {
      if (request.password === request.confirmPassword)
        delete request['confirmPassword'];
      else throw new Error('password !== confirmPassword');
    }

    return next.handle().pipe(tap((data) => delete data.response.password));
  }
}
