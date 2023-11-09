import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jobs } from 'src/entity/Jobs';
import { JobController } from './job.controller';
import { JobService } from './job.service';

@Module({
  imports: [TypeOrmModule.forFeature([Jobs])],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
