import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { Project } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  baseUrl: string ='http://127.0.0.1:8000/portfolio/api'
  constructor(
    private http: HttpClient) { }


  // To get All Projects from Api.
  getProjectList(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/get-all-projects`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }


  // To get project bu Id
  getProjectById(id:number):Observable<Project|undefined>{
    return this.http.get<Project>(`${this.baseUrl}/projects/${id}`).pipe(
      tap((project => this.log(project))),
      catchError((error => this.handleError(error,undefined)))
    );
  }

  private log(response: any){
    console.table(response);
  }
 
  private handleError(error: Error, errorValue: any){
    console.log("**********Can not get data from Api************");
    console.error(error);
    return of(errorValue);
  }




}
