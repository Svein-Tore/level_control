def on_forever():
    serial.write_value("level.high", 100)
    serial.write_value("level.ER",
        (0.1285 * pins.analog_read_pin(AnalogPin.P0) - 24.7) / 1.023)
    serial.write_value("level.skal",
        100 * pins.analog_read_pin(AnalogPin.P1) / 1023 / 1.023)
    serial.write_value("level.low", 0)
    basic.pause(2000)
basic.forever(on_forever)
