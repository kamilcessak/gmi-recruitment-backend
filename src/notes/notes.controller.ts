import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Prisma } from '@prisma/client';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly  notesService: NotesService) {}

  @Post()
  async createNote(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.createNote(createNoteDto);
  }

  @Delete(':id')
  async deleteNote(@Param('id') id: string) {
    return this.notesService.deleteNote(+id);
  }

  @Patch(':id')
  async updateNote(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.updateNote(+id, updateNoteDto);
  }

  @Get()
  async getAllNotes() {
    return this.notesService.getAllNotes();
  }

  @Get(':id')
  async getNoteById(@Param('id') id: string) {
    return this.notesService.getNoteById(+id);
  }
}
