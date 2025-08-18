import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
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
    const socioCreado = await this.socioRepository.save(
      this.toOrmEntity(entity),
    );
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

  private toOrmEntity(socio: SocioEntity) {
    const socioOrmEntity = new SocioOrmEntity();
    socioOrmEntity.idPersona = null;
    socioOrmEntity.nombre = socio.nombre;
    socioOrmEntity.apellido = socio.apellido;
    socioOrmEntity.fechaNacimiento = socio.fechaNacimiento;
    socioOrmEntity.genero = socio.genero;
    socioOrmEntity.ciudad = socio.ciudad;
    socioOrmEntity.provincia = socio.provincia;
    socioOrmEntity.telefono = socio.telefono;
    socioOrmEntity.direccion = socio.direccion;
    socioOrmEntity.fichaSalud = null;
    socioOrmEntity.planesAlimentacion = [];
    socioOrmEntity.turnos = [];
    return socioOrmEntity;
  }
}
