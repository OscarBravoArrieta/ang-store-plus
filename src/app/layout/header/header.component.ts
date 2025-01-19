 import { Component } from '@angular/core'
 import { PrimeNgModule } from '../../imports/primeng'
 import { MenuItem } from 'primeng/api'

 @Component({
     selector: 'app-header',
     imports: [PrimeNgModule],
     templateUrl: './header.component.html',
     styleUrl: './header.component.scss'
 })
 export class HeaderComponent {
     items: MenuItem[] | undefined;

     ngOnInit() {
         this.items = [
             {
                 label: 'Options',
                 items: [
                     {
                         label: 'Refresh',
                         icon: 'pi pi-refresh'
                     },
                     {
                         label: 'Export',
                         icon: 'pi pi-upload'
                     }
                 ]
             }
         ]
     }

 }
