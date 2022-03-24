import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PipesModule } from './pipes/pipes.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    PokeHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
