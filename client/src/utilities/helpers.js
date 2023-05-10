export const suma = (num1, num2) => {
    if (typeof num1 != "number" || typeof num2 != "number") {
      return "No se puede enviar datos que no sean numeros"
    }
    return num1 + num2;
  }
  
  export const filtrarNumeroMasAlto = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        return "El array no debe tener datos distintos a numeros"
      }
      return Math.max.apply(null, arr);
    }
  }
  
  export const primerLetraMayuscula = (string) => {
    if (typeof string === "string") {
      let words = string.toLowerCase().split(" ");
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.substring(1);
      }
      return words.join(" ");
    }
    return "Debería contener solo string"
  }
  
  export const cualEsMayor = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return "Debería contener solo numeros";
    } 
    return Math.max(num1, num2);
  }