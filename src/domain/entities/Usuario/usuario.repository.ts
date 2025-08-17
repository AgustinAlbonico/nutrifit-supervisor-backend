import { BaseRepository } from 'src/domain/shared/base.repository';
import { UsuarioEntity } from './usuario.entity';

export const USUARIO_REPOSITORY = Symbol('UsuarioRepository');

export abstract class UsuarioRepository
  implements BaseRepository<UsuarioEntity>
{
  abstract findAll(): Promise<UsuarioEntity[]>;
  abstract save(entity: UsuarioEntity): Promise<UsuarioEntity>;
  abstract update(id: number, entity: UsuarioEntity): Promise<UsuarioEntity>;
  abstract delete(id: number): Promise<void>;
  abstract findByEmail(email: string): Promise<UsuarioEntity | null>;
}
