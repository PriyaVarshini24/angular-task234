import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postchild',
  templateUrl: './postchild.component.html',
  styleUrls: ['./postchild.component.scss']
})
export class PostchildComponent {
  @Input() listPost : any = '';
}
