import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto:Proyecto=null;

  constructor(private activatedRouter:ActivatedRoute , private router:Router, private proyectoService:ProyectoService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.find(id).subscribe(
      data =>{
        this.proyecto=data;
      } , err => {
        alert("Error : no se puede modificar el componente")
        this.router.navigate(['']);
      }
    )
  }

  onEdit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.edit(id,this.proyecto).subscribe(
      data => {
        this.router.navigate(['/']);
      }, err =>{
        alert("Error:No se puede modificar el componente");
        this.router.navigate([' ']);
      }
    )
  }

}
