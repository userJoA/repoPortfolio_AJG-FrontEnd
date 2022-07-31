import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia:Experiencia[]=[];

  constructor(private experienciaService:ExperienciaService,private tokenService:TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.loadExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadExperiencia():void{
    this.experienciaService.list().subscribe(data =>{this.experiencia = data});
  }


  delete(id?:number) {
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(data =>{
        this.loadExperiencia();
      },err =>{
        alert("Error: No se pudo borrar la experiencia");
      }
      )
    }

  }


}
