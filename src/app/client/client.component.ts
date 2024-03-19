import { Component } from '@angular/core';
import { Student } from './student';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
 students: Student[] = [];

 formGroupStudent : FormGroup;

 constructor(private formBuilder: FormBuilder){
  this.formGroupStudent = formBuilder.group({
      id : [''],
      name : [''],
      course : ['']
  });

 }
}
