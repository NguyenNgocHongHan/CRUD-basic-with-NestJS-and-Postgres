import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    type: String,
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    maxLength: 500,
  })
  @IsString()
  description: string;

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

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  publisherID: number;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  authorIDs: number[];
}

// export enum TypeBook {
//   Literature = 'Văn học',
//   Novel = 'Tiểu thuyết',
//   Education = 'Giáo dục',
// }
