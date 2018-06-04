import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoPage } from './todo';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    TodoPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoPage),
    HttpModule,
    
    
  ],
  providers:[
    HttpModule
  ]
})
export class TodoPageModule {}
