basic.forever(function () {
    serial.writeValue("Nivå.lest", 127 / 1000 * pins.analogReadPin(AnalogPin.P0) - 25.98)
    serial.writeValue("Nivå.low", 0)
    serial.writeValue("Nivå.high", 100)
    basic.pause(500)
})
