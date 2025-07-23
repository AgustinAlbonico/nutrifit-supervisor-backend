import { IsString, IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class FormacionAcademicaDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  institucion: string;

  @IsNumber()
  @IsNotEmpty()
  añoInicio: number;

  @IsDate()
  @IsNotEmpty()
  añoFin: number;

  @IsString()
  @IsNotEmpty()
  nivel: string;
}
