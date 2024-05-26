# App

## vamos a configurar los cambios mediante git 

## esta es la rutina que vamos a seguir 
## base-a es la rama en comun para ti y para mi 
### primero haz git clone 
` git clone https://github.com/AlexTcw/react-native-paper.git ` todo junto
- enter
### ahora muevete a tu rama (esto siempre verificalo antes de empezar a codificar)
`git checkout terraza` cambias a tu rama
`git pull` traes cambios que se quedaron en github

## ahora estas codificando en tu rama, una vez termines de codificar
- vez que cosas cambiaste (solo las importantes)
- `git add src/...`
- guardas el cambio
- `git commit -m "le puse un rojo mas piola"`
- subes tus cambios a tu rama
- `git push`
## si cometiste un error y quieres regresar a lo anterior
- `git restore src/carpeta/archivo-que-quiero-recuperar`
## si quieres recuperar todos los cambios a la anterior
- `git restore . ` el punto es mucho muy importante
### si ya estan chidos los cambios
- cambias a nuestra rama en comun
-  `git checkout base-a`
- traes los cambios mas recientes 
- `git pull`
- fusionas ambas ramas para que tengamos lo mismo
- `git merge terraza`
- lo subes
- `git push`
- ya sabes git



### comandos mas comunes
#### guardar todo (si te da flojera solamente)
- `git add . ` el punto es mucho muy importante si quieres guardar
- es recomendable no guardarlo todo por si hay conflictos al fusionar
