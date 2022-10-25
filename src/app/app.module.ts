import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { RouterModule,Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { SearchProjectComponent } from './components/search-project/search-project.component';

const portfolioRoute: Routes = [
  {path:'projects', component: ProjectListComponent},
  {path:'home', component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    NavbarComponent,
    HomeComponent,
    ProjectListComponent,
    SearchProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    RouterModule.forChild(portfolioRoute),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
