import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/infrastructure/persistence/typeorm/repositories/repositories.module';
import { ProfUseCase } from './prof';

@Module({
  imports: [RepositoriesModule],
  providers: [ProfUseCase],
  exports: [ProfUseCase],
})
export class GestionProfesionalesModule {}
