import { UsuarioEntity } from './usuario.entity';

export interface IUsuarioRepository {
  findByUsername(username: string): Promise<UsuarioEntity | null>;
  create(usuario: UsuarioEntity): Promise<UsuarioEntity>;
}
