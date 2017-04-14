import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProgrammasComponent } from './programmas/programmas.component';
import { ZwemmerbeheerComponent } from './zwemmerbeheer/zwemmerbeheer.component';
import { ProgrammabeheerComponent } from './programmabeheer/programmabeheer.component';
import { GebruikerbeheerComponent } from './gebruikerbeheer/gebruikerbeheer.component';
import { ProfielComponent } from './profiel/profiel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammasComponent,
    ZwemmerbeheerComponent,
    ProgrammabeheerComponent,
    GebruikerbeheerComponent,
    ProfielComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([      
      {
        path: 'programmas',
        component: ProgrammasComponent
      },
      {
        path: 'programmas/:id',
        component: ProgrammasComponent
      },
      {
        path: 'beheerz',
        component: ZwemmerbeheerComponent
      },
      {
        path: 'beheerp',
        component: ProgrammabeheerComponent
      },
      {
        path: 'beheerg',
        component: GebruikerbeheerComponent
      },
      {
        path: '',
        redirectTo: '/programmas',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: ProgrammasComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
