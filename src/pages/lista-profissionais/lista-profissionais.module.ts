import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaProfissionaisPage } from './lista-profissionais';

@NgModule({
  declarations: [
    ListaProfissionaisPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaProfissionaisPage),
  ],
})
export class ListaProfissionaisPageModule {}
