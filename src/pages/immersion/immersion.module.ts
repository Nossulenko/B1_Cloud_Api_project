import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImmersionPage } from './immersion';


@NgModule({
  declarations: [
    ImmersionPage,
  ],
  imports: [
    IonicPageModule.forChild(ImmersionPage),
    HttpModule,
    
    
  ],
  providers: [
    HttpModule
  ]
})
export class ImmersionPageModule {}
