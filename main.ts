basic.forever(function () {
    serial.writeValue("Nivå.Er", 122 / 1000 * pins.analogReadPin(AnalogPin.P0) - 25)
    serial.writeValue("Nivå.low", 0)
    serial.writeValue("Nivå.high", 100)
    serial.writeValue("Nivå.skal", 100 / 1023 * pins.analogReadPin(AnalogPin.P1))
    basic.pause(500)
})
