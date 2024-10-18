import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async createNote(data: Prisma.NotesCreateInput) {
    return this.prisma.notes.create({
      data
    });
  }

  async deleteNote(id: number){
    return this.prisma.notes.delete({ where: {id}});
  }

  async updateNote(id: number, data: Prisma.NotesUpdateInput){
    return this.prisma.notes.update({
      where: {id},
      data,
    });
  }

  async getAllNotes(){
    return this.prisma.notes.findMany();
  }

  async getNoteById(id: number){
    const note = await this.prisma.notes.findUnique({
      where: { id },
    });

    if (!note) {
      throw new NotFoundException(`Note by ID ${id} was not found`);
    }

    return note;
  }
}
