import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from '../../Pages/home/home.component';
import { RegistrationComponent } from '../../Pages/auth/registration/registration.component';


export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
    },
    ],
  },
];
