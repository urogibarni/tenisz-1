palyaSzelesseg = 5
palyaMagassag = 4

kepernyoSzelesseg = 5
kepernyoMagassag = 5

startX = 1
startY = 2

labdaGyorsasag = 400 # minimum: 0 - maximum: 500
keretFenyero = 1 # minimum: 0 - maximum: 255

matrixMinX = 0
matrixMinY = 0
matrixMaxX = 0
matrixMaxY = 0
iranyX = 1
iranyY = 1
labdaX = startX
labdaY = startY
stop = False

start()  

def on_button_pressed_a_b():
    global stop
    stop = True
input.on_button_pressed(Button.AB, on_button_pressed_a_b)

def start():
    teruletSzamitasok()
    for i in range(6):
        teruletAbrazolas(i)
        basic.pause(50)
    for i in range(10):
        teruletAbrazolas(9 - i)
        basic.pause(50)
  
def teruletSzamitasok():
    global kepernyoSzelesseg, kepernyoMagassag, palyaSzelesseg, palyaMagassag, matrixMinX, matrixMinY, matrixMaxX, matrixMaxY
    matrixMinX = Math.floor(kepernyoSzelesseg/2 - palyaSzelesseg/2)
    matrixMinY = Math.floor(kepernyoMagassag/2 - palyaMagassag/2)
    matrixMaxX = Math.floor(matrixMinX + palyaSzelesseg - 1)
    matrixMaxY = Math.floor(matrixMinY + palyaMagassag - 1)

def teruletAbrazolas(fenyero):
    x = matrixMinX
    while x <= matrixMaxX:
        y = matrixMinY
        while y <= matrixMaxY:
            led.plot_brightness(x, y, fenyero * 40)
            y += 1
        x += 1

def iranyvaltasok():
    global iranyX, iranyY, labdaX, labdaY, iranyY, matrixMinX, matrixMinY, matrixMaxX, matrixMaxY
    if labdaX >= matrixMaxX:
        iranyX = -1;
    if labdaX <= matrixMinX:
        iranyX = 1;
    if labdaY >= matrixMaxY:
        iranyY = -1;
    if labdaY <= matrixMinY:
        iranyY = 1;

def keretAbrazolas():
    global keretFenyero
    x = matrixMinX
    while x <= matrixMaxX:
        if x > matrixMinX and x < matrixMaxX:
            led.plot_brightness(x, matrixMinY, keretFenyero)
            led.plot_brightness(x, matrixMaxY, keretFenyero)
            x += 1
            continue
        y = matrixMinY
        while y <= matrixMaxY:
            led.plot_brightness(x, y, keretFenyero)
            y += 1
        x += 1

def pattogoLabda():
    global iranyX, iranyY, labdaX, labdaY, labdaGyorsasag
    labdaX = labdaX + iranyX
    labdaY = labdaY + iranyY
    iranyvaltasok()
    led.plot(labdaX, labdaY)
    basic.pause(500 - labdaGyorsasag)
    led.unplot(labdaX, labdaY)

def on_forever():
    global stop
    if not stop:
        keretAbrazolas()
        pattogoLabda()
    else:
        basic.show_icon(IconNames.HEART)
basic.forever(on_forever)
