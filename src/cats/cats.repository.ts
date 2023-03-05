import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CatEntity } from './cats.entity';
import { CatRequestDto } from './dto/cats.request.dto';
import { CatResponseDto } from './dto/cats.response.dto';

@Injectable()
export class CatsRepository {
  constructor(
    @InjectRepository(CatEntity)
    private readonly catEntity: Repository<CatEntity>,
  ) {}

  async existByEmail(email: string): Promise<boolean> {
    const result = await this.catEntity.exist({ where: { email } });

    return result;
  }

  async create(cat: CatRequestDto): Promise<CatResponseDto> {
    await this.catEntity.save(cat);

    return { email: cat.email, name: cat.name };
  }
}
