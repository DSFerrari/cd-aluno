import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
 students: Student[] = [
 ];
}
