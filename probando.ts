//TIPOS BÁSICOS
// nombre de mi constante : el tipo de dato = el valor
const city : string = "Guadalajara";
const population : number = 1500000;
const isCapital : boolean = false;

// tipando arrays
const alumn : string[] = ["Ana", "Pedro", "María"];
const grades : Array<number> = [7, 8, 9, 10];

//Si vamos a tener diferentes tipos de datos dentro del array el orden del tipado importa. A este tipo de array se les conoce con el nombre de tupla

const miTupla: [number, string] = [1, 'Hola']

//TIPOS ESTRUCTURADOS
//tipando objetos

interface Coder {
    name: string;
    age: number;
    languages: string[];
    isGraduate: boolean;
}

const ana :Coder = {
    name: "Ana",
    age: 30,
    languages: ["JS", "TS", "Python"],
    isGraduate: true
}

