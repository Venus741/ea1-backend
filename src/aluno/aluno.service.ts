import { Injectable, NotFoundException } from '@nestjs/common';
import { AlunoDto } from './dto/aluno.dto';

@Injectable()
export class AlunoService {
    private alunos: AlunoDto[] = [];

    create(aluno: AlunoDto) {
        this.alunos.push(aluno);
        return aluno;
    }

    findAll() {
        return this.alunos; 
    }

    findOne(nome: string) {
        const aluno = this.alunos.find(a => a.nome === nome);

        if(!aluno) throw new NotFoundException('Aluno não encontrado');
        return aluno;
    }

}
