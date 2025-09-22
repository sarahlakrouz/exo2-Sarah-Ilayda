import { Routes } from '@angular/router';
import {Liste} from "./liste/liste";
import {Gestion} from "./gestion/gestion";
import {Accueil} from "./accueil/accueil";
import {Contact} from './contact/contact';
import {NotFound} from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'liste', component: Liste},
  { path: 'accueil', component: Accueil},
  { path: 'gestion', component: Gestion},
  { path: 'contact', component: Contact},
  { path: '404', component: NotFound},
  { path: '**', component: Accueil },
];
