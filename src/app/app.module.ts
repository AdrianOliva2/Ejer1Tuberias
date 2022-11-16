import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JokeService } from './joke.service';
import { TuberiaPalabrasMalsonantesPipe } from './tuberia-palabras-malsonantes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JokeFormComponent,
    JokeListComponent,
    JokeComponent,
    TuberiaPalabrasMalsonantesPipe
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
