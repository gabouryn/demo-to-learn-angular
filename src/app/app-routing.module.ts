import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingComponent } from './landing/landing.component';
import { FakeConsoleLandingComponent} from './fake-console/fake-console-landing.component'

const routes: Routes = [
  { path: 'rxjs-demo', component: RxjsDemoComponent },
  { path: 'home', component: LandingComponent },
  { path: 'fake-console', component: FakeConsoleLandingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
