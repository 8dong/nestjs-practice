import { CatEntity } from './cats.entity';
import { CatRequestDto } from './dto/cats.request.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CatsRepository } from './cats.repository';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}

  async signUp(body: CatRequestDto) {
    const { email, password, name } = body;
    const isCatExist = await this.catsRepository.existByEmail(email);

    if (isCatExist) {
      throw new UnauthorizedException('Cat already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await this.catsRepository.create(body);

    const result = await this.catsRepository.create({
      email,
      password: hashedPassword,
      name,
    });

    return result;
  }
}
