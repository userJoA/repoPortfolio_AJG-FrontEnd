import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
  habilidad:Habilidad=null;
  constructor(private activatedRoute: ActivatedRoute , private router:Router, private habilidadService:HabilidadService) { }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.habilidadService.find(id).subscribe(
      data => {
        this.habilidad=data;
        },err =>{
          alert("Error: No se puede Modificar el componente");
          this.router.navigate(['']);
        }
      )
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadService.edit(id,this.habilidad).subscribe(
      data => {
        this.router.navigate(['/']);
      }, err =>{
        alert("Error:No se puede modificar el componente");
        this.router.navigate([' ']);
      }
    )
  }
}
