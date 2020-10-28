bluetooth.onBluetoothConnected(function () {
    bluetooth.uartWriteNumber(t_on)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteNumber(t_on)
})
let count = 0
let Status_Heizung = 0
let t_on = 0
bluetooth.startUartService()
let t_off = 0
t_on = 0
basic.setLedColor(0x00ff00)
basic.forever(function () {
    basic.pause(1000)
    if (Status_Heizung) {
        if (input.soundLevel() >= 5) {
            count += 1
        } else {
            basic.setLedColor(0x00ff00)
            count = 0
            Status_Heizung = 0
        }
    } else if (input.soundLevel() >= 5) {
        basic.setLedColor(0xff0000)
        count = 0
        Status_Heizung = 1
    } else {
        count += 1
    }
})
