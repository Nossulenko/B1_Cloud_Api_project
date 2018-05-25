import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoinsPage } from './coins';


@NgModule({
  declarations: [
    CoinsPage,
  ],
  imports: [
    IonicPageModule.forChild(CoinsPage),
    HttpModule,
    
    
  ],
  providers:[
    HttpModule
  ]
})
export class CoinsPageModule {}
