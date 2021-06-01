basic.forever(function () {
    serial.writeValue("Nivå.high", 100)
    serial.writeValue("Nivå.Er", (0.1285 * pins.analogReadPin(AnalogPin.P0) - 24.7) / 1.023)
    serial.writeValue("Nivå.skal", 100 * pins.analogReadPin(AnalogPin.P1) / 1023 / 1.023)
    serial.writeValue("Nivå.low", 0)
    basic.pause(500)
})
