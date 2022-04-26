console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("El valor por lado del Cuadro es: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro Cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Area es: " + areaCuadrado + "cm");

//Ejercicio 2
console.groupEnd();

console.group("Triangulo");

const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const ladoTriangulo3 = 4;

console.log("Los lados del Triangulo son: " 
+ladoTriangulo1 + "cm, " 
+ ladoTriangulo2 + "cm y " 
+ ladoTriangulo3 + "cm");

console.groupEnd();