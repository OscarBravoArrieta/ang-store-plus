 import { Component, viewChild, ViewChild } from '@angular/core'
 import { RouterOutlet, RouterModule } from '@angular/router'
 import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
 import { PrimeNgModule } from '@imports/primeng'
 import { HeaderComponent } from '@layout/header/header.component'


 @Component({

     selector: 'app-root',
     imports: [
         RouterOutlet,
         RouterModule,
         PrimeNgModule,
         FormsModule,
         ReactiveFormsModule,
         HeaderComponent
     ],
     templateUrl: './app.component.html',
     styleUrl: './app.component.scss'
 })
 export class AppComponent {
     title = 'ang-store-plus'
     @ViewChild(HeaderComponent, {static: false}) childComp!: HeaderComponent;




     ngAfterViewInit() {


     }

     updateUser(){
        this.childComp.getUserLogged()
     }

 }
