var hector = {
  nombre: 'hector',
  apellido: 'rodriguez',
  ocupacion: 'mecanico',
  estadoCivil: 'soltero',
  edad: 33
}

var erick = {
  nombre: 'erick',
  apellido: 'estrada',
  ocupacion: 'policia',
  estadoCivil: 'soltero',
  edad:55
}

function imprimeNombreYEdad({ nombre, apellido, edad, ocupacion, estadoCivil }) {
  console.log(nombre.toUpperCase())
  // console.log(apellido.toUpperCase())
  console.log(edad)
  console.log(ocupacion.toUpperCase())
  console.log(estadoCivil.toUpperCase())

}

imprimeNombreYEdad(erick)
imprimeNombreYEdad(hector)
// imprimeNombreYEdad({ nombre: 'pepito'})
