import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {LoginFormComponent} from './login-form/login-form.component'
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

@NgModule({
    declarations: [
        LoginFormComponent,
    RegisterFormComponent,
    ProfileFormComponent,
    ProfileViewComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        LoginFormComponent,
    RegisterFormComponent,
    ProfileFormComponent,
    ProfileViewComponent
    ]
})
export class ComponentsModule {

}