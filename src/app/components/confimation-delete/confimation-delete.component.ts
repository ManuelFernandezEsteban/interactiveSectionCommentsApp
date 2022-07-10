import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confimation-delete',
  templateUrl: './confimation-delete.component.html',
  styleUrls: ['./confimation-delete.component.sass']
})
export class AppConfimationDelete implements OnInit {

  constructor(public dialogRef:MatDialogRef<AppConfimationDelete>) { }

  ngOnInit(): void {
    
  }

  cancelar(){
    console.log('cancelar')
    this.dialogRef.close()
  }
  borrar(){
    console.log('borrar')
    this.dialogRef.close()
  }

}
