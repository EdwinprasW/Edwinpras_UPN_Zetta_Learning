import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'tes1',
      pathMatch:'full',
      loadChildren:()=>import('./tes1/tes1.module').then(mod=>mod.Tes1Module),
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
