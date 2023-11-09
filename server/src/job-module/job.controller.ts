import { Controller, Get, Put, Param, Body, Query } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  findAll(@Query() request: { status: string }) {
    return this.jobService.findAll(request.status);
  }

  @Put(':id')
  updateStatus(@Param('id') id: number, @Body() body: { status: string }) {
    return this.jobService.updateStatus(id, body.status);
  }
}
