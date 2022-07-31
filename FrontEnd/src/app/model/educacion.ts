export class Educacion {
    id?: number;
    imgEdu: string;
    titleEdu: string;
   // yearsEdu: Date;
    durationEdu: string;
    descriptionEdu: string;

    constructor(imgEdu: string, titleEdu: string, durationEdu: string,descrptionEdu: string) {
        this.imgEdu = imgEdu;
        this.titleEdu = titleEdu;
       // this.yearsEdu = yearsEdu;
        this.durationEdu = durationEdu;
        this.descriptionEdu = descrptionEdu;
    }


}
