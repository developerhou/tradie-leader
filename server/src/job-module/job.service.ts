import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jobs } from 'src/entity/Jobs';
import { Repository } from 'typeorm';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Jobs)
    private readonly jobRepository: Repository<Jobs>,
  ) {}

  findAll(status: string) {
    if (!['new', 'accepted', 'declined'].includes(status)) {
      throw new Error('Invalid status');
    }

    return this.jobRepository.find({
      where: { status: status },
      relations: ['suburb', 'category'],
    });
  }

  updateStatus(id: number, status: string) {
    if (!['new', 'accepted', 'declined'].includes(status)) {
      throw new Error('Invalid status');
    }

    return this.jobRepository.update({ id }, { status });
  }
}
