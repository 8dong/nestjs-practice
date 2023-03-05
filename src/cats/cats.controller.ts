import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  UseFilters,
  Param,
  ParseIntPipe,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CatRequestDto } from './dto/cats.request.dto';
import { HttpExceptionFilter } from './../http-exception.filter';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CatsService } from './cats.service';
import { CatResponseDto } from './dto/cats.response.dto';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiResponse({
    status: 200,
    description: 'Success',
    type: CatResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Server Error',
  })
  @ApiOperation({ summary: 'Sign up API' })
  @Post()
  async singUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }
}
