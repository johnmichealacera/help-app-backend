import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/police')
  getPoliceAnnouncement(): string {
    return this.appService.getPoliceAnnouncement();
  }
  @Get('/hospital')
  getHospitalAnnouncement(): string {
    return this.appService.getHospitalAnnouncement();
  }
  @Get('/fire')
  getFireAnnouncement(): string {
    return this.appService.getFireAnnouncement();
  }
}
