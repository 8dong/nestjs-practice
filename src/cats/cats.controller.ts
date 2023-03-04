import { HttpExceptionFilter } from './../http-exception.filter';
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
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats() {
    return 'all cats';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    return 'update partial cat';
  }

  @Delete(':id')
  deleteCat(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    return 'delete cat';
  }
}
