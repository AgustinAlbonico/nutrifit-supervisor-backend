import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/infrastructure/persistence/typeorm/repositories/repositories.module';
import { CreateUserUseCase } from './create-user.use-case';

@Module({
  imports: [RepositoriesModule],
  providers: [CreateUserUseCase],
  exports: [CreateUserUseCase],
})
export class AuthModule {}
