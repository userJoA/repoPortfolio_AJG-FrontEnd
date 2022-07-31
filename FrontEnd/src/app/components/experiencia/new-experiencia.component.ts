import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExperiencia: string = '';
  descripcionExperiencia: string = '';

  constructor(private experienciaService: ExperienciaService,private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const experiencia= new Experiencia(this.nombreExperiencia,this.descripcionExperiencia);
    this.experienciaService.save(experiencia).subscribe(
      data => {
        alert("Experiencia agregada");
        this.router.navigate(['']);
      },err =>{
        alert("error");
        this.router.navigate(['']);
      }
    )
  }
}
