import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FakeConsoleComponent } from './fake-console/fake-console.component';
import {EnterTextComponent} from './fake-console/enter-text.component';
import { FakeConsoleLandingComponent } from './fake-console/fake-console-landing.component';
import { FormsModule } from '@angular/forms';
import { FakeConsoleSendComponent } from './fake-console/fake-console-send/fake-console-send.component';
import { WaterJugComponent } from './water-jug/water-jug.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsDemoComponent,
    LandingComponent,
    PageNotFoundComponent,
    FakeConsoleComponent,
    FakeConsoleLandingComponent,
    EnterTextComponent,
    FakeConsoleSendComponent,
    WaterJugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
