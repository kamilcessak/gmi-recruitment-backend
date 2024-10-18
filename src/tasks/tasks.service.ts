import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: Prisma.TasksCreateInput) {
    return this.prisma.tasks.create({
      data
    });
  }

  async deleteTask(id: number){
    return this.prisma.tasks.delete({ where: {id}});
  }

  async updateTask(id: number, data: Prisma.TasksUpdateInput){
    return this.prisma.tasks.update({
      where: {id},
      data,
    });
  }

  async getAllTasks(){
    return this.prisma.tasks.findMany();
  }

  async getTaskById(id: number){
    const task = await this.prisma.tasks.findUnique({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException(`Task by ID ${id} was not found`);
    }

    return task;
  }
}
