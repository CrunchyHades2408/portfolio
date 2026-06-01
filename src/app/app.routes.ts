import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Education } from './pages/education/education';
import { Experience } from './pages/experience/experience';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Playground } from './pages/playground/playground';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'education',
    component: Education
  },
  {
    path: 'experience',
    component: Experience
  },
  {
    path: 'projects',
    component: Projects
  },
  {
    path: 'skills',
    component: Skills
  },
  {
    path: 'playground',
    component: Playground
  },
  {
    path: 'contact',
    component: Contact
  }
];