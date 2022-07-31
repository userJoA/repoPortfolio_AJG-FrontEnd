import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  proURL = 'http://localhost:8080/Proyecto/'
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.proURL + 'List');
  }

  public find(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proURL + `Find/${id}`);
  }

  public create(proyecto:Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.proURL + 'Create', proyecto);
  }

  public edit(id: number, proyecto:Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.proURL + `Edit/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proURL + `Delete/${id}`);
  }
}
