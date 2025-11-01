import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AlunoDto } from './dto/aluno.dto';
import { AlunoService } from './aluno.service';

@Controller('aluno')
export class AlunoController {
    constructor(private alunoService: AlunoService) {}

    @Post()
    create(@Body() aluno: AlunoDto) {
        return this.alunoService.create(aluno);
    }

    @Get()
    findAll() {
        return this.alunoService.findAll();
    }

    @Get(':nome')
    findOne(@Param('nome') nome: string) {
        return this.alunoService.findOne(nome);
    }
    
}
