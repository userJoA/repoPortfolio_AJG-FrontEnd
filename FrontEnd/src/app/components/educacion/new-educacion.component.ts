import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  imgEdu: string='';
  titleEdu: string='';
  //yearsEdu: Date = ;
  durationEdu: string='';
  descriptionEdu: string='';

  constructor(private router : Router, private educacionService : EducacionService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion (this.imgEdu,this.titleEdu,this.durationEdu,this.descriptionEdu);
    this.educacionService.create(educacion).subscribe(
      data=>{
        alert("Nuevo elemento agregado");
        this.router.navigate(['']);
      },err=>{
        alert("Error al agregar nuevo elemento");
        this.router.navigate(['']);
      }
    )
  }
}
