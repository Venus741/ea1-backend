import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';
import { CursoController } from './curso/curso.controller';
import { CursoService } from './curso/curso.service';
import { CursoModule } from './curso/curso.module';
import { AlunoController } from './aluno/aluno.controller';
import { AlunoService } from './aluno/aluno.service';

@Module({
  imports: [AlunoModule, CursoModule],
  controllers: [AppController, CursoController, AlunoController],
  providers: [AppService, CursoService, AlunoService],
})
export class AppModule {}
