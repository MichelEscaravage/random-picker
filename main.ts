let Cijfer = 0
input.onButtonPressed(Button.A, function () {
    Cijfer = randint(0, 10)
    basic.showNumber(Cijfer)
    if (Cijfer >= 6) {
        if (Cijfer < 8) {
            basic.showIcon(IconNames.Yes)
        }
    }
    if (Cijfer >= 8) {
        basic.showIcon(IconNames.Heart)
    }
    if (Cijfer < 6) {
        basic.showIcon(IconNames.Sad)
    }
})
