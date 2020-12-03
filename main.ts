controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    playUp()
})
function playLeft () {
    playNote(cx - offset - 12, cy, bNote)
}
function playRight () {
    playNote(cx + offset + 15, cy, eNote)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    playLeft()
})
function playDown () {
    playNote(cx + 20, cy, gNote)
}
function playNote (x: number, y: number, note: number) {
    yellow = sprites.create(img`
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . f . 5 5 5 5 5 5 5 5 5 5 5 . . 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . f f f f f f f f f f f f 5 . 
        . 5 f f f f f f f f f f f f f 5 
        . 5 5 1 1 1 1 1 1 1 1 1 1 1 5 5 
        . 5 5 1 f f 1 1 1 1 1 f f 1 5 5 
        . 5 5 1 1 f 1 1 1 1 1 f 1 1 5 5 
        . 5 5 1 1 1 1 1 1 1 1 1 1 1 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    yellow.setPosition(x, y)
    yellow.lifespan = 400
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    playRight()
})
function playUp () {
    playNote(cx - 17, cy, cNote)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    playDown()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(otherSprite) && controller.left.isPressed() && NewNote == 0) {
        info.changeScoreBy(1)
        mySprite.destroy()
        music.playMelody("E - F - E - - - ", 120)
    }
    // *********************************\
    // |       YOUR CODE GOES ABOVE        |
    // \*********************************
    if (mySprite.overlapsWith(otherSprite) && controller.up.isPressed() && NewNote == 2) {
        info.changeScoreBy(1)
        mySprite.destroy()
        // *********************************\
        // |       YOUR CODE GOES BELOW        |
        // \*********************************
        music.playMelody("E - F - E - - - ", 120)
    }
    // *********************************\
    // |       YOUR CODE GOES BELOW        |
    // \*********************************
    // *********************************\
    // |       YOUR CODE GOES ABOVE        |
    // \*********************************
    if (mySprite.overlapsWith(otherSprite) && controller.down.isPressed() && NewNote == 1) {
        info.changeScoreBy(1)
        mySprite.destroy()
        music.playMelody("E - F - E - - - ", 120)
    }
    // *********************************\
    // |       YOUR CODE GOES BELOW        |
    // \*********************************
    // *********************************\
    // |       YOUR CODE GOES ABOVE        |
    // \*********************************
    if (mySprite.overlapsWith(otherSprite) && controller.right.isPressed() && NewNote == 3) {
        info.changeScoreBy(1)
        mySprite.destroy()
        music.playMelody("E - F - E - - - ", 120)
    }
})
function noteCombination () {
    if (mySprite.y < 150) {
        NewNote = Math.randomRange(0, 3)
        // *********************************\
        // |       YOUR CODE GOES BELOW        |
        // \*********************************
        // *********************************\
        // |       YOUR CODE GOES ABOVE        |
        // \*********************************
        if (NewNote == 0) {
            mySprite = sprites.create(img`
                . . . . . 3 3 3 3 3 3 3 . . . . 
                . f . 3 3 3 3 3 3 3 3 3 3 3 . . 
                f f 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
                . . f f f f f f f f f f f f 3 . 
                . 3 f f f f f f f f f f f f f 3 
                . 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 
                . 3 3 1 f f 1 1 1 1 1 f f 1 3 3 
                . 3 3 1 1 f 1 1 1 1 1 f 1 1 3 3 
                . 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 
                . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
                . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
                . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
                . . . . . 3 3 3 3 3 3 3 . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            mySprite.setPosition(cx - offset - 12, 0)
            arrows = 0
            mySprite.say("LEFT")
        }
        // *********************************\
        // |       YOUR CODE GOES BELOW        |
        // \*********************************
        // *********************************\
        // |       YOUR CODE GOES ABOVE        |
        // \*********************************
        if (NewNote == 1) {
            mySprite = sprites.create(img`
                . . . . . 7 7 7 7 7 7 7 . . . . 
                . f . 7 7 7 7 7 7 7 7 7 7 7 . . 
                f f 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . . f f f f f f f f f f f f 7 . 
                . 7 f f f f f f f f f f f f f 7 
                . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 7 
                . 7 7 1 f f 1 1 1 1 1 f f 1 7 7 
                . 7 7 1 1 f 1 1 1 1 1 f 1 1 7 7 
                . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 7 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . . . . 7 7 7 7 7 7 7 . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            mySprite.setPosition(cx + 20, 0)
            arrows = 1
            mySprite.say("DOWN")
        }
        // *********************************\
        // |       YOUR CODE GOES BELOW        |
        // \*********************************
        // *********************************\
        // |       YOUR CODE GOES ABOVE        |
        // \*********************************
        if (NewNote == 2) {
            mySprite = sprites.create(img`
                . . . . . 8 8 8 8 8 8 8 . . . . 
                . f . 8 8 8 8 8 8 8 8 8 8 8 . . 
                f f 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
                . . f f f f f f f f f f f f 8 . 
                . 8 f f f f f f f f f f f f f 8 
                . 8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 
                . 8 8 1 f f 1 1 1 1 1 f f 1 8 8 
                . 8 8 1 1 f 1 1 1 1 1 f 1 1 8 8 
                . 8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 
                . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
                . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
                . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
                . . . . . 8 8 8 8 8 8 8 . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            mySprite.setPosition(cx - 17, 0)
            arrows = 2
            mySprite.say("UP")
        }
        // *********************************\
        // |       YOUR CODE GOES BELOW        |
        // \*********************************
        // *********************************\
        // |       YOUR CODE GOES ABOVE        |
        // \*********************************
        if (NewNote == 3) {
            mySprite = sprites.create(img`
                . . . . . 2 2 2 2 2 2 2 . . . . 
                . f . 2 2 2 2 2 2 2 2 2 2 2 . . 
                f f 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                . . f f f f f f f f f f f f 2 . 
                . 2 f f f f f f f f f f f f f 2 
                . 2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 
                . 2 2 1 f f 1 1 1 1 1 f f 1 2 2 
                . 2 2 1 1 f 1 1 1 1 1 f 1 1 2 2 
                . 2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . . . . 2 2 2 2 2 2 2 . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            mySprite.setPosition(cx + offset + 15, 0)
            arrows = 3
            mySprite.say("RIGHT")
        }
        mySprite.vy += 30
    } else {
        mySprite.destroy()
    }
}
let arrows = 0
let NewNote = 0
let yellow: Sprite = null
let mySprite: Sprite = null
let offset = 0
let cx = 0
let cy = 0
let bNote = 0
let gNote = 0
let eNote = 0
let cNote = 0
scene.setBackgroundImage(img`
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeefffffffffffffffffeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eefffffffffffffffffffffffeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111fffffffffffffffffffffffffffffeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11ff1ffffffffffffffffffffffffffffffee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff111ffffffffffffffffffffffffffffffff11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeef11111fffffffffffffffffffffffffffffffff1111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeefff11111ffffffffffffffffffffffffffffffff1ff11eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeffff11111ffffffffffffffffffffffffffffffff111f1eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeefffff11111ffffffffffffffffffffffffffffffff1111feeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeffffff11111ffffffffffffffffffffffffffffffff11111feeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeefffffff11111ffffffffffffffffffffffffffffffff11111ffeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeffffffff11111ffffffffffffffffffffffffffffffff11111fffeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeefffffffff11111ffffffffffffffffffffffffffffffff11111ffffeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeffffffffff11111ffffffffffffffffffffffffffffffff11111fffffeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeffffffffff11111ffffffffffffffffffffffffffffffff11111fffffeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeefffffffffff11111ffffffffffffffffffffffffffffffff11111ffffffeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeefffffffffffff11111ffffffffffffffffffffffffffffffff11111ffffffffeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeefffffffffffff11111ffffffffffffffffffffffffffffffff11111ffffffffeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeefffffffffffffff11111ffffffffffffffffffffffffffffffff11111ffffffffffeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeefffffffffffffff11111ffffffffffffffffffffffffffffffff11111ffffffffffeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeefffffffffffffff11111ffffffffffffffffffffffffffffffff11111ffffffffffeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeffffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffffeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeefffffffffffffff11111ffffffffffffffffffffffffffffffff11111ffffffffffeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeefffffffffffffff11111ffffffffffffffffffffffffffffffff11111ffffffffffeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeefffffffffffffff11111ffffffffffffffffffffffffffffffff11111ffffffffffeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeffffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffffeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeefffffffffffff11111ffffffffffffffffffffffffffffffff11111ffffffffeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeefffffffffffff11111ffffffffffffffffffffffffffffffff11111ffffffffeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeffffffffffff11111ffffffffffffffffffffffffffffffff11111fffffffeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeefffffffffff11111ffffffffffffffffffffffffffffffff11111ffffffeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeffffffffff11111ffffffffffffffffffffffffffffffff11111fffffeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeffffffffff11111ffffffffffffffffffffffffffffffff11111fffffeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeefffffffff11111ffffffffffffffffffffffffffffffff11111ffffeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeffffffff11111ffffffffffffffffffffffffffffffff11111fffeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeefffffff11111ffffffffffffffffffffffffffffffff11111ffeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeffffff11111ffffffffffffffffffffffffffffffff11111feeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeefffff11111ffffffffffffffffffffffffffffffff1111feeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeffff11111ffffffffffffffffffffffffffffffff111f1eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeefff11111ffffffffffffffffffffffffffffffff1ff11eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeef11111fffffffffffffffffffffffffffffffff1111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff111ffffffffffffffffffffffffffffffff11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11ff1ffffffffffffffffffffffffffffffee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111fffffffffffffffffffffffffffffeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eefffffffffffffffffffffffeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeefffffffffffffffffeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeeeeeeeeeeeeeeeeee
    `)
cNote = 262
eNote = 330
gNote = 392
bNote = 494
cy = scene.screenHeight() / 2 + 30
cx = scene.screenWidth() / 2
offset = 40
let pinkNinja = sprites.create(img`
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . f . 3 3 3 3 3 3 3 3 3 3 3 . . 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . f f f f f f f f f f f f 3 . 
    . 3 f f f f f f f f f f f f f 3 
    . 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 
    . 3 3 1 f f 1 1 1 1 1 f f 1 3 3 
    . 3 3 1 1 f 1 1 1 1 1 f 1 1 3 3 
    . 3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let greenNinja = sprites.create(img`
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . f . 7 7 7 7 7 7 7 7 7 7 7 . . 
    f f 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . f f f f f f f f f f f f 7 . 
    . 7 f f f f f f f f f f f f f 7 
    . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 7 
    . 7 7 1 f f 1 1 1 1 1 f f 1 7 7 
    . 7 7 1 1 f 1 1 1 1 1 f 1 1 7 7 
    . 7 7 1 1 1 1 1 1 1 1 1 1 1 7 7 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let blueNinja = sprites.create(img`
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . f . 8 8 8 8 8 8 8 8 8 8 8 . . 
    f f 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . f f f f f f f f f f f f 8 . 
    . 8 f f f f f f f f f f f f f 8 
    . 8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 
    . 8 8 1 f f 1 1 1 1 1 f f 1 8 8 
    . 8 8 1 1 f 1 1 1 1 1 f 1 1 8 8 
    . 8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let redNinja = sprites.create(img`
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . f . 2 2 2 2 2 2 2 2 2 2 2 . . 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . f f f f f f f f f f f f 2 . 
    . 2 f f f f f f f f f f f f f 2 
    . 2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 
    . 2 2 1 f f 1 1 1 1 1 f f 1 2 2 
    . 2 2 1 1 f 1 1 1 1 1 f 1 1 2 2 
    . 2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
greenNinja.setPosition(cx + 20, cy)
blueNinja.setPosition(cx - 17, cy)
redNinja.setPosition(cx + offset + 15, cy)
pinkNinja.setPosition(cx - offset - 12, cy)
info.setScore(0)
game.onUpdateInterval(4000, function () {
    noteCombination()
})
