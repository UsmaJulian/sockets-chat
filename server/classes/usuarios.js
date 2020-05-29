// LA CLASE SE ENCARGA DE TODOS LOS USUARIOS CONECTADOS
class Usuarios {

    constructor() {
        this.personas = [];

    }


    //AGREGAR PERSONA AL ARREGLO    
    agregarPersona(id, nombre, sala) {

            let persona = { id, nombre, sala };
            this.personas.push(persona);
            return this.personas;
        }
        //OBTENER PERSONA QUE COINCIDE CON ID
    getPersona(id) {
            let persona = this.personas.filter(persona => persona.id === id)[0];
            return persona;
        }
        //OBTENER TODAS LAS PERSONAS
    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
            let personaEnSala = this.personas.filter(persona => persona.sala === sala);
            return personaEnSala;
        }
        // BORRAR PERSONA (PERSONA ABANDONA EL CHAT)
    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(persona => persona.id != id);
        return personaBorrada;
    }

}
module.exports = {
    Usuarios
}