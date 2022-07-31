import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos:Proyecto[]= [];
  constructor(private tokenService:TokenService,private proyectoService:ProyectoService ) { }
  isLogged = false ;

  ngOnInit(): void {
    this.loadProyecto();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged = false;
    }
  }
  loadProyecto():void{
    this.proyectoService.list().subscribe(
      data=>{
        this.proyectos=data
      }
    );
  }

  delete(id?:number):void{
    if(id != undefined){
      this.proyectoService.delete(id).subscribe(
        data => {
          this.loadProyecto();
        } ,err => {
          alert("Error : no se pudo Eliminar");
        }
      )
    }
  }

}
