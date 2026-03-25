import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTeamFactDto {
  @IsString()
  @IsNotEmpty()
  favicon: string;

  @IsNumber()
  number: number;

  @IsString()
  @IsNotEmpty()
  title: string;
}
