import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Jobs } from './Jobs';

@Entity('categories')
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'parent_category_id' })
  parentCategoryId: number;

  @OneToMany(() => Jobs, (job) => job.category)
  jobs: Jobs[];

  // Add relationships getters/setters if needed
}
