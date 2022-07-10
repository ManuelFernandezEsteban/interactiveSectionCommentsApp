import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { ComponentsModule } from '../components/components.module';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    PagePrincipalComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatDialogModule
  ],
  exports:[
    PagePrincipalComponent
  ]
})
export class PagesModule { }
