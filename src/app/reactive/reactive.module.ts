import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';


@NgModule({
  declarations: [
    DynamicPageComponent,
    BasicPageComponent,
    SwitchesPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
