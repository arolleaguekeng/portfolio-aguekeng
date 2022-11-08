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
import { FooterComponent } from './components/footer/footer.component';
import { WorkListComponent } from './components/work-list/work-list.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ServicesComponent } from './components/services/services.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { HttpClientModule } from '@angular/common/http';

const portfolioRoute: Routes = [
  {path:'project/:id', component: ProjectDetailsComponent},
  {path:'home', component: HomeComponent},
  {path:'projects', component: ProjectListComponent},
  {path:'works', component: WorkListComponent},
  {path:'services', component: ServicesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    NavbarComponent,
    HomeComponent,
    ProjectListComponent,
    SearchProjectComponent,
    FooterComponent,
    WorkListComponent,
    AboutMeComponent,
    ServicesComponent,
    PageNotFoundComponent,
    ProjectDetailsComponent,
    CardProjectComponent
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
    HttpClientModule,

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
