import { cualEsMayor, filtrarNumeroMasAlto, primerLetraMayuscula, suma } from "./mockHelpers";

export const devolverElDobleDelMasAlto = (arr) => {
  if (arr.length === undefined || typeof arr === "string") {
    return "Debe ser un array";
  } else {
    let doble = filtrarNumeroMasAlto(arr);
    return doble * 2;
  }
};

export const convertirYverificarMayusculas = (string) => {
  const mayusculas = primerLetraMayuscula(string);
  const words = mayusculas.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstLetter = word.charAt(0);
    if (firstLetter !== firstLetter.toUpperCase()) {
      return "Error: el texto no tiene todas las primeras letras en mayuscula!";
    }
  }
  return true;
};

export const sumarleAlNumeroMasAlto = (numero1, numero2, numero3) => {
  if (typeof numero1 === "number" && typeof numero2 === "number", typeof numero3 === "number") {
    const mayor = cualEsMayor(numero1, numero2);
    const sumaMayorYNumero3 = suma(mayor, numero3)
    return sumaMayorYNumero3;
  } else {
    return "Datos invalidos"
  }
};
