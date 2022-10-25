import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';


// Define routes for project.
const routes: Routes = [
  
  {path: 'projects', component: ProjectListComponent},
  { path: '', redirectTo:'home', pathMatch:'full'},
  //{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
