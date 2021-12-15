import { Routes, RouterModule } from '@angular/router';
import { ApplicationListingComponent } from './application-listing/application-listing.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'application',
    pathMatch:'full'
  },
  {  
    path:'application',
    component:ApplicationListingComponent 
  },
];

export const AuthenticationRoutes = RouterModule.forChild(routes);