import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { PurchasesController } from './controllers/purchases.controller';

import { CoursesService } from '../services/courses.service';
import { EnrollmentsService } from '../services/enrollments.service';
import { StudentsService } from '../services/students.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchasesController],
  providers: [CoursesService, EnrollmentsService, StudentsService],
})
export class MessagingModule {}
