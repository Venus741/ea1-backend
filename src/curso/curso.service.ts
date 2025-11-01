import { Injectable, NotFoundException } from '@nestjs/common';
import { CursoDto } from './dto/curso.dto';

@Injectable()
export class CursoService {
    private cursos: CursoDto[] = [];

    create(curso: CursoDto) {
        curso.alunos = curso.alunos || [];
        this.cursos.push(curso);
        return curso;
    }

    findAll() {
        return this.cursos;
    }

    matricular(titulo: string, nome: string) {
        const curso = this.cursos.find(c => c.titulo === titulo);
        if (!curso) throw new NotFoundException("Curso não encontrado");

        curso.alunos?.push(nome);
        return curso;
    }

}
