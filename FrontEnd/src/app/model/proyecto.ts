export class Proyecto {

  id?:number;
  namePro:string;
  imgPro:string;
  descriptionPro:string;

  constructor(namePro:string,imgPro:string,descriptionPro:string){
    this.namePro=namePro;
    this.imgPro=imgPro;
    this.descriptionPro=descriptionPro;
  }
}
