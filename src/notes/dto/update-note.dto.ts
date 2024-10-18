import { IsString, IsOptional, IsIn } from 'class-validator';

export class UpdateNoteDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @IsIn(['to_do', 'in_progress', 'done'], {
    message: 'Invalid note status',
  })
  status?: string;
}
