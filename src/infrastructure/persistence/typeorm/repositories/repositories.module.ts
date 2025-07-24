import { Module } from '@nestjs/common';
import { UsuarioRepositoryImplementation } from './usuario.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioOrmEntity } from '../entities/usuario.entity';
import { IUsuarioRepository } from 'src/domain/entities/Usuario/usuario.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioOrmEntity])],
  providers: [
    {
      provide: IUsuarioRepository,
      useClass: UsuarioRepositoryImplementation,
    },
  ],
  exports: [IUsuarioRepository],
})
export class RepositoriesModule {}
