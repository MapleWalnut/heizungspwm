t_off = [0]
t_on = [0]
count = 0
Status_Heizung = 0
basic.set_led_color(0x00ff00)

def on_forever():
    global count, Status_Heizung
    basic.pause(1000)
    if Status_Heizung:
        if input.sound_level() >= 20:
            basic.show_number(count)
            count += 1
        else:
            basic.set_led_color(0x00ff00)
            count = 0
            Status_Heizung = 0
    else:
        if input.sound_level() >= 20:
            basic.set_led_color(0xff0000)
            count = 0
            Status_Heizung = 1
        else:
            basic.show_number(count)
            count += 1
basic.forever(on_forever)
