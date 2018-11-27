import {NavbarComponent} from './navbar/navbar.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {ShellComponent} from './shell.component';
import { EmptyCardComponent } from './empty-card/empty-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ShellComponent,
    EmptyCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: 'emptyCard', component: EmptyCardComponent},
        {path: '**', component: ShellComponent}
      ], {enableTracing: false}
    )
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
