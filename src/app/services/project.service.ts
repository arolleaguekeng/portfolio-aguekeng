import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Project } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  // To get All Projects from Api.
  getProjectList(): Observable<Project[]> {
    return this.http.get<Project[]>('api/projects').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  // To get project bu Id
  getProjectById(id:number):Observable<Project|undefined>{
    return this.http.get<Project>(`api/projects/${id}`).pipe(
      tap((project => this.log(project))),
      catchError((error => this.handleError(error,undefined)))
    );
  }

  private log(response: any){
    console.table(response);
  }
 
  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }
}
