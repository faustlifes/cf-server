import { IsString, IsNotEmpty } from 'class-validator';

export class CreateServiceItemDto {
  @IsString()
  @IsNotEmpty()
  img: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}
