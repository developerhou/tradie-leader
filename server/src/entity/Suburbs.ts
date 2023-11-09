import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Jobs } from './Jobs';

@Entity('suburbs')
export class Suburbs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  postcode: string;

  @OneToMany(() => Jobs, (job) => job.suburb)
  jobs: Jobs[];
}
