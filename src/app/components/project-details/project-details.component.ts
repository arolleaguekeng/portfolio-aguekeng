import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/projet';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project : Project|undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService : ProjectService,
  ) { }

  ngOnInit(): void {

    // To access the current route and retrieve the id
    const projectId: string|null = this.route.snapshot.paramMap.get('id');
    projectId ? this.projectService.getProjectById(+projectId)
    .subscribe(project => this.project = project)
      : this.project = undefined;
  }

}
