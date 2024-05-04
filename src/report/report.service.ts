import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportEntity } from 'src/entities/report.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(ReportEntity)
    private readonly reportRepository: Repository<ReportEntity>,
  ) {}

  async createReport(bodyDto: any): Promise<ReportEntity[]> {
    try {
      const newReport = this.reportRepository.create({
        ...bodyDto,
        date: new Date(),
      });
      return this.reportRepository.save(newReport);
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to create report.');
    }
  }
}
