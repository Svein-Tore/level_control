basic.forever(function () {
    serial.writeValue("level.high", 100)
    serial.writeValue("level.ER", (0.1285 * pins.analogReadPin(AnalogPin.P0) - 24.7) / 1.023)
    serial.writeValue("level.skal", 100 * pins.analogReadPin(AnalogPin.P1) / 1023 / 1.023)
    serial.writeValue("level.low", 0)
    basic.pause(2000)
})
