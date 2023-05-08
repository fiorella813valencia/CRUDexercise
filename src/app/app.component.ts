import {Component, OnInit} from '@angular/core';
import {ObjAddEditComponent} from "./public/obj-add-edit/obj-add-edit.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {EmployeeService} from "./services/employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //implements OnInit
  title = 'CRUDexercise';

  constructor(private _dialog: MatDialog,
              private _empService:EmployeeService){}

  // ngOnInit():void {
  //   this.getEmployeeList();
  // }

  openAddEditEmpForm(){
    const dialogRef=this._dialog.open(ObjAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this._empService.getEmployee();
        }
      }
    })

  }
  // getEmployeeList(){
  //   this._empService.getEmployee().subscribe({
  //     next:(res)=>{
  //       console.log(res)
  //     },
  //     error:(err)=>{
  //        console.log(err)
  //     }
  //   });
  // }


}
