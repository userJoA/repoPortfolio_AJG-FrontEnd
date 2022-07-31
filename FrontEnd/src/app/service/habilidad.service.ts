import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  habURL = 'http://localhost:8080/Habilidad/'
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habURL + 'List');
  }

  public find(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.habURL + `Find/${id}`);
  }

  public create(habilidad:Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.habURL + 'Create', habilidad);
  }

  public edit(id: number, habilidad:Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.habURL + `Edit/${id}`, habilidad);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habURL + `Delete/${id}`);
  }

}
