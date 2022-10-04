input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(score)
})
input.onButtonPressed(Button.AB, function () {
    while (!(input.pinIsPressed(TouchPin.P0))) {
        enemy = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index < 4; index++) {
            basic.pause(200)
            enemy.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
        }
        if (player.isTouching(enemy)) {
            score += 1
        }
        enemy.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let enemy: game.LedSprite = null
let score = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
score = 0
basic.forever(function () {
	
})
