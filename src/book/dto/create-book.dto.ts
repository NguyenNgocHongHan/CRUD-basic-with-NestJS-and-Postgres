import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  maxLength,
} from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    type: String,
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    default: 0,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    maxLength: 50,
  })
  @IsString()
  typeBook: string;
}

// export enum TypeBook {
//   Literature = 'Văn học',
//   Novel = 'Tiểu thuyết',
//   Education = 'Giáo dục',
// }
