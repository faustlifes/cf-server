import { IsString, IsOptional } from 'class-validator';

export class UpdatePortfolioItemDto {
  @IsString()
  @IsOptional()
  src?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  title2?: string;
}
