
 import { Routes } from '@angular/router'
 import { AppComponent } from './app.component'

 export const routes: Routes = [
     {
         path: '',
         component: AppComponent,
         children: [
             {
                 path: 'products-store',
                 loadComponent:  () => import('../app/components/products/list-products/list-products.component')
             }
         ]
     },


 ]
