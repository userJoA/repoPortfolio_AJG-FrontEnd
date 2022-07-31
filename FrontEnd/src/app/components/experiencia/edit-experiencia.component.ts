import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  experiencia:Experiencia = null;

  constructor(private experienciaService:ExperienciaService, private activatedRoute: ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.getExperience(id).subscribe(
      data=>{
        this.experiencia=data;
      },err =>{
        alert("Error: No se pudo Modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onEdit(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.edit(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error: No se pudo Modificar");
         this.router.navigate(['']);
      }
    )
  }



}
