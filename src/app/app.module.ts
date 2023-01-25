import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { PostchildComponent } from './postchild/postchild.component';
import { ChildcommentComponent } from './childcomment/childcomment.component';
import { AlbumchildComponent } from './albumchild/albumchild.component';
import { PhotoschildComponent } from './photoschild/photoschild.component';
import { TodoschildComponent } from './todoschild/todoschild.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PostchildComponent,
    ChildcommentComponent,
    AlbumchildComponent,
    PhotoschildComponent,
    TodoschildComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
  ],
})
export class AppModule {}
