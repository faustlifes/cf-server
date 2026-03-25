import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateSliderItemDto {
  @IsString()
  @IsNotEmpty()
  img: string;

  @IsString()
  @IsNotEmpty()
  title1: string;

  @IsString()
  @IsNotEmpty()
  title2: string;

  @IsString()
  @IsNotEmpty()
  subTitle: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}
