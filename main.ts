control.onEvent(1001, 1, function () {
    basic.pause(999)
    for (let index2 = 0; index2 <= chords[step].length - 1; index2++) {
        orchestra.note(
        chords[step][index2] + (12 + transpose),
        1000,
        127,
        SynthPreset.Preset1
        )
        led.toggle(2, index2)
        basic.pause(333)
    }
    for (let index3 = 0; index3 <= chords[step].length - 1; index3++) {
        orchestra.note(
        chords[step][index3] + (24 + transpose),
        1000,
        127,
        SynthPreset.Preset1
        )
        led.toggle(2, 4 - index3)
        basic.pause(333)
    }
})
control.onEvent(111, 5, function () {
    radio.sendValue("Bob", 11)
    basic.pause(1000)
    radio.sendValue("Bob", 4)
})
control.onEvent(1000, 0, function () {
    for (let index = 0; index <= chords[step].length - 1; index++) {
        orchestra.note(
        chords[step][index] + transpose,
        1000,
        127,
        SynthPreset.User1
        )
    }
})
input.onButtonPressed(Button.A, function () {
    A = !(A)
})
control.onEvent(110, 5, function () {
    radio.sendValue("Bob", 12)
    basic.pause(1000)
    radio.sendValue("Bob", 9)
    basic.pause(1000)
    basic.pause(333)
    radio.sendValue("Bob", 9)
    basic.pause(333)
    radio.sendValue("Bob", 11)
    basic.pause(333)
    radio.sendValue("Bob", 12)
    basic.pause(333)
    basic.pause(333)
    radio.sendValue("Bob", 9)
})
control.onEvent(1002, 2, function () {
    orchestra.playSample(Sample.BassDrum, 1)
    for (let index = 0; index < 1; index++) {
        led.toggle(1, 1)
        led.toggle(3, 1)
    }
    basic.pause(500)
    orchestra.playSample(Sample.HighHat, 1)
    basic.pause(500)
    orchestra.playSample(Sample.SnareDrum, 1)
    for (let index = 0; index < 1; index++) {
        led.toggle(1, 1)
        led.toggle(3, 1)
    }
    basic.pause(500)
    orchestra.playSample(Sample.HighHat, 1)
    basic.pause(500)
    orchestra.playSample(Sample.BassDrum, 1)
    for (let index = 0; index < 1; index++) {
        led.toggle(1, 1)
        led.toggle(3, 1)
    }
    basic.pause(500)
    orchestra.playSample(Sample.HighHat, 1)
    basic.pause(500)
    orchestra.playSample(Sample.SnareDrum, 1)
    for (let index = 0; index < 1; index++) {
        led.toggle(1, 1)
        led.toggle(3, 1)
    }
    basic.pause(500)
    orchestra.playSample(Sample.HighHat, 1)
})
control.onEvent(113, 5, function () {
    radio.sendValue("Bob", 9)
    basic.pause(1000)
    radio.sendValue("Bob", 2)
})
input.onButtonPressed(Button.B, function () {
    B = !(B)
})
control.onEvent(112, 5, function () {
    radio.sendValue("Bob", 11)
    basic.pause(1000)
    radio.sendValue("Bob", 7)
    basic.pause(1000)
    basic.pause(333)
    radio.sendValue("Bob", 7)
    basic.pause(333)
    radio.sendValue("Bob", 9)
    basic.pause(333)
    radio.sendValue("Bob", 11)
    basic.pause(333)
    basic.pause(333)
    radio.sendValue("Bob", 7)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    C = !(C)
})
let tweak = 0
let twonk = 0
let C = false
let A = false
let chords: number[][] = []
let step = 0
let transpose = 0
let B = false
B = true
radio.setGroup(83)
transpose = 7
step = -1
let conductor = 1000
chords = [
[50, 53, 57],
[45, 48, 52],
[48, 52, 55],
[43, 47, 50]
]
synthBlocks.importPresetString(SynthUserPreset.User1, "{ OscType::Pulse, OscType::Pulse, 0.506000, 0.496000, 0.544000, 0.500000, -0.064000, 0.300000, 0.300000, 0.000000, FilterType::LPF, 0.132000, 0.000000, 0.504000, 0.232000, 0.000000, 0.760000, 1.440000, 0.540000, 1.140000, OscType::Triangle, 0.420000, 3.800000, 0.096000, 0.464000 }")
orchestra.setParameter(SynthUserPreset.User1, SynthParameter.VibratoFreq, 10)
loops.everyInterval(4000, function () {
    step += 1
    step = step % 4
    control.raiseEvent(
    1001,
    1
    )
    led.toggleAll()
if (A) {
        control.raiseEvent(
        1000,
        0
        )
    }
    if (B) {
        control.raiseEvent(
        110 + step,
        5
        )
    }
    if (C) {
        control.raiseEvent(
        1002,
        2
        )
    }
    serial.writeValue("step", step)
})
basic.forever(function () {
    led.toggle(0, 0)
    twonk = Math.map(input.acceleration(Dimension.Y), 0, 1024, 0, 1)
    if (twonk < 0) {
        twonk = 0
    }
    orchestra.setParameter(SynthUserPreset.User1, SynthParameter.VibratoAmount, twonk + 0)
    tweak = Math.map(input.acceleration(Dimension.X), 0, 1024, 0, 1)
    if (tweak < 0) {
        tweak = 0
    }
    orchestra.setParameter(SynthUserPreset.User1, SynthParameter.OscFm, tweak + 0)
})
