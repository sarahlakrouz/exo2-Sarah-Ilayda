import { Routes } from '@angular/router';
import {Liste} from "./liste/liste";
import {Gestion} from "./gestion/gestion";
import {Accueil} from "./accueil/accueil";

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'liste', component: Liste},
  { path: 'accueil', component: Accueil},
  { path: 'gestion', component: Gestion},
];
