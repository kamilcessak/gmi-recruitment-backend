import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: Prisma.TasksCreateInput) {
    try {
      return this.prisma.tasks.create({
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'Invalid data provided for task creation. '
        );
      } else {
        throw new InternalServerErrorException(
          'An error occurred while creating the task.'
        );
      }
    }
  }

  async deleteTask(id: number) {
    try {
      return await this.prisma.tasks.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Task with ID ${id} not found for deletion.`
          );
        }
      }
      throw new InternalServerErrorException(
        'An error occurred while deleting the task.'
      );
    }
  }

  async updateTask(id: number, data: Prisma.TasksUpdateInput) {
    try {
      return await this.prisma.tasks.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Task with ID ${id} not found for update.`
          );
        }
      }
      throw new InternalServerErrorException(
        'An error occurred while updating the task.'
      );
    }
  }

  async getAllTasks() {
    try {
      return await this.prisma.tasks.findMany();
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occurred while retrieving tasks.'
      );
    }
  }

  async getTaskById(id: number) {
    const task = await this.prisma.tasks.findUnique({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException(`Task by ID ${id} was not found`);
    }

    return task;
  }
}
