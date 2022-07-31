import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private educacionService: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadEducation();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  loadEducation(): void {
    this.educacionService.list().subscribe(data => {this.educacion = data});
  }

  delete(id?:number) {
    if(id != undefined){
      this.educacionService.delete(id).subscribe(data =>{
        this.loadEducation();
      },err =>{
        alert("Error: No se pudo borrar");
      }
      )
    }

  }

}
