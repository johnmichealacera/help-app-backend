import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Personnel } from './personnel.entity';

@Entity({ name: 'announcements' })
export class Announcement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  personnel_id: string;

  @Column({ length: 255 })
  subject: string;

  @Column('text')
  description: string;

  @Column('date')
  date: Date;

  @ManyToOne(() => Personnel, (personnel) => personnel.announcements)
  @JoinColumn({ name: 'personnel_id' })
  personnel: Personnel;
}
