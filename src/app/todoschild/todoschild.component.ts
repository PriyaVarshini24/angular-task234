import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todoschild',
  templateUrl: './todoschild.component.html',
  styleUrls: ['./todoschild.component.scss']
})
export class TodoschildComponent {
@Input() listTodos:any='';
}
