import { CatEntity } from './cats.entity';
import { CatRequestDto } from './dto/cats.request.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly catEntity: Repository<CatEntity>,
  ) {}

  async signUp(body: CatRequestDto) {
    const { email, password, name } = body;
    const isCatExist = await this.catEntity.exist({ where: { email } });

    if (isCatExist) {
      throw new UnauthorizedException('Cat already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    this.catEntity.save({
      email,
      password: hashedPassword,
      name,
    });

    return {
      email,
      name,
    };
  }
}
