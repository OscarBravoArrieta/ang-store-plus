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

     setToken(token: Token): void {

         try {

             localStorage.setItem('token', JSON.stringify(token))

         } catch (error) {

             console.error('Error saving token ', error)

         }
     }

     //--------------------------------------------------------------------------------------------

     setCurrentUser (userName: string): void {

         try {

             localStorage.setItem('currentUser', JSON.stringify(userName))

         } catch (error) {

             console.error('Error saving userNAme ', error)

         }

     }

     //-------------------------------------------------------------------------------------------

     getToken(): string | null{

         try {

             const token = localStorage.getItem('token')
             return token ? JSON.parse(token) : null

         } catch (error) {
             console.error('Error loading cart state ', error)
             return null

         }

     }

     //--------------------------------------------------------------------------------------------

     getCurrentUser(): string | null {

         let currentUser = null

         try {

             if (typeof window !== 'undefined') {

                 const storage = localStorage.getItem('currentUser') ? localStorage.getItem('currentUser') : null
                 if (storage) {
                     currentUser = JSON.parse(storage)
                 }
                 return currentUser
             }

             return null


         } catch (error) {

             console.error('Error loading currentUser ', error)
             return null

         }

     }

     //--------------------------------------------------------------------------------------------


     loggIn() {

         return !!localStorage.getItem('currentUser')

     }

     // -----------------------------------------------------------------------------------------------
 }
