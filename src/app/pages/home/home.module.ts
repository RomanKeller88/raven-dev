import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {HeaderModule} from '../../components/header/header.module';
import {MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    MatTabsModule
  ]
})
export class HomeModule {
}
