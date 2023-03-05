import { CatEntity } from './../cats.entity';
import { PickType } from '@nestjs/swagger';

export class CatResponseDto extends PickType(CatEntity, [
  'email',
  'name',
] as const) {}
