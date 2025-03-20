import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/auth/admin-login/login.component';
import { ForgotComponent } from './Pages/auth/forgot/forgot.component';
import { HomeLoginComponent } from './Pages/auth/home-login/home-login.component';
import { RegistrationComponent } from './Pages/auth/registration/registration.component';


export const routes: Routes = [

    {
        path: '',
        loadChildren: () =>
          import('./routes/admin/admin.routes').then((m) => m.adminRoutes),
    },

    {
        path: 'admin-login',
        component: LoginComponent
    },
    {
        path: 'login',
        component: HomeLoginComponent
    },

    {
        path: 'forgot',
        component: ForgotComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
    },
];
