import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-obj-add-edit',
  templateUrl: './obj-add-edit.component.html',
  styleUrls: ['./obj-add-edit.component.css']
})
export class ObjAddEditComponent implements OnInit{
  empForm:FormGroup;
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private _fb:FormBuilder,
    private _empService:EmployeeService,
    private _dialogRef: MatDialogRef<ObjAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.empForm=this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      college:'',
      experience:'',
      package:''
    })
  }

  onSubmitFunction(){
    if(this.empForm.valid){
      if(this.data){
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next:(val:any)=>{
            alert('Employee updated succesfully')
            this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          },
        });
      }else{
        this._empService.addEmployee(this.empForm.value).subscribe({
          next:(val:any)=>{
            alert('Employee added succesfully')
            this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          },
        });
      }

    }

  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

}
