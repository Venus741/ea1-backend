import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';
import { CursoController } from './curso/curso.controller';
import { CursoService } from './curso/curso.service';
import { CursoModule } from './curso/curso.module';

@Module({
  imports: [AlunoModule, CursoModule],
  controllers: [AppController, CursoController],
  providers: [AppService, CursoService],
})
export class AppModule {}
