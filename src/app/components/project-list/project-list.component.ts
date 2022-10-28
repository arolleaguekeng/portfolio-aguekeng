import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { Project } from 'src/app/models/projet';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectList: Project[]
  

  
  constructor(
    private router: Router,
    private http: HttpClient,
    private projectService : ProjectService
  ) { }

  goToProjectDetail(project: Project){
    this.router.navigate([`/project/${project.id}`])
  }

  ngOnInit(): void {
      this.projectService.getProjectList()
      .subscribe(projectList => this.projectList = projectList)
  }

  private log(response: any){
    console.table(response);
  }
  
  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }

}
