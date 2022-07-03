import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    PagePrincipalComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  

  ],
  exports:[
    PagePrincipalComponent
  ]
})
export class PagesModule { }
