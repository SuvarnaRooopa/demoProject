import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './componentes/courses/courses.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Cultural Academy' },
  { path: 'courses', component: CoursesComponent },
];