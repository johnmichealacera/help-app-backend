import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'reports' })
export class ReportEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, name: 'contact_number' })
  contactNumber: string;

  @Column({ length: 255 })
  department: string;

  @Column('text')
  description: string;

  @Column({ length: 255 })
  status: string;

  @Column('date')
  date: Date;
}
