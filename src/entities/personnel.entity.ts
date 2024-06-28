import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Announcement } from './announcement.entity';

@Entity({ name: 'users' })
export class Personnel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  firstname: string;

  @Column({ length: 255 })
  lastname: string;

  @Column({ length: 255 })
  email: string;

  @Column('text')
  department: string;

  @Column({ length: 255 })
  image_url: string;

  @OneToMany(() => Announcement, (announcement) => announcement.personnel)
  announcements: Announcement[];
}
