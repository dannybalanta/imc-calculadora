input.onButtonPressed(Button.A, function () {
    // si se presiona el botón A
    // aumente la masa actual en una unidad
    masa += 1
    // muestre el valor actual de la masa corporal
    basic.showNumber(masa)
    // pausa de 1 segundo
    basic.pause(1000)
    // limpiar pantalla
    basic.clearScreen()
})
/**
 * inicialice altura en 0
 */
/**
 * inicialice imc en 0
 */
input.onButtonPressed(Button.AB, function () {
    // al presionar el botón A+B
    // defina masa como 74 kg
    masa = 74
    // defina altura como 180 cm
    altura = 180
    // pausa de 1 segundo
    basic.pause(1000)
    // calcule el imc con los datos
    imc = 10000 * masa / altura ** 2
    // muestre texto imc:
    basic.showString("imc:")
    // muestre el valor numérico del imc
    basic.showNumber(imc)
    // muestre las unidades del imc en kg/m2
    basic.showString("kg/m2")
    // pausa de 1 segundo
    basic.pause(1000)
    if (imc >= 18.5 && imc <= 25) {
        // si el IMC es mayor igual a 18.5 y menor igual a 25 unidades
        // muestre ícono de IMC ideal ó saludable
        basic.showIcon(IconNames.Happy)
        // pausa de 1 segundo
        basic.pause(1000)
    } else if (imc > 25 && imc < 30) {
        // si el IMC es mayor a 25 y menor a 30 unidades
        // muestre ícono de sobrepeso
        basic.showIcon(IconNames.Sad)
        // pausa de 1 segundo
        basic.pause(1000)
    } else if (imc >= 30) {
        // si el IMC supera 30 unidades
        // muestre ícono de obesidad
        basic.showIcon(IconNames.No)
        // pausa de 1 segundo
        basic.pause(1000)
    } else {
        // si el IMC es menor de 18.5
        // muestre ícono de IMC muy bajo
        basic.showIcon(IconNames.Asleep)
        // pausa de 1 segundo
        basic.pause(1000)
    }
    // limpiar pantalla
    basic.clearScreen()
    // pausa de 1 segundo
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    // al presionar el botón B
    // disminuya la masa actual en una unidad
    masa += -1
    // muestre la masa actual
    basic.showNumber(masa)
    // pausa de 1 segundo
    basic.pause(1000)
    // limpiar pantalla
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    // al agitar el microbit
    // restablezcla el valor de masa en 74 kg
    masa = 74
    // muestre el valor de la masa
    basic.showNumber(masa)
})
let imc = 0
let altura = 0
let masa = 0
// inicialice masa en 0
// defina masa como 74 para en caso de agitar el microbit
masa = 74
// mensaje que diga Calculadora de IMC al iniciar el programa
basic.showString("Calc.de IMC.")
// pausa de 1 segundo
basic.pause(1000)
// limpiar pantalla
basic.clearScreen()
