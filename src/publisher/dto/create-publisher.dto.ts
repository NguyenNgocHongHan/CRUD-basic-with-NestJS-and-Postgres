import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePublisherDto {
  @ApiProperty({
    type: String,
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
