def on_forever():
    serial.write_value("Nivå.high", 100)
    serial.write_value("Nivå.Er",
        122 / 1000 * (pins.analog_read_pin(AnalogPin.P0) * 1023 / 992) - 25)
    serial.write_value("Nivå.skal", 100 * pins.analog_read_pin(AnalogPin.P1) / 1023)
    serial.write_value("Nivå.low", 0)
    basic.pause(500)
basic.forever(on_forever)
