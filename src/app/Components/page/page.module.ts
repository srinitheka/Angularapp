import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { LeftComponent } from './Components/left/left.component';
import { RightComponent } from './Components/right/right.component';
import { HomepageComponent } from './Components/homepage/homepage.component';


@NgModule({
  declarations: [
    PageComponent,
    LeftComponent,
    RightComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule
  ]
})
export class PageModule { }
