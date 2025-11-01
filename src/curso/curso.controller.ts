import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CursoDto } from './dto/curso.dto';
import { CursoService } from './curso.service';

@Controller('curso')
export class CursoController {
    constructor(private cursoService: CursoService) {}

    @Post()
    create(@Body() curso: CursoDto) {
        return this.cursoService.create(curso);
    }

    @Get()
    findAll() {
        return this.cursoService.findAll();
    }

    @Post(':titulo/matricular/:nome')
    matricular(
        @Param('titulo') titulo: string,
        @Param('nome') nome: string,
    ) {
        return this.cursoService.matricular(titulo, nome);
    }
}
