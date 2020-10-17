let palyaSzelesseg = 5
let palyaMagassag = 4
let kepernyoSzelesseg = 5
let kepernyoMagassag = 5
let startX = 1
let startY = 2
let labdaGyorsasag = 400
//  minimum: 0 - maximum: 500
let keretFenyero = 1
//  minimum: 0 - maximum: 255
let matrixMinX = 0
let matrixMinY = 0
let matrixMaxX = 0
let matrixMaxY = 0
let iranyX = 1
let iranyY = 1
let labdaX = startX
let labdaY = startY
let stop = false
start()
input.onButtonPressed(Button.AB, function on_button_pressed_a_b() {
    
    stop = true
})
function start() {
    let i: number;
    teruletSzamitasok()
    for (i = 0; i < 6; i++) {
        teruletAbrazolas(i)
        basic.pause(50)
    }
    for (i = 0; i < 10; i++) {
        teruletAbrazolas(9 - i)
        basic.pause(50)
    }
}

function teruletSzamitasok() {
    
    matrixMinX = Math.floor(kepernyoSzelesseg / 2 - palyaSzelesseg / 2)
    matrixMinY = Math.floor(kepernyoMagassag / 2 - palyaMagassag / 2)
    matrixMaxX = Math.floor(matrixMinX + palyaSzelesseg - 1)
    matrixMaxY = Math.floor(matrixMinY + palyaMagassag - 1)
}

function teruletAbrazolas(fenyero: number) {
    let y: number;
    let x = matrixMinX
    while (x <= matrixMaxX) {
        y = matrixMinY
        while (y <= matrixMaxY) {
            led.plotBrightness(x, y, fenyero * 40)
            y += 1
        }
        x += 1
    }
}

function iranyvaltasok() {
    
    if (labdaX >= matrixMaxX) {
        iranyX = -1
    }
    
    if (labdaX <= matrixMinX) {
        iranyX = 1
    }
    
    if (labdaY >= matrixMaxY) {
        iranyY = -1
    }
    
    if (labdaY <= matrixMinY) {
        iranyY = 1
    }
    
}

function keretAbrazolas() {
    let y: number;
    
    let x = matrixMinX
    while (x <= matrixMaxX) {
        if (x > matrixMinX && x < matrixMaxX) {
            led.plotBrightness(x, matrixMinY, keretFenyero)
            led.plotBrightness(x, matrixMaxY, keretFenyero)
            x += 1
            continue
        }
        
        y = matrixMinY
        while (y <= matrixMaxY) {
            led.plotBrightness(x, y, keretFenyero)
            y += 1
        }
        x += 1
    }
}

function pattogoLabda() {
    
    labdaX = labdaX + iranyX
    labdaY = labdaY + iranyY
    iranyvaltasok()
    led.plot(labdaX, labdaY)
    basic.pause(500 - labdaGyorsasag)
    led.unplot(labdaX, labdaY)
}

basic.forever(function on_forever() {
    
    if (!stop) {
        keretAbrazolas()
        pattogoLabda()
    } else {
        basic.showIcon(IconNames.Heart)
    }
    
})
