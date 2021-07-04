/**
 * Haciendo uso de las siguientes estructura y de los conceptos aprendidos 
 * en las lecturas anteriores:
 */

class Alumno {
    public nombre: string;
    public edad: number;
    public correo: string;
    public promedio: number;
  
    constructor(nombre: string, edad: number, correo: string, promedio: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.correo = correo;
      this.promedio = promedio;
    }
  }
  
  
  const alumnos: Array<Alumno> = [
    { nombre: "Jose Perez", edad: 22, correo: "jose@perez.com", promedio: 6 },
    { nombre: "Juan Perez", edad: 19, correo: "juan@perez.com", promedio: 7 },
    { nombre: "Maria Yepez", edad: 21, correo: "maria@yepez.com", promedio: 9 },
    { nombre: "Jose Uribe", edad: 23, correo: "jose@gmail.com", promedio: 5 },
    { nombre: "Juana Medina", edad: 18, correo: "juana@gmail.com", promedio: 7 },
    { nombre: "Maria Contreras", edad: 20, correo: "mariaC@gmail.com", promedio: 10 },
    { nombre: "Alan Brito", edad: 22, correo: "alan@brito.com", promedio: 5 },
    { nombre: "Angelica Galindo", edad: 19, correo: "angelica@galindo.com", promedio: 7 },
    { nombre: "Sara Castro", edad: 21, correo: "scastro@gmail.com", promedio: 6 },
    { nombre: "Carlos Marin", edad: 23, correo: "carlos@gmail.com", promedio: 8 },
    { nombre: "Karla Medina", edad: 18, correo: "Karla@gmail.com", promedio: 3 },
    { nombre: "Daniela Medina", edad: 20, correo: "danielamedinaC@gmail.com", promedio: 7 }
  ]

/**
 * Implemente las funciones que resuelvan los enunciados, implente una función por cada enunciado:
 * Ejercicio 01
 * - Devuelva una arreglo que contenga todos los estudiantes cuyo promedio es mayor a 6 puntos.
 */

function primeraFuncion(estudiante:Alumno[]):Alumno[]{
    return estudiante.filter(estudiante=>estudiante.promedio > 6)
};

console.log('Primera Respuesta', primeraFuncion(alumnos));

/**
 * Ejercicio 02
 * - Devuelva una lisita de los estudiantes cuyo promedio es menor a 6 puntos y la edad es mayor a 19 años.
 */

function segundaFuncion(estudiante:Alumno[]):Alumno[]{
    return estudiante.filter(estudiante => estudiante.promedio > 6 && estudiante.edad > 19)
};

console.log('Segunda Respuesta', segundaFuncion(alumnos));

/**
 * Ejercicio 03
 * - Devuelva un arreglo ordenado segun el promedio de forma ascendente.
 */

function promedioOrdenado(estudiante:Alumno[]):Alumno[]{
    return estudiante.sort((a:Alumno, b:Alumno) => a.promedio - b.promedio);
};

console.log('Promedio ordenado de forma ascendente: ', promedioOrdenado(alumnos));

/**
 * Ejercicio 04
 * - El profesor decidio otorgar 2 puntos a todos los estudiantes cuya nota es menor o igual a 4, 
 * devuelva un arreglo que cumpla con esta condición
 */

function ayudaPromedio(estudiante:Alumno[]):Alumno[]{
    return estudiante.map(estudiante => { return { ...estudiante, 
        promedio: estudiante.promedio < 4 ? estudiante.promedio + 2 : estudiante.promedio } })
};

console.log('Arreglo promedios con ayuda: ', ayudaPromedio(alumnos));

/**
 * Ejercicio 05
 * - Devuelva el promedio general de todos los alumnos
 */

 function promedioGeneral(estudiante:Alumno[]):number{
    return estudiante.map(prom => prom.promedio).reduce((previous:number, current:number) => current += previous)/estudiante.length
};

console.log('El promedio general de todos los alumnos es: ', promedioGeneral(alumnos));

