/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arre = []
   for (var prop in objeto ){
      arre.push([prop, objeto[prop]])
   }
   return arre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var NewString = string.split("").sort()
   var alfabeto = {}
   for (let i = 0; i < NewString.length; i++){
      var x = 0
      for (let ix = 0; ix < NewString.length; ix++){
         if (NewString[i] == NewString[ix]){
            x++
         }
      } alfabeto[NewString[i]] = x
   }
   return alfabeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var NewString = ""
   var May = ""
   var min = ""
   for (let i = 0; i < string.length; i++){
      if (string[i] >= "A" && string[i] <= "Z" ){
      May += string[i]
      } else {
         if(string[i] >= "a" && string[i] <= "z"){
            min += string[i]
         }
      }
      
   }
   return NewString = May + min
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arr = []
   var NewString = ""
   arr = frase.split("").reverse().join("")
   NewString = arr.split(" ").reverse().join(" ")
   return NewString;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var reverse = numero.toString().split("").reverse().join("")
   if (numero == reverse){
      return "Es capicua"
   } return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/[abc]/g, "")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length)
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var array = []
   if (array1.length < array2.length){
      for(let i = 0; i<array1.length; i++){
         for(let x = 0; x < array2.length; x++){
            if(array1[i] === array2[x]){
               array.push(array1[i])
            }

         }
      }
   }
   else if (array1.length > array2.length){
      for(let j = 0; j<array2.length; j++){
         for(let xa = 0; xa < array1.length; xa++){
            if(array2[j] === array1[xa]){
               array.push(array1[xa])
            }

         }
      }
   }
   if(array === 0){
      return array
   }
   return array;


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
