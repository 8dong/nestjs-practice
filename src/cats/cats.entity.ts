import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Entity('cat')
export class CatEntity {
  @PrimaryColumn({ type: 'varchar', length: '255', unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column({ type: 'varchar', length: '255' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Column({ type: 'varchar', length: '255' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column({ type: 'varchar', length: '255', nullable: true })
  @IsString()
  imgUrl: string;
}
