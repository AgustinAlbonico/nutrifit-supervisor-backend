import { Module } from '@nestjs/common';

import { PasswordEncrypterService } from 'src/infrastructure/services/bcrypt/bcrypt.service';
import { LoginUseCase } from './login.use-case';
import { PASSWORD_ENCRYPTER_SERVICE } from 'src/domain/services/password-encrypter.service';
import { JWT_SERVICE } from 'src/domain/services/jwt.service';
import { JwtServiceImpl } from 'src/infrastructure/services/jwt/jwt.service';
import { JwtModule } from '@nestjs/jwt';
import { AppLoggerModule } from 'src/infrastructure/common/logger/app-logger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioOrmEntity } from 'src/infrastructure/persistence/typeorm/entities';
import { USUARIO_REPOSITORY } from 'src/domain/entities/Usuario/usuario.repository';
import { UsuarioRepositoryImplementation } from 'src/infrastructure/persistence/typeorm/repositories';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuarioOrmEntity]),
    JwtModule.register({
      secret: 'ferchu123',
      signOptions: { expiresIn: '1h' },
    }),
    AppLoggerModule,
  ],
  providers: [
    {
      provide: PASSWORD_ENCRYPTER_SERVICE,
      useClass: PasswordEncrypterService,
    },
    {
      provide: JWT_SERVICE,
      useClass: JwtServiceImpl,
    },
    { provide: USUARIO_REPOSITORY, useClass: UsuarioRepositoryImplementation },
    LoginUseCase,
  ],
  exports: [LoginUseCase, JwtModule],
})
export class AuthModule {}
