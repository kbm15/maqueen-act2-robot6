basic.showIcon(IconNames.Heart)
music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 2448, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
