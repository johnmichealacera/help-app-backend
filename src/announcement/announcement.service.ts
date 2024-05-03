import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Announcement } from 'src/entities/announcement.entity';

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectRepository(Announcement)
    private readonly announcementRepository: Repository<Announcement>,
  ) {}

  async getAnnouncement(department: string): Promise<Announcement[]> {
    try {
      const announcements = await this.announcementRepository
        .createQueryBuilder('announcement')
        .leftJoinAndSelect('announcement.personnel', 'personnel')
        .where('personnel.department = :department', { department })
        .orderBy('announcement.date', 'DESC')
        .getMany();

      return announcements;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch announcements.');
    }
  }
}
