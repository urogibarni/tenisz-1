def teruletAbrazolas():
    x = 0
    while x <= matrixMaxX:
        y = 0
        while y <= matrixMaxY:
            led.plot(x, y)
            y += 1
        x += 1


matrixMaxY = 0
matrixMaxX = 0
matrixMinX = 0
matrixMinY = 0
matrixMaxX = 4
matrixMaxY = 3
startX = 0
startY = 1
iranyX = 1
iranyY = 1
labdaX = startX
labdaY = startY

for i in range(3):
    teruletAbrazolas()
    basic.pause(500)
    basic.clear_screen()
    basic.pause(200)

def on_forever():
    # labdaX = labdaX + iranyX
    led.plot(1, 1)
basic.forever(on_forever)
