import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childcomment',
  templateUrl: './childcomment.component.html',
  styleUrls: ['./childcomment.component.scss']
})
export class ChildcommentComponent {
  @Input() listComment : any = '';
}
