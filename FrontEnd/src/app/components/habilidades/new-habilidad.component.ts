import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';


@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {
  imgHab:string = '';
  nameHab: string = '';
  progressHab: number = 0;


  constructor(private router : Router, private habilidadService: HabilidadService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const habilidad = new Habilidad(this.imgHab,this.nameHab,this.progressHab);
    this.habilidadService.create(habilidad).subscribe(
      data => {
        alert("nuevo elemento agregado");
        this.router.navigate(['']);
      } ,err =>{
        alert("Error al agregar elemento");
        this.router.navigate(['']);
      }
    )
  }
}
