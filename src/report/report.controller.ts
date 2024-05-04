import { Body, Controller, Post } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportEntity } from 'src/entities/report.entity';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post('/')
  async createReport(@Body() bodyDto: any): Promise<ReportEntity[]> {
    return this.reportService.createReport(bodyDto);
  }
}
