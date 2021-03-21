basic.forever(function () {
    serial.writeValue("Nivå", 122 / 1000 * pins.analogReadPin(AnalogPin.P0) - 24.96)
    basic.pause(10)
})
