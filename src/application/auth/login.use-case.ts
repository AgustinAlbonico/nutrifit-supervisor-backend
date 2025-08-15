import { Inject, Injectable } from '@nestjs/common';
import {
  IUsuarioRepository,
  USUARIO_REPOSITORY,
} from 'src/domain/entities/Usuario/usuario.repository';
import { BaseUseCase } from '../shared/use-case.base';
import { UnauthorizedError } from 'src/domain/exceptions/custom-exceptions';
import {
  IPasswordEncrypterService,
  PASSWORD_ENCRYPTER_SERVICE,
} from 'src/domain/services/password-encrypter.service';

interface LoginPayload {
  email: string;
  password: string;
}

@Injectable()
export class LoginUseCase implements BaseUseCase {
  constructor(
    @Inject(USUARIO_REPOSITORY)
    private readonly userRepository: IUsuarioRepository,
    @Inject(PASSWORD_ENCRYPTER_SERVICE)
    private readonly passwordEncrypter: IPasswordEncrypterService,
  ) {}

  async execute(payload: LoginPayload): Promise<{ token: string }> {
    const { email, password } = payload;

    // const user = await this.userRepository.findByEmail(email);
    // if (!user) throw new UnauthorizedError('No se encontró el usuario');

    // const isPasswordValid = await this.passwordEncrypter.comparePasswords(
    //   password,
    //   user.contraseña,
    // );
    // if (!isPasswordValid) throw new UnauthorizedError('Contraseña incorrecta');

    const encryptedPassword =
      await this.passwordEncrypter.encryptPassword(password);

    return { token: encryptedPassword };
  }
}
