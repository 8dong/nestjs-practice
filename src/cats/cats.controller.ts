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
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { PositiveIntPipe } from 'src/pipes/positiveInt.pipe';

@Controller('cats')
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
