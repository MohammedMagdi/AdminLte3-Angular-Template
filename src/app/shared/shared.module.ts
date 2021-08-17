import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulesModule } from './materials-modules/material-modules.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModulesModule
  ]
})
export class SharedModule { }
