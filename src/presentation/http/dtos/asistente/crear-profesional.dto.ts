import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Genero } from 'src/domain/entities/Persona/Genero';
import { FormacionAcademicaDto } from './formacion-academica.dto';

export class CrearProfesionalDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsDate()
  @Type(() => Date)
  fechaNacimiento: Date;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  telefono: string;

  @IsEnum(Genero)
  @IsNotEmpty()
  genero: Genero;

  @IsString()
  @IsNotEmpty()
  direccion: string;

  @IsString()
  @IsNotEmpty()
  ciudad: string;

  @IsString()
  @IsNotEmpty()
  provincia: string;

  @IsString()
  @IsNotEmpty()
  matricula: string;

  @IsNumber()
  @IsNotEmpty()
  añosExperiencia: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FormacionAcademicaDto)
  formacionAcademica: FormacionAcademicaDto[];

  @IsEnum(['nutricionista', 'deportologo'])
  especialidad: 'nutricionista' | 'deportologo';

  @IsString()
  @IsNotEmpty()
  usuario: string;
}
