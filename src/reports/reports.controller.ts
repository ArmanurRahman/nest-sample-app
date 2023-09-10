import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './Dto/create-report.dto';
import { AuthGuard } from '../guard/auth.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/user.entity';
import { Serialize } from '../interceptors/serialize.controller';
import { ReportDto } from './Dto/report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private reportService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto)
  createReview(@Body() report: CreateReportDto, @CurrentUser() user: User) {
    return this.reportService.create(report, user);
  }
}
