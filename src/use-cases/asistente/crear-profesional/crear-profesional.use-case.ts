import { UsuarioEntity } from 'src/domain/entities/Usuario/usuario.entity';
import { IUsuarioRepository } from 'src/domain/entities/Usuario/usuario.repository';
import { CrearProfesionalDto } from 'src/presentation/http/dtos/asistente/crear-profesional.dto';
import { PasswordGeneratorService } from 'src/use-cases/services/password-generator.service';

export class CrearProfesionalUseCase {
  constructor(
    private readonly usuarioRepository: IUsuarioRepository,
    private readonly passwordGeneratorService: PasswordGeneratorService,
  ) {}

  async execute(profesionalData: CrearProfesionalDto) {
    const foundUser = await this.usuarioRepository.findByUsername(
      profesionalData.usuario,
    );

    if (foundUser) {
      throw new Error('El nombre de usuario ya está en uso');
    }

    const generatedPassword = this.passwordGeneratorService.generatePassword();

    const usuario = new UsuarioEntity(
      profesionalData.usuario,
      generatedPassword,
    );
    return usuario;
  }
}
