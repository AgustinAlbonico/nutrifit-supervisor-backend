import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/infrastructure/persistence/typeorm/repositories/repositories.module';
import { PasswordEncrypterService } from 'src/infrastructure/services/bcrypt/bcrypt.service';
import { LoginUseCase } from './login.use-case';
import {  PASSWORD_ENCRYPTER_SERVICE } from 'src/domain/services/password-encrypter.service';

@Module({
  imports: [RepositoriesModule],
  providers: [
    {
      provide: PASSWORD_ENCRYPTER_SERVICE,
      useClass: PasswordEncrypterService,
    },
    LoginUseCase,
  ],
  exports: [],
})
export class AuthModule {}
