basic.forever(function () {
    serial.writeValue("Nivå.high", 100)
    serial.writeValue("Nivå.Er", 122 / 1000 * (pins.analogReadPin(AnalogPin.P0) * 1023 / 992) - 25)
    serial.writeValue("Nivå.skal", 100 * pins.analogReadPin(AnalogPin.P1) / 1023)
    serial.writeValue("Nivå.low", 0)
    basic.pause(500)
})
