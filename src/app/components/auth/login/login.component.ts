 import { Component, inject, signal } from '@angular/core'
 import { PrimeNgModule } from '@imports/primeng'
 import { AuthService } from '@services/auth.service'
 import { DynamicDialogRef } from 'primeng/dynamicdialog'
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
     private router = inject(Router)

     form!: FormGroup
     statusForm = signal(false)
     token!: Token
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
                     this.token = token
                     console.log('Token:-> ', this.token.access_token)

                     this.ref.close(this.formBuilder)
                     //this.router.navigate(['dashboard/products-store'])
                 }, error: (error: any) => {
                     //this.status = 'failed'
                     //this.messageService.add({ severity: 'error', summary: 'Error', detail: error.statusText})
                 }
             })
         }
     }

     // -------------------------------------------------------------------------------------------

 }
