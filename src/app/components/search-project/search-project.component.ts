import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.css']
})
export class SearchProjectComponent implements OnInit {
  value = 'Clear me';
  constructor() { }

  ngOnInit(): void {
  }

}
