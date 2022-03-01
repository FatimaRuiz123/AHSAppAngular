import { ImplicitReceiver } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { image } from './interfaces/image';
import { ImageListComponent } from './components/image-list/image-list.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';

const routes: Routes = [
  {
    path: 'image',
    component: ImageListComponent 
  },
  {
    path:'image/new',
    component: FormularioComponent
  },
  {
    path:'image/:id',
    component:ImagePreviewComponent
  },
  {
    path:'',
    redirectTo: '/image',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
