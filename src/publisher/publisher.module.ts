import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from './entities/publisher.entity';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';

@Module({
  imports: [TypeOrmModule.forFeature([Publisher])],
  controllers: [PublisherController],
  providers: [PublisherService],
  exports: [TypeOrmModule],
})
export class PublisherModule {}
