import { Module } from '@nestjs/common';
import { RegistrarSocioUseCase } from './registrarSocio.use-case';
import { AppLoggerModule } from 'src/infrastructure/common/logger/app-logger.module';
import { PasswordEncrypterModule } from 'src/infrastructure/services/bcrypt/bcrypt.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  SocioOrmEntity,
  UsuarioOrmEntity,
} from 'src/infrastructure/persistence/typeorm/entities';
import { USUARIO_REPOSITORY } from 'src/domain/entities/Usuario/usuario.repository';
import { SOCIO_REPOSITORY } from 'src/domain/entities/Persona/Socio/socio.repository';
import {
  SocioRepositoryImplementation,
  UsuarioRepositoryImplementation,
} from 'src/infrastructure/persistence/typeorm/repositories';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuarioOrmEntity, SocioOrmEntity]),
    AppLoggerModule,
    PasswordEncrypterModule,
  ],
  providers: [
    RegistrarSocioUseCase,
    { provide: USUARIO_REPOSITORY, useClass: UsuarioRepositoryImplementation },
    { provide: SOCIO_REPOSITORY, useClass: SocioRepositoryImplementation },
  ],
  exports: [RegistrarSocioUseCase],
})
export class SociosModule {}
