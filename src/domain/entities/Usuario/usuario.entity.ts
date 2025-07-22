export class UsuarioEntity {
  usuario: string;
  contraseña: string;
  fechaHoraAlta: Date;

  constructor(
    usuario: string,
    contraseña: string,
    fechaHoraAlta: Date = new Date(),
  ) {
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.fechaHoraAlta = fechaHoraAlta;
  }
}
