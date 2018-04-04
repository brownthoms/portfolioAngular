import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Section0Component } from "./section0/section0.component";
import { Section1Component } from "./section1/section1.component";
import { Section2Component } from "./section2/section2.component";
import { Section3Component } from "./section3/section3.component";
import { Section4Component } from "./section4/section4.component";

const routes: Routes = [
  { path: '', component: Section0Component },
  { path: 'section0', component: Section0Component },
  { path: 'section1', component: Section1Component },
  { path: 'section2', component: Section2Component },
  { path: 'section3', component: Section3Component },
  { path: 'section4', component: Section4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }
