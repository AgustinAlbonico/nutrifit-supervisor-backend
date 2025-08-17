import { Inject, Injectable } from '@nestjs/common';
import { BaseUseCase } from '../shared/use-case.base';
import { RegistrarSocioDto } from './dtos/registrarSocio.dto';
import { SocioEntity } from 'src/domain/entities/Persona/Socio/socio.entity';
import {
  SOCIO_REPOSITORY,
  SocioRepository,
} from 'src/domain/entities/Persona/Socio/socio.repository';
import {
  APP_LOGGER_SERVICE,
  IAppLoggerService,
} from 'src/domain/services/logger.service';
import { UsuarioEntity } from 'src/domain/entities/Usuario/usuario.entity';
import {
  IPasswordEncrypterService,
  PASSWORD_ENCRYPTER_SERVICE,
} from 'src/domain/services/password-encrypter.service';
import { Rol } from 'src/domain/entities/Usuario/Rol';
import {
  USUARIO_REPOSITORY,
  UsuarioRepository,
} from 'src/domain/entities/Usuario/usuario.repository';
import { ConflictError } from 'src/domain/exceptions/custom-exceptions';

@Injectable()
export class RegistrarSocioUseCase implements BaseUseCase {
  constructor(
    @Inject(SOCIO_REPOSITORY) private readonly socioRepository: SocioRepository,
    @Inject(USUARIO_REPOSITORY)
    private readonly usuarioRepository: UsuarioRepository,
    @Inject(APP_LOGGER_SERVICE) private readonly logger: IAppLoggerService,
    @Inject(PASSWORD_ENCRYPTER_SERVICE)
    private readonly passwordEncrypter: IPasswordEncrypterService,
  ) {}

  async execute(payload: RegistrarSocioDto): Promise<UsuarioEntity> {
    const foundUser = await this.usuarioRepository.findByEmail(payload.email);
    if (foundUser) {
      this.logger.warn(`El email ${payload.email} ya está registrado.`);
      throw new ConflictError('El email ya está registrado.');
    }

    const {
      nombre,
      apellido,
      fechaNacimiento,
      telefono,
      genero,
      direccion,
      ciudad,
      provincia,
    } = payload;

    const socioEntity = new SocioEntity(
      null,
      nombre,
      apellido,
      fechaNacimiento,
      telefono,
      genero,
      direccion,
      ciudad,
      provincia,
      [],
      null,
      [],
    );

    const socioCreado = await this.socioRepository.save(socioEntity);

    this.logger.log(
      `Socio ${socioCreado.idPersona} registrado: ${socioCreado.nombre}`,
    );
    this.logger.log(`Creando Usuario para el socio ${socioCreado.idPersona}`);

    const contraseñaEncriptada = await this.passwordEncrypter.encryptPassword(
      payload.contraseña,
    );

    const usuario = new UsuarioEntity(
      null,
      payload.email,
      contraseñaEncriptada,
      socioCreado,
      Rol.SOCIO,
    );

    const usuarioCreado = await this.usuarioRepository.save(usuario);

    usuarioCreado.persona = socioCreado;

    return usuarioCreado;
  }
}
