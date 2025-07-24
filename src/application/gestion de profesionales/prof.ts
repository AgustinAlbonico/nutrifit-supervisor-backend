import { Injectable } from '@nestjs/common';
import { Genero } from 'src/domain/entities/Persona/Genero';
import { NutricionistaEntity } from 'src/domain/entities/Persona/Profesional/Nutricionista/nutricionista.entity';

@Injectable()
export class ProfUseCase {
  // eslint-disable-next-line @typescript-eslint/require-await
  async execute(): Promise<NutricionistaEntity> {
    const prof = new NutricionistaEntity(
      null,
      'juan',
      'pons',
      new Date(),
      '123123',
      Genero.Masculino,
      'asdasd',
      'asdas',
      'asdasd',
      null,
      123,
      null,
      [],
    );
    return prof;
  }
}
