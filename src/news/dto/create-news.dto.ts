import { IsString, IsNotEmpty } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  src: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}
