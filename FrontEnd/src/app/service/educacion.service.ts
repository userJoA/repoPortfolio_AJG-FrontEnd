import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  eduURL = 'https://appajgportfolioback.herokuapp.com/Educacion/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + 'List');
  }

  public find(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.eduURL + `Find/${id}`);
  }

  public create(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.eduURL + 'Create', educacion);
  }

  public edit(id: number, educacion:Educacion): Observable<any> {
    return this.httpClient.put<any>(this.eduURL + `Edit/${id}`, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.eduURL + `Delete/${id}`);
  }

}
