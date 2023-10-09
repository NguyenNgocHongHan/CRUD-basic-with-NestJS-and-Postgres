import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: "Author's name must have atleast 2 character." })
  name: string;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  birthday: Date;

  @ApiProperty()
  @IsString()
  nationality: string;

  @ApiProperty()
  @IsString()
  @IsEnum(['m', 'f', 'u'])
  gender: string;
}
