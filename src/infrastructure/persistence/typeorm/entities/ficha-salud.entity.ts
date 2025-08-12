import { NivelActividadFisica } from 'src/domain/entities/FichaSalud/NivelActividadFisica';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PatologiaEntity } from 'src/domain/entities/FichaSalud/patologia.entity';
import { AlergiaEntity } from 'src/domain/entities/FichaSalud/alergia.entity';
import { Type } from 'class-transformer';

@Entity('ficha_salud')
export class FichaSaludOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_ficha_salud' })
  idFichaSalud: number;

  @Column({ name: 'altura', type: 'int' })
  altura: number;

  @Column({ name: 'peso', type: 'decimal', precision: 5, scale: 2 })
  peso: number;

  @Column({
    name: 'fecha_creacion',
    type: 'date',
  })
  @Type(() => Date)
  fechaCreacion: Date;

  @Column({
    name: 'objetivo_personal',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  objetivoPersonal: string | null;

  @Column({
    name: 'nivel_actividad_fisica',
    type: 'enum',
    enum: NivelActividadFisica,
  })
  nivelActividadFisica: NivelActividadFisica;

  @ManyToMany(() => PatologiaOrmEntity, {
    eager: true,
    nullable: true,
  })
  @JoinTable({
    name: 'ficha_salud_patologias',
    joinColumn: {
      name: 'id_ficha_salud',
      referencedColumnName: 'idFichaSalud',
    },
    inverseJoinColumn: {
      name: 'id_patologia',
      referencedColumnName: 'idPatologia',
    },
  })
  patologias: PatologiaEntity[];

  @ManyToMany(() => AlergiaOrmEntity, {
    eager: true,
    nullable: true,
  })
  @JoinTable({
    name: 'ficha_salud_alergias',
    joinColumn: {
      name: 'id_ficha_salud',
      referencedColumnName: 'idFichaSalud',
    },
    inverseJoinColumn: {
      name: 'id_alergia',
      referencedColumnName: 'idAlergia',
    },
  })
  alergias: AlergiaEntity[];
}

@Entity('patologia')
export class PatologiaOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_patologia' })
  idPatologia: number;

  @Column({ name: 'nombre', type: 'varchar', length: 100 })
  nombre: string;
}

@Entity('alergia')
export class AlergiaOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_alergia' })
  idAlergia: number;

  @Column({ name: 'nombre', type: 'varchar', length: 100 })
  nombre: string;
}
