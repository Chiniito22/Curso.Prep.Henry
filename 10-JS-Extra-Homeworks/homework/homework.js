// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var Array =[];
  for (let clave in objeto){
    Array.push([clave, objeto[clave]])
  }
  return Array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var nuevoObjeto = {};
   for (var i=0;i<string.length;i++){
     if (!nuevoObjeto.hasOwnProperty(string[i])){
       nuevoObjeto[string[i]] = 1;
   } else {
    nuevoObjeto[string[i]]++;
   }
  }
  return nuevoObjeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusc = "";
  var minusc = "";
  for (var i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      mayusc += s[i];
    } else {
      minusc += s[i]
    }
  }
  return mayusc + minusc;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  //notas: primero divido la frase con un arreglo (split) para poder trabajar con cada palabra x separado
  //luego hago un for para ver el largo de la frase y empiezo a trabajar con cada
  //letra de cada palabra en la frase
  //luego revierto cada letra de la palabra 
  // y por ultimo uno cada palabra invertida con join para luego retornarlo 
  let esPejo =str.split(" ");
  for (var i = 0; i < esPejo.length;i++){
     esPejo[i] = esPejo[i].split("").reverse().join("");
  }
  return esPejo.join(" ");
    
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número es un número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  //Notas: lo primero es ver y pasar a un string mi propiedad (numero)
  //luego tengo que leerle de izquierda a derecha con un for invertido para ver si luego 
  //concuerdan con mi variable nueva
  // por ultimo tengo que comparar ambas variables para ver si son iguales y devolver
  // si son capicua o no
 let String = numero.toString(); //en el primer caso transformo mi numero en un string
 //let numInvertido = "";
  //for (var i = String.length -1; i >= 0; i-- ){
   //numInvertido = numInvertido + String[i];
// }
let numInvertido = String.split("").reverse().join("")
   if (numInvertido === String){
    return "Es capicua";
   }
   return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  //el primer paso es crear una variable nueva para guardar la nueva funcion
  //le sigue hacer un for para ver cada letra de la propiedad y ver si estan
  //las letras a,b y c
  //y por ultimo pregunto si en cada recorrida del for aparece alguna de esas
  //letras para eliminarlas y guardar el cambio en mi variable nueva
  let cadenaNueva = "";
  for (var i = 0; i < cadena.length; i++){
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
      cadenaNueva = cadenaNueva + cadena[i];
    }
  }   
  return cadenaNueva; 
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  //primero saber que tengo que crear un array nuevo donde voy a ordenar lo
  //que me pide
  //luego lo que hago es pasarle el comando sort a mi propiedad(mide longitud)
  //y necesito ponerle dos parametros mas dentro de mi propiedad para ver cual
  //es mas larga y asi agregar el nuevo valor al nuevo array 
  let nvoArray = [];
    for (var i = 0; i < arr.length; i++){
      nvoArray = arr.sort((a,b) => a.length - b.length);
    }
      return nvoArray;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  //lo primero es declar un nuevo arreglo donde voy a guardar las intersecciones
  // segundo paso es iterar cada arreglo para ver que tiene en cada posicion
  //ver con un for si son iguales cada elemento de cada arreglo y si lo son
  //guardarlo en el nuevo arreglo y cuando termine de iterar ambos agregarlo
  //al nuevo arreglo con un push!
  var interElementos = [];
    for (var i = 0;i < arreglo1.length;i++){
     for (var j = 0;j < arreglo2.length; j++){
        if(arreglo1[i] === arreglo2[j]){
         interElementos.push(arreglo1[i]);
     }
   }
  }
   return interElementos;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

