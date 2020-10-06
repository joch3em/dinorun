input.onButtonPressed(Button.A, function () {
    if (start == 1) {
        jump()
    }
})
input.onGesture(Gesture.Shake, function () {
    start = 1
    dino = game.createSprite(1, 4)
    enemy = game.createSprite(4, 4)
    enemyF = game.createSprite(4, 2)
})
function enemymovF () {
    speed += -2
    score += 2
    if (enemymadef == 1) {
        enemyF = game.createSprite(4, 2)
    } else {
        enemymadef = 1
    }
    basic.pause(speed)
    enemyF.change(LedSpriteProperty.X, -1)
    basic.pause(speed)
    enemyF.change(LedSpriteProperty.X, -1)
    basic.pause(speed)
    enemyF.change(LedSpriteProperty.X, -1)
    basic.pause(speed)
    enemyF.change(LedSpriteProperty.X, -1)
    basic.pause(speed)
    enemyF.delete()
    basic.pause(speed)
}
function megalovania () {
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(277, music.beat(BeatFraction.Half))
    music.playTone(277, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(277, music.beat(BeatFraction.Half))
    music.playTone(277, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
}
function enemyMovS () {
    speed += -2
    score += 2
    if (enemy_made == 1) {
        enemy = game.createSprite(4, 4)
    } else {
        enemy_made = 1
    }
    basic.pause(speed)
    enemy.change(LedSpriteProperty.X, -1)
    basic.pause(speed)
    enemy.change(LedSpriteProperty.X, -1)
    basic.pause(speed)
    enemy.change(LedSpriteProperty.X, -1)
    basic.pause(speed)
    enemy.change(LedSpriteProperty.X, -1)
    basic.pause(speed)
    enemy.delete()
    basic.pause(speed)
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(easteregg)
})
function jump () {
    dino.change(LedSpriteProperty.Y, -1)
    basic.pause(150)
    dino.change(LedSpriteProperty.Y, -1)
    basic.pause(200)
    dino.change(LedSpriteProperty.Y, 1)
    basic.pause(150)
    dino.change(LedSpriteProperty.Y, 1)
}
let enemychoice = 0
let enemy_made = 0
let enemymadef = 0
let score = 0
let enemyF: game.LedSprite = null
let enemy: game.LedSprite = null
let dino: game.LedSprite = null
let start = 0
let easteregg = 0
let speed = 0
speed = 350
easteregg = randint(1, 200)
if (easteregg == 69) {
    megalovania()
}
start = 0
while (start == 0) {
    basic.showLeds(`
        # . . . #
        . # # # .
        . # . # .
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
}
basic.forever(function () {
    if ((dino.isTouching(enemy) || dino.isTouching(enemyF)) && start == 1) {
        start += -1
        speed = 350
        enemymadef = 0
        enemy_made = 0
        enemy.delete()
        dino.delete()
        basic.showString("GAMEOVER")
        basic.showString("SCORE:")
        basic.showNumber(score)
        score = 0
        while (start == 0) {
            basic.showLeds(`
                # . . . #
                . # # # .
                . # . # .
                . # # # .
                # . . . #
                `)
            basic.clearScreen()
        }
    }
})
basic.forever(function () {
    basic.pause(1000)
    while (start == 1) {
        enemychoice = randint(0, 1)
        if (enemychoice == 0) {
            enemyMovS()
        } else {
            enemymovF()
        }
    }
    basic.pause(1000)
})
basic.forever(function () {
    if (start == 1 && score == 100) {
        megalovania()
    }
})
