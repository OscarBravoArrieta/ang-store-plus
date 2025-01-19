 import { Component } from '@angular/core'
 import { RouterOutlet } from '@angular/router'
 import { PrimeNgModule } from './imports/primeng'
 import { HeaderComponent } from './layout/header/header.component'

 @Component({

     selector: 'app-root',
     imports: [
         RouterOutlet,
         PrimeNgModule,
         HeaderComponent
     ],
     templateUrl: './app.component.html',
     styleUrl: './app.component.scss'
 })
 export class AppComponent {
     title = 'ang-store-plus'
 }
