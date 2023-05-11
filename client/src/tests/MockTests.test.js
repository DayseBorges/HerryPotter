import { filtrarNumeroMasAlto, primerLetraMayuscula, cualEsMayor, suma } from "../utilities/mockHelpers"
import { devolverElDobleDelMasAlto, convertirYverificarMayusculas, sumarleAlNumeroMasAlto} from "../utilities/helpers"
jest.mock("../utilities/mockHelpers")

describe("Mock Functions", () => {
    test("Devuelve el doble del numero mas alto del array", () => {
        filtrarNumeroMasAlto.mockReturnValueOnce(5)
        let response = devolverElDobleDelMasAlto([1, 2, 3, 4, 5])
        expect(response).toBe(10)
    });
    test("No puede devolver otro dato que no sea un numero", () => {
        filtrarNumeroMasAlto.mockReturnValueOnce(5)
        let response = devolverElDobleDelMasAlto([1, 2, 3, 4, 5])
        expect(typeof response).toBe("number")
    });
    test("No puede recibir otro dato que no sea un Array", () => {
        filtrarNumeroMasAlto.mockReturnValueOnce(5)
        let response = devolverElDobleDelMasAlto({a: 1, b: 2, c: 3})
        expect(response).toBe("Debe ser un array")
    });
    test("Devuelve un mensaje positivo si es que todas la palabras del texto empiezan en mayuscula", () => {
        primerLetraMayuscula.mockReturnValueOnce("La Programación Es Hermosa!")
        let response = convertirYverificarMayusculas("la programación es hermosa!")
        expect(response).toBe(true)
    })
    test("Solo puede recibir texto", () => {
        const text = "la programación es hermosa!";
        primerLetraMayuscula.mockReturnValueOnce("La Programación Es Hermosa!")
        convertirYverificarMayusculas(text)
        expect(typeof text).toBe("string")
    })
    test("Devuelve un mensaje de error si alguna palabra no empieza con mayuscula", () => {
        primerLetraMayuscula.mockReturnValueOnce("la Programación Es Hermosa!")
        let response = convertirYverificarMayusculas("la programación es hermosa!")
        expect(response).toBe("Error: el texto no tiene todas las primeras letras en mayuscula!")
    })
    test("Devuelve la suma del mayor de los dos primeros numeros mas el tercer numero", () => {
        cualEsMayor.mockReturnValueOnce(10)
        suma.mockReturnValueOnce(15)
        let response = sumarleAlNumeroMasAlto(5, 10, 5)
        expect(response).toBe(15)
    })
})