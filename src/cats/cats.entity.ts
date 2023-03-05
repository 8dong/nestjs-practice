import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity('cat')
export class CatEntity {
  @ApiProperty({
    example: 'test@test.com',
    description: 'Email',
    required: true,
  })
  @PrimaryColumn({ type: 'varchar', length: '255', unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '12345678',
    description: 'Password',
    required: true,
  })
  @Column({ type: 'varchar', length: '255' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'blue',
    description: 'name',
    required: true,
  })
  @Column({ type: 'varchar', length: '255' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'https://example.com/path',
    description: 'img URL',
    required: false,
  })
  @Column({ type: 'varchar', length: '255', nullable: true })
  @IsString()
  imgUrl: string;
}
