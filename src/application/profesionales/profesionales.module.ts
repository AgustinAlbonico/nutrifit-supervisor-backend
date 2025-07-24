import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/infrastructure/persistence/typeorm/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  providers: [],
  exports: [],
})
export class ProfesionalesModule {}
