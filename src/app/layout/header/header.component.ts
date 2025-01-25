 import { ChangeDetectionStrategy, Component, inject, input, SimpleChanges } from '@angular/core'
 import { Router } from '@angular/router'
 import { PrimeNgModule } from '@imports/primeng'
 import { LoginComponent } from '@products/auth/login/login.component'
 import { MenuItem } from 'primeng/api'
 import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
 import { AuthStore } from 'app/signal-store/auth.store'

 @Component({
     selector: 'app-header',
     imports: [PrimeNgModule],
     templateUrl: './header.component.html',
     'changeDetection': ChangeDetectionStrategy.OnPush,
     styleUrl: './header.component.scss',
     providers: [DialogService]
 })
 export class HeaderComponent {

     private router = inject(Router)
     private dialogService = inject(DialogService)
     readonly authStore = inject(AuthStore)
     ref: DynamicDialogRef | undefined
     items: MenuItem[] | undefined
     currentUser = input<string>()

     ngOnInit() {

         this.defineMenu()
         console.log(this.currentUser())

     }

     //--------------------------------------------------------------------------------------------

     defineMenu() {

         this.items = [
             {
                 label: 'Options',
                 items: [
                     {
                         label: this.currentUser(), disabled: true,
                         icon: 'pi pi-user'
                     },
                     {
                         label: 'Cerrar sesión',
                         icon: 'pi pi-sign-out'
                     }
                 ]
             }
         ]
     }

     //--------------------------------------------------------------------------------------------

     callLogin() {

         //this.router.navigate([''])
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
