import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ServicesComponent } from './components/services/services.component';
import { WorkListComponent } from './components/work-list/work-list.component';


// Define routes for project.
const routes: Routes = [
  
  
  {path: 'projects', component: ProjectListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'works', component: WorkListComponent},

  {path: 'services', component: ServicesComponent},
  { path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
