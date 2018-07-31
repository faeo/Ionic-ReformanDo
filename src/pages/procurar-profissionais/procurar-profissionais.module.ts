import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcurarProfissionaisPage } from './procurar-profissionais';

@NgModule({
  declarations: [
    ProcurarProfissionaisPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcurarProfissionaisPage),
  ],
})
export class ProcurarProfissionaisPageModule {

  structure: any = { lower: 33, upper: 60 };

}

