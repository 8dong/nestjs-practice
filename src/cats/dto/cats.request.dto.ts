import { PickType } from '@nestjs/swagger';
import { CatEntity } from '../cats.entity';

export class CatRequestDto extends PickType(CatEntity, [
  'email',
  'password',
  'name',
] as const) {}
