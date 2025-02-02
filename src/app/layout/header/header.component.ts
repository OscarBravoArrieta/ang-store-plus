 import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
 import { Router } from '@angular/router'
 import { PrimeNgModule } from '@imports/primeng'
 import { LoginComponent } from '@products/auth/login/login.component'
 import { MenuItem } from 'primeng/api'
 import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
 import { AuthStore } from 'app/signal-store/auth.store'
 import { User } from '@model/users.model'
 import { AuthService } from '@services/auth.service'
 import { LocalStorageService } from '@services/local-storage.service'
 import { Subscription  } from 'rxjs'

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
     readonly authStore = inject(AuthStore)
     readonly authService = inject(AuthService)
     readonly localStorageService = inject(LocalStorageService)
     ref: DynamicDialogRef | undefined
     items: MenuItem[] | undefined
     currentUser!: User
     userNull!: User
     role = signal<string | undefined>('')
     isLogged = signal(false)

     ngOnInit() {

         this.getUserLogged()
         this.defineMenu()
     }

     //--------------------------------------------------------------------------------------------

     defineMenu() {

         this.items = [
             {
                 label: 'Users options',
                 items: [
                     {
                         label: this.currentUser ? 'User: ' + this.currentUser.name : '', disabled: true,
                         icon: 'pi pi-user'
                     },
                     {
                         label: this.currentUser ? 'Rol: ' + this.currentUser.role : '', disabled: true

                     },
                     {
                         label: 'Cerrar sesión',
                         icon: 'pi pi-sign-out',
                         command: (event) => {
                             this.authService.logOut()
                             location.reload()
                             //this.callLogin()

                         }
                     }
                 ]
             }
         ]
     }


     //--------------------------------------------------------------------------------------------
     getUserLogged() {

         let currentUser = this.localStorageService.getItem('currentUser') || ''
         this.currentUser = (currentUser ? currentUser : this.userNull)
         this.role.set(this.currentUser ? this.currentUser.role : '')
         this.isLogged.set(this.authService.isLogged())

     }

     //---------------------------------------------------------------------------------------------

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
