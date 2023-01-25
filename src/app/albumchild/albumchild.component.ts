import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-albumchild',
  templateUrl: './albumchild.component.html',
  styleUrls: ['./albumchild.component.scss']
})
export class AlbumchildComponent {
@Input() listAlbum:any = '';
}
