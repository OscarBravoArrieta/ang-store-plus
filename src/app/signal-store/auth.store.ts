 import { computed, inject, signal } from "@angular/core"
import { Token, UserToLog } from "@model/users.model"
 import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals"
 import { AuthService } from "@services/auth.service"

 type userState = {

     user: string

 } // SignalState: https://ngrx.io/guide/signals/signal-s
// -----------------------------------------------------------------------------------------------

     const initialState: userState = {

     user: ''

 }

 // -----------------------------------------------

 export const AuthStore = signalStore(
     {providedIn: 'root'},
     withState(initialState),
     withMethods(
         (store, authService = inject(AuthService))=> ({

             setUser() {
                const token = signal<Token>({"access_token":'', "refresh_token": ""})

                const userToLog: UserToLog = {
                    email: 'john@mail.com',
                    password: 'changeme'
                }
             }
         })
     )
 )
 // -----------------------------------------------------------------------------------------------
