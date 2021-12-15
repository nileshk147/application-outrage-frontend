import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationListingComponent } from './application-listing/application-listing.component';
import { ApplicationGraphComponent } from './application-graph/application-graph.component';
import { AuthenticationRoutes } from './application-routing.module';

import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    ApplicationListingComponent,
    ApplicationGraphComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutes,
    ChartsModule
  ]
})
export class ApplicationModule { }
