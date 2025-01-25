 import { Component, inject, signal } from '@angular/core'
 import { PrimeNgModule } from '@imports/primeng'
 import { AuthService } from '@services/auth.service'
 import { UsersService } from '@services/users.service'
 import { DynamicDialogRef } from 'primeng/dynamicdialog'
 import { jwtDecode }  from "jwt-decode"
 import { Validators, FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
 import { Router } from '@angular/router'
 import { UserToLog, Token  } from '@model/users.model'


 @Component({
     selector: 'app-login',
     imports: [
         PrimeNgModule,
         FormsModule,
         ReactiveFormsModule
     ],
     templateUrl: './login.component.html',
     styleUrl: './login.component.scss'
 })
 export class LoginComponent {

     private formBuilder = inject (FormBuilder)
     private authService = inject(AuthService)
     private usersService = inject(UsersService)
     private router = inject(Router)

     form!: FormGroup
     statusForm = signal(false)
     token = signal<Token>({"access_token":'', "refresh_token": ""})
     private ref = inject (DynamicDialogRef)

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
             //this.status = 'loading'
             const user: UserToLog = {
                 email: this.form.value.email,  //'john@mail.com',
                 password: this.form.value.password //'changeme'
             }
             this.authService.logIn(user).subscribe({
                 next: (token) => {
                     this.token.set(token)
                     this.authService.setToken(this.token())
                     let tokenDecoded = jwtDecode(this.token().access_token)
                     console.log('Decoded: ',tokenDecoded.sub)
                     this.authService.setCurrentUser(user.email)
                     this.ref.close(this.formBuilder)
                     this.router.navigate([''])
                     //location.reload();
                 }, error: (error: any) => {
                     //this.status = 'failed'
                     //this.messageService.add({ severity: 'error', summary: 'Error', detail: error.statusText})
                 }
             })
         }
     }

     // -------------------------------------------------------------------------------------------

 }
