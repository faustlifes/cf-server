import { IsString, IsNotEmpty, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class SocialLinksDto {
  @IsString()
  facebook: string;

  @IsString()
  twitter: string;

  @IsString()
  skype: string;

  @IsString()
  vimeo: string;
}

export class CreateTeammateDto {
  @IsString()
  @IsNotEmpty()
  src: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsObject()
  @ValidateNested()
  @Type(() => SocialLinksDto)
  social: SocialLinksDto;
}
