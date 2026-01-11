import { Routes } from '@angular/router';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

export const routes: Routes = [
  {
    path: '',
    component: IntroductionComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
