basic.forever(function () {
    serial.writeValue("Nivå.Er", 126 / 1000 * pins.analogReadPin(AnalogPin.P0) - 25)
    serial.writeValue("Nivå.low", 0)
    serial.writeValue("Nivå.high", 100)
    basic.pause(500)
})
