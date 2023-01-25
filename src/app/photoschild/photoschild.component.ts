import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photoschild',
  templateUrl: './photoschild.component.html',
  styleUrls: ['./photoschild.component.scss']
})
export class PhotoschildComponent {
@Input() listPhoto:any='';
}
