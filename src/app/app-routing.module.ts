import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { PurposeComponent }		from './purpose/purpose.component';
import { WelcomeComponent }		from './welcome/welcome.component';
import { DateComponent }		from './date/date.component';
import { LocationComponent }	from './location/location.component';
import { AgendaComponent }		from './agenda/agenda.component';
import { GalleryComponent }		from './gallery/gallery.component';
import { TeamsComponent }		from './teams/teams.component';
import { RateEventComponent }	from './rate-event/rate-event.component';
import { PollComponent }		from './poll/poll.component';


const routes: Routes = [
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'detail/:id', component: HeroDetailComponent },
	{ path: 'purpose', component: PurposeComponent },
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'date', component: DateComponent },
	{ path: 'location', component: LocationComponent },
	{ path: 'agenda', component: AgendaComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'teams', component: TeamsComponent },
	{ path: 'poll', component: PollComponent },
	{ path: 'rate-event', component:RateEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
