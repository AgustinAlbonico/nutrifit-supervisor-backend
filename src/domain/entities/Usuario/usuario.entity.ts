export class UsuarioEntity {
  email: string;
  contraseña: string;
  fechaHoraAlta: Date;

  constructor(
    email: string,
    contraseña: string,
    fechaHoraAlta: Date = new Date(),
  ) {
    this.email = email;
    this.contraseña = contraseña;
    this.fechaHoraAlta = fechaHoraAlta;
  }
}
