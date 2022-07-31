export class Persona{
    id?:number;
    nombre: String;
    apellido: String;
    descripcion: String;
    contacto: String;

    constructor(nombre: String, apellido: String, descripcion: String, contacto: String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.contacto=contacto;
        this.descripcion=descripcion;
       
    }
}