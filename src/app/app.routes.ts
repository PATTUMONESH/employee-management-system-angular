import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { MatError } from '@angular/material/form-field';



export const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'layout',component:LayoutComponent},
{path:'forgotPassword',component:ForgotPasswordComponent},
{path:'',component:LoginComponent,
    children:[
        {
            path:'dashboard',
            component:LayoutComponent
        }
    ]
}
];
