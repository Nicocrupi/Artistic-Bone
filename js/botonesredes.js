
const botonWOn = document.getElementById("boton-wOn")
const botonWBack = document.getElementById("boton-wBack")

botonWOn.addEventListener("click", botonWON)
botonWBack.addEventListener("click", botonWOFF)


const iconOnW = document.getElementById("icon-On-W")
const iconOffW = document.getElementById("icon-Off-W")

function botonWON(){
    iconOffW.style.display = "none"
    iconOnW.style.display = "block"
    console.log("botonWOn Funcionando")
}

function botonWOFF(){
    iconOnW.style.display = "none"
    iconOffW.style.display = "block"
    console.log("botonWOff Funcionando")
}


window.addEventListener("load", iniciarPage)
