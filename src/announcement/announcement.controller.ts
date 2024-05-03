import { Controller, Get, Param } from '@nestjs/common';
import { Announcement } from 'src/entities/announcement.entity';
import { AnnouncementService } from './announcement.service';

@Controller('announcements')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Get('/:department')
  async getAnnouncement(
    @Param('department') department: string,
  ): Promise<Announcement[]> {
    return this.announcementService.getAnnouncement(department);
  }
}
