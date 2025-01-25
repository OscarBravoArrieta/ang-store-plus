 import { Component, inject, signal, SimpleChanges } from '@angular/core'
 import { PrimeNgModule } from '@imports/primeng'
 import { HeaderComponent } from '@layout/header/header.component'
 import { AuthService } from '@services/auth.service'


 @Component({
     selector: 'app-home',
     imports: [PrimeNgModule, HeaderComponent],
     templateUrl: './home.component.html',
     styleUrl: './home.component.scss'
 })
 export class HomeComponent {
     readonly authService = inject(AuthService)
     currentUser = signal('')

     ngOnInit() {

         this.getUserLogged()

     }

     //--------------------------------------------------------------------------------------------

     getUserLogged() {

         let currentUser = this.authService.getCurrentUser()
         this.currentUser.set(currentUser ? currentUser: '')

     }

     //--------------------------------------------------------------------------------------------


}
