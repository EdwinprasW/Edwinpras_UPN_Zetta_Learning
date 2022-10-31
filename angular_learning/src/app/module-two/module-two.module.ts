import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTwoOneComponent } from './component-two-one/component-two-one.component';
import { ComponentTwoTwoComponent } from './component-two-two/component-two-two.component';
import { ComponentTwoThreeComponent } from './component-two-three/component-two-three.component';



@NgModule({
  declarations: [
    ComponentTwoOneComponent,
    ComponentTwoTwoComponent,
    ComponentTwoThreeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleTwoModule { }
