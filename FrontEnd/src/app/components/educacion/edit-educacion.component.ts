import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion:Educacion = null;
  constructor(private activatedRoute: ActivatedRoute , private router:Router, private educacionService: EducacionService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.find(id).subscribe(
      data=>{
        this.educacion=data;
      },err =>{
        alert("Error: No se puede Modificar el componente");
        this.router.navigate(['']);
      }
    )
  }

  onEdit(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.edit(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error: No se pudo Modificar");
         this.router.navigate(['']);
      }
    )
  }

}
