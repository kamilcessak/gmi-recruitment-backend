import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
