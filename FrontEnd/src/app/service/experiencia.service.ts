import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expURL = 'http://localhost:8080/experiencia/'

  constructor(private httpClient: HttpClient) { }

  public getExperience(id:number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expURL+ `getExperiencia/${id}`);
  }

  public list(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'list');
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public edit(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `edit/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
