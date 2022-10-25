import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projet';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projectList: Project[] = [
    {
      id: 1,
      name: "Exca Project",
      description: "Application des gestion des assurances",
      created: Date.prototype,
      statut: true,
      link: "link",
      picture:  "../../../assets/result_dash.png",
      createdAt: Date.prototype,
    }
  ]
  constructor() { }

  ngOnInit(): void {
      console.table(this.projectList)
  }

}
