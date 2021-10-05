class Personas {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
let edadDePersonas = [];
edadDePersonas.push(new Personas("Joaquin", 20))
edadDePersonas.push(new Personas("Emilia", 21))
edadDePersonas.push(new Personas("Julian", 29))
edadDePersonas.push(new Personas("Lucia", 23))

edadDePersonas.sort((a, b) => {
    if (a.edad > b.edad) {
        return -1
    }
    if (a.edad < b.eddad) {
        return 1
    }
    return 0
})

console.log(edadDePersonas);
