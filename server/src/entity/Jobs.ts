import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { Suburbs } from './Suburbs';
import { Categories } from './Categories';

@Entity('jobs')
export class Jobs {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Suburbs, (suburb) => suburb.jobs)
  @JoinColumn({ name: 'suburb_id' })
  suburb: Suburbs;

  @ManyToOne(() => Categories, (category) => category.jobs)
  @JoinColumn({ name: 'category_id' })
  category: Categories;

  @Column({ name: 'suburb_id' })
  suburbId: number;

  @Column({ name: 'category_id' })
  categoryId: number;

  @Column()
  status: string;

  @Column({ name: 'contact_name' })
  contactName: string;

  @Column({ name: 'contact_phone' })
  contactPhone: string;

  @Column({ name: 'contact_email' })
  contactEmail: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  updatedAt: Date;

  // Add relationships getters/setters if needed
}
