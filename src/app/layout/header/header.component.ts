 import { Component, inject } from '@angular/core'
 import { Router } from '@angular/router'
 import { PrimeNgModule } from '@imports/primeng'
import { LoginComponent } from '@products/auth/login/login.component'
 import { MenuItem } from 'primeng/api'
 import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'

 @Component({
     selector: 'app-header',
     imports: [PrimeNgModule],
     templateUrl: './header.component.html',
     styleUrl: './header.component.scss',
     providers: [DialogService]
 })
 export class HeaderComponent {
     private router = inject(Router)
     private dialogService = inject(DialogService)
     ref: DynamicDialogRef | undefined;
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

     //--------------------------------------------------------------------------------------------

     callLogin() {

         this.router.navigate([''])
         this.ref = this.dialogService.open(LoginComponent, {
             header: 'Iniciar sesión',
             width: '30vw',
             closeOnEscape: false,
             contentStyle: { overflow: 'auto' },
             closable: true,
             draggable: true,
             modal:true,
             breakpoints: {
                 '960px': '75vw',
                 '640px': '90vw'
             },
         })

     }
     //--------------------------------------------------------------------------------------------

     ngOnDestroy() {

         if (this.ref) {
             this.ref.close();
         }
     }

     //--------------------------------------------------------------------------------------------

 }
