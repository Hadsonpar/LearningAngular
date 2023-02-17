import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes=[
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent}
]

export const routing = RouterModule.forRoot(appRoutes);