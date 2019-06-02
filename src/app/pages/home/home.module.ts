import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {HeaderModule} from '../../components/header/header.module';
import {MatButtonModule, MatTabsModule, MatTooltipModule} from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    MatTabsModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class HomeModule {
}
