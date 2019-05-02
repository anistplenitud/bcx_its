import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- ngModels

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurposeComponent } from './purpose/purpose.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LocationComponent } from './location/location.component';
import { DateComponent } from './date/date.component';
import { NavigateComponent } from './navigate/navigate.component';
import { ResourcesComponent } from './resources/resources.component';
import { AgendaComponent } from './agenda/agenda.component';
import { TeamsComponent } from './teams/teams.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PollComponent } from './poll/poll.component';
import { RateEventComponent } from './rate-event/rate-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PurposeComponent,
    WelcomeComponent,
    LocationComponent,
    DateComponent,
    NavigateComponent,
    ResourcesComponent,
    AgendaComponent,
    TeamsComponent,
    GalleryComponent,
    PollComponent,
    RateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
