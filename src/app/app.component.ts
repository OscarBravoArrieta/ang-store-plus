
 import { Component } from '@angular/core'
 import { RouterOutlet } from '@angular/router'
 import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
 import { PrimeNgModule } from '@imports/primeng'
 import { HeaderComponent } from '@layout/header/header.component'

 @Component({

     selector: 'app-root',
     imports: [
         RouterOutlet,
         PrimeNgModule,
         HeaderComponent,
         FormsModule,
         ReactiveFormsModule
     ],
     templateUrl: './app.component.html',
     styleUrl: './app.component.scss'
 })
 export class AppComponent {
     title = 'ang-store-plus'
 }
