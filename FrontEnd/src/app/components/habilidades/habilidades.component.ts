import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidad:Habilidad[] = [];

  constructor(private habilidadService: HabilidadService, private tokenService:TokenService) { }

  isLogged =false;
  ngOnInit(): void {
    this.loadHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadHabilidad(): void{
    this.habilidadService.list().subscribe(data => {this.habilidad = data});
  }

  delete(id?:number) {
    if(id != undefined){
      this.habilidadService.delete(id).subscribe(
        data => {
          this.loadHabilidad();
        } ,err =>{
          alert("Error : no se pudo borrar ");
        }
      )
    }
  }

}
