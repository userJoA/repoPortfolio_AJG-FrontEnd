import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  namePro:string = '';
  imgPro:string = '';
  descriptionPro:string = '';
  constructor(private router:Router, private proyectoService: ProyectoService) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyecto = new Proyecto(this.namePro,this.imgPro,this.descriptionPro);
    this.proyectoService.create(proyecto).subscribe(
      data =>{
        alert("Nuevo Elemento agregado");
        this.router.navigate(['']);
      } , err =>{
        alert("Error al agregar elemento");
        this.router.navigate(['']);
      }
    )
  }

}
