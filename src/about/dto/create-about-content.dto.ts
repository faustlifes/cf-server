import { IsString, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class SkillDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  width: string;

  @IsString()
  @IsNotEmpty()
  backgroundColor: string;
}

export class CreateAboutContentDto {
  @IsString()
  @IsNotEmpty()
  biography: string;

  @IsString()
  @IsNotEmpty()
  historyHtml: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SkillDto)
  skills: SkillDto[];
}
