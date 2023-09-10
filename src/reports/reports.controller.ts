import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './Dto/create-report.dto';
import { AuthGuard } from '../guard/auth.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/user.entity';
import { Serialize } from '../interceptors/serialize.controller';
import { ReportDto } from './Dto/report.dto';
import { ApproveReportDto } from './Dto/approve-report.dto';
import { AdminGuard } from 'src/guard/admin.guard';

@Controller('reports')
export class ReportsController {
  constructor(private reportService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto)
  createReview(@Body() report: CreateReportDto, @CurrentUser() user: User) {
    return this.reportService.create(report, user);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approveReport(@Param('id') id: string, @Body() body: ApproveReportDto) {
    return this.reportService.approveReport(id, body.approved);
  }
}
