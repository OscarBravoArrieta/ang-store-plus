 import { NgModule } from '@angular/core'
 import { CommonModule } from '@angular/common'
 import { InputTextModule } from 'primeng/inputtext'
 import { ButtonModule } from 'primeng/button'
 import { ImageModule } from 'primeng/image'
 import { Menu } from 'primeng/menu'
 import { MenuModule } from 'primeng/menu'
 import { DynamicDialogModule } from 'primeng/dynamicdialog'

 @NgModule({
     declarations: [],
     imports: [
         CommonModule,
         ImageModule,
         InputTextModule,
         ButtonModule,
         Menu,
         MenuModule,
         DynamicDialogModule

     ],
     exports: [
         ButtonModule,
         ImageModule,
         InputTextModule,
         Menu,
         MenuModule,
         DynamicDialogModule
     ]
 })
 export class PrimeNgModule {}

