# Actividad 2 Robot 2
```template
basic.showIcon(IconNames.Snake)
music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 2448, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
```
## ~avatar avatar

Nuestro problema se resuelve utilizando el bloque de condicion y entrada, que solo ejecuta el comando cuando se cumple la condicion impuesta.


## Paso 2

Arrastramos el bloque si de la seccion logica.
```block 
if (true) {}
```

## Paso 3

Arrastramos el bloque menor que de la seccion logica y añadimos nivel de luz de la seccion entrada.
```block 
if (input.lightLevel() < 32) {
        
    }
```

## Paso 4
Colocamos el codigo del bloque 'reproducir melodia' dentro del bloque 'si' y modifica la melodia.
```block 
if (input.lightLevel() < 32) {
        music.playMelody("A F F A B C5 - - ", 120)
    }
```