import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'main',
      loadChildren: () => import('./content/main/main.module')
        .then(m => m.MainModule)
    },
    {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    },
    /*  {
       path: '**',
       component: NotFoundComponent,
     }, */
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
