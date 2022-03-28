import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'page',
    pathMatch:'full'
  },
  {
    path:'page',
    loadChildren:()=>import("./Components/page/page.module").then(m=>m.PageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
