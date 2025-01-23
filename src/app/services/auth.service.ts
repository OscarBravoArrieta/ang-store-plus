 import { inject, Injectable } from '@angular/core'
 import { HttpClient } from '@angular/common/http'
 import { environment } from '@environments/environment'
 import { User, Email, UserToLog, EmailIsAvailable, Token } from '@model/users.model'

 @Injectable({
     providedIn: 'root'
 })
 export class AuthService {
     private http = inject(HttpClient)
     private readonly endPoint = environment.API_URL

     constructor() { }
     //--------------------------------------------------------------------------------------------

     logIn(user: UserToLog) {

         return this.http.post<Token>(`${this.endPoint}/auth/login/`, user)

     }

     //--------------------------------------------------------------------------------------------

     createUser(user: User) {

         return this.http.post<User>(`${this.endPoint}/users/`, user)

     }

     //--------------------------------------------------------------------------------------------
     checkEmail (objectEmail: Email) {

         return this.http.post<EmailIsAvailable>(`${this.endPoint}/users/is-available`, objectEmail)

     }
     //--------------------------------------------------------------------------------------------
 }
