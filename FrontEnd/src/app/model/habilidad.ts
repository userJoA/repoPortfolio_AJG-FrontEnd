export class Habilidad {
    id?:number;
    imgHab: string;
    nameHab:string;
    progressHab: number;

    constructor(imgHab:string, nameHab : string,progressHab : number) {
        this.imgHab= imgHab;
        this.nameHab= nameHab;
        this.progressHab= progressHab;
    }
    


}
