import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const error = exception.getResponse() as
      | string
      | { error: string; statusCode: number; message: string };

    if (typeof error === 'string') {
      response.status(status).json({
        success: false,
        status,
        error,
      });
    } else {
      response.status(status).json({
        success: false,
        status,
        ...error,
      });
    }
  }
}
