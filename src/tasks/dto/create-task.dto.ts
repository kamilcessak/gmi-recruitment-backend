import { IsString, IsOptional, IsIn } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  @IsIn(['to_do', 'in_progress', 'done'], {
    message: 'Invalid note status'
  })
  status: string;
}