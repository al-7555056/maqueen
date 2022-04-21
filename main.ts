input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    strip.show()
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index < 2; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        indicador = 2
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        indicador = 0
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M2)
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        indicador = 1
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(100)
    }
    maqueen.motorStop(maqueen.Motors.All)
    strip.clear()
    music.setVolume(0)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    _ += 1
    if (_ == 0) {
        music.setBuiltInSpeakerEnabled(true)
    }
    if (_ == 1) {
        music.setBuiltInSpeakerEnabled(false)
    }
    if (_ == 2) {
        _ = 0
    }
})
let _ = 0
let indicador = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
music.setVolume(0)
indicador = 3
basic.forever(function () {
    music.playMelody("B A G A G F A C5 ", 120)
})
basic.forever(function () {
    if (indicador == 0) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (indicador == 1) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (indicador == 2) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (indicador == 3) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
