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
  @ApiProperty({
    type: String,
    minLength: 2,
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: "Author's name must have atleast 2 character." })
  name: string;

  @ApiProperty({ type: Date })
  @Type(() => Date)
  @IsDate()
  birthday: Date;

  @ApiProperty({ type: String })
  @IsString()
  nationality: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsEnum(['m', 'f', 'u'])
  gender: string;
}
