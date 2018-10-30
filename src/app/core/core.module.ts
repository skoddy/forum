import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class CoreModule { }
