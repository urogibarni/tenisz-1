function teruletAbrazolas() {
    let y: number;
    let x = 0
    while (x <= matrixMaxX) {
        y = 0
        while (y <= matrixMaxY) {
            led.plot(x, y)
            y += 1
        }
        x += 1
    }
}

let matrixMaxY = 0
let matrixMaxX = 0
let matrixMinX = 0
let matrixMinY = 0
matrixMaxX = 4
matrixMaxY = 3
let startX = 0
let startY = 1
let iranyX = 1
let iranyY = 1
let labdaX = startX
let labdaY = startY
for (let i = 0; i < 3; i++) {
    teruletAbrazolas()
    basic.pause(500)
    basic.clearScreen()
    basic.pause(200)
}
basic.forever(function on_forever() {
    //  labdaX = labdaX + iranyX
    led.plot(1, 1)
})
