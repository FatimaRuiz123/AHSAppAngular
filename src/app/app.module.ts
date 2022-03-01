import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { ImageListComponent } from './components/image-list/image-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavigationComponent,
    ImagePreviewComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
