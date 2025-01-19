 import { NgModule } from '@angular/core'
 import { CommonModule } from '@angular/common'
 import { ButtonModule } from 'primeng/button'
 import { ImageModule } from 'primeng/image'
 import { Menu } from 'primeng/menu'
 import { MenuModule } from 'primeng/menu'

 @NgModule({
     declarations: [],
     imports: [
         CommonModule,
         ImageModule,
         ButtonModule,
         Menu,
         MenuModule,

     ],
     exports: [
         ButtonModule,
         ImageModule,
         Menu,
         MenuModule
     ]
 })
 export class PrimeNgModule {}

