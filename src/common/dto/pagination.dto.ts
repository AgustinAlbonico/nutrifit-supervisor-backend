import { Transform } from 'class-transformer';
import { IsInt, Min, Max, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt({ message: 'La página tiene que ser un numer' })
  @Min(1, { message: 'La página tiene que ser mayor que 0' })
  page: number = 1;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt({ message: 'El límite tiene que ser un numero' })
  @Min(1, { message: 'El límite tiene que ser mayor que 0' })
  @Max(100, { message: 'El límite no puede ser mayor a 100' })
  limit: number = 10;

  get skip(): number {
    return (this.page - 1) * this.limit;
  }
}
