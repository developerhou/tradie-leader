import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobModule } from './job-module/job.module';
import { Jobs } from './entity/Jobs';
import { Suburbs } from './entity/Suburbs';
import { Categories } from './entity/Categories';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database',
      port: 3306,
      username: 'root',
      password: 'hipages',
      database: 'hipages',
      entities: [Jobs, Suburbs, Categories],
      synchronize: false,
      logging: true,
    }),
    JobModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
