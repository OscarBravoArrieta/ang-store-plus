 import { Component, inject, signal, AfterViewInit, ViewChild  } from '@angular/core'
 import { Validators, FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
 import { PrimeNgModule } from '@imports/primeng'
 import { AuthService } from '@services/auth.service'
 import { UsersService } from '@services/users.service'
 import { TokenService } from '@services/token.service'
 import { LocalStorageService } from '@services/local-storage.service'
 import { DynamicDialogRef } from 'primeng/dynamicdialog'

 import { Router } from '@angular/router'
 import { UserToLog, Token, User  } from '@model/users.model'


 @Component({
     selector: 'app-login',
     imports: [
         PrimeNgModule,
         FormsModule,
         ReactiveFormsModule,
     ],
     templateUrl: './login.component.html',
     styleUrl: './login.component.scss'
 })
 export class LoginComponent {

     private formBuilder = inject (FormBuilder)
     private authService = inject(AuthService)
     private usersService = inject(UsersService)
     private router = inject(Router)
     private localStorageService = inject(LocalStorageService)

     form!: FormGroup
     statusForm = signal(false)
     private ref = inject (DynamicDialogRef)
     errorFromApi = signal<string>('')

     //--------------------------------------------------------------------------------------------

     constructor() {

         this.buildForm()
     }

     //--------------------------------------------------------------------------------------------

     private buildForm() {

         this.form = this.formBuilder.group ({
             email: ['', Validators.compose([Validators.email, Validators.required])],
             password: ['',[Validators.required]],
         })

     }

     //--------------------------------------------------------------------------------------------

     get emailField() {

         return this.form.get('email')

     }

     get passwordField() {

         return this.form.get('password')
     }

     //--------------------------------------------------------------------------------------------

     login() {

         this.statusForm.set(this.form.invalid)

         if (this.form.valid) {
             const user: UserToLog = {
                 email: this.form.value.email,  //'john@mail.com',
                 password: this.form.value.password //'changeme'
             }

             this.authService.logIn(user).subscribe({
                 next: () => {
                     this.ref.close(this.formBuilder)

                 }, error: (error: any) => {
                     this.errorFromApi.set(error.statusText)
                 }
             })

             this.authService.currentUser$.subscribe(currentUser =>{

                 this.localStorageService.setItem('currentUser', currentUser)

             })
             //location.reload()

         }

     }

     // -------------------------------------------------------------------------------------------

     ngOnDestroy() {
         //this.router.navigate([''])

         if (this.ref) {
             this.ref.close()
         }

     }

 }
