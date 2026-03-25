import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
