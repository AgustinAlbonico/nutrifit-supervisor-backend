import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SocioOrmEntity } from '../entities/persona.entity';
import { SocioEntity } from 'src/domain/entities/Persona/Socio/socio.entity';
import { SocioRepository } from 'src/domain/entities/Persona/Socio/socio.repository';

@Injectable()
export class SocioRepositoryImplementation implements SocioRepository {
  constructor(
    @InjectRepository(SocioOrmEntity)
    private readonly socioRepository: Repository<SocioOrmEntity>,
  ) {}

  async save(entity: SocioEntity): Promise<SocioEntity> {
    const socioOrmEntity = new SocioOrmEntity();
    socioOrmEntity.idPersona = null;
    socioOrmEntity.nombre = entity.nombre;
    socioOrmEntity.apellido = entity.apellido;
    socioOrmEntity.fechaNacimiento = entity.fechaNacimiento;
    socioOrmEntity.genero = entity.genero;
    socioOrmEntity.ciudad = entity.ciudad;
    socioOrmEntity.provincia = entity.provincia;
    socioOrmEntity.telefono = entity.telefono;
    socioOrmEntity.direccion = entity.direccion;
    socioOrmEntity.fichaSalud = null;
    socioOrmEntity.planesAlimentacion = [];
    socioOrmEntity.turnos = [];
    const socioCreado = await this.socioRepository.save(entity);
    return socioCreado;
  }

  async update(id: number, entity: SocioEntity): Promise<SocioEntity> {
    return entity;
  }

  async delete(id: number): Promise<void> {
    await this.socioRepository.delete(id);
  }

  async findAll(): Promise<SocioEntity[]> {
    return [];
  }
}
