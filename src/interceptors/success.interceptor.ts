import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('pre-controller interceptor...');

    return next.handle().pipe(
      map((res) => {
        console.log('post-request interceptor...');

        return {
          success: true,
          data: res,
        };
      }),
    );
  }
}
