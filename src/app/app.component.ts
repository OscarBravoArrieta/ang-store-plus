
 import { Component } from '@angular/core'
 import { RouterOutlet } from '@angular/router'
 import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
 import { PrimeNgModule } from '@imports/primeng'
 import { HomeComponent } from '@products/home/home.component'

 @Component({

     selector: 'app-root',
     imports: [
         RouterOutlet,
         PrimeNgModule,
         FormsModule,
         ReactiveFormsModule,
         HomeComponent
     ],
     templateUrl: './app.component.html',
     styleUrl: './app.component.scss'
 })
 export class AppComponent {
     title = 'ang-store-plus'

 }
