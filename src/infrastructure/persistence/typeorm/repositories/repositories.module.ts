import { Module } from '@nestjs/common';
import { UsuarioRepositoryImplementation } from './usuario.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioOrmEntity } from '../entities/usuario.entity';
import { USUARIO_REPOSITORY } from 'src/domain/entities/Usuario/usuario.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioOrmEntity])],
  providers: [
    {
      provide: USUARIO_REPOSITORY,
      useClass: UsuarioRepositoryImplementation,
    },
  ],
  exports: [USUARIO_REPOSITORY],
})
export class RepositoriesModule {}
