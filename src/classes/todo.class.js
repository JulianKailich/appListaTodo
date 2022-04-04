export class Todo {

    // Recibo la tarea que tengo que hacer
    constructor(tarea) {

        this.tarea      = tarea;

        this.id         = new Date().getTime();
        
        this.completado = false; 

        this.creado     = new Date();
    }

}