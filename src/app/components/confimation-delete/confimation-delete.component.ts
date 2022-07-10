import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
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
  
    this.dialogRef.close(false);
  }
  borrar(){

    this.dialogRef.close(true);    
  }

}
