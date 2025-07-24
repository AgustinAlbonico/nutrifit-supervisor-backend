import { UsuarioEntity } from './usuario.entity';

export abstract class IUsuarioRepository {
  abstract create(usuario: UsuarioEntity): Promise<UsuarioEntity>;
}
