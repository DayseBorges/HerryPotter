import {
  suma,
  filtrarNumeroMasAlto,
  primerLetraMayuscula,
  cualEsMayor,
} from "../utilities/helpers";

describe("Home", () => {
  test("Debería retornar la suma correcta de los números", () => {
    let response = suma(5, 5);
    expect(response).toBe(10);
  });
  test("Debería pasar como parametro apenas numeros", () => {
    let response = suma("5", 5);
    expect(response).toBe("No se puede enviar datos que no sean numeros");
  });
  test("Debería retornar el numero mas alto del array", () => {
    let response = filtrarNumeroMasAlto([1, 2, 3, 4, 5]);
    expect(response).toBe(5);
  });
  test("El array debería contener apenas numeros", () => {
    let response = filtrarNumeroMasAlto(["1", 2, 3, 4, 5]);
    expect(response).toBe("El array no debe tener datos distintos a numeros");
  });
  test("Solo debe contener string", () => {
    let response = primerLetraMayuscula("la programación es hermosa!");
    expect(typeof response).toBe("string");
  });
  test("Debería contener solo string", () => {
    let response = primerLetraMayuscula([1, 2, 3]);
    expect(typeof response).toBe("string");
  });
  test("Cada palabra del texto del string debe empezar con mayuscula ej : Hola Soy Un Texto", () => {
    let response = primerLetraMayuscula("la programación es hermosa!");
    expect(response).toBe("La Programación Es Hermosa!");
  });
  test("Solo debe contener numeros", () => {
    let response = cualEsMayor(1, 2);
    expect(typeof response).toBe("number");
  });
  test("Debería contener solo numeros", () => {
    let response = cualEsMayor(1, "2");
    expect(response).toBe("Debería contener solo numeros");
  });
  test("Devuelve el numero mas alto entre numero 1 y 2", () => {
    let response = cualEsMayor(1, 2);
    expect(response).toBe(2);
  });
});
