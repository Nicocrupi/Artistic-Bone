
const botonWOn = document.getElementById("boton-wOn")
const botonWBack = document.getElementById("boton-wBack")
const botonYOn = document.getElementById("boton-yOn")
const botonYBack = document.getElementById("boton-yBack")
const botonFOn = document.getElementById("boton-fOn")
const botonFBack = document.getElementById("boton-fBack")
const botonMOn = document.getElementById("boton-mOn")
const botonMBack = document.getElementById("boton-mBack")

botonWOn.addEventListener("click", botonWON)
botonWBack.addEventListener("click", botonWOFF)
botonYOn.addEventListener("click", botonYON)
botonYBack.addEventListener("click", botonYOFF)
botonFOn.addEventListener("click", botonFON)
botonFBack.addEventListener("click", botonFOFF)
botonMOn.addEventListener("click", botonMON)
botonMBack.addEventListener("click", botonMOFF)


const iconOnW = document.getElementById("icon-On-W")
const iconOffW = document.getElementById("icon-Off-W")
const iconOnY = document.getElementById("icon-On-Y")
const iconOffY = document.getElementById("icon-Off-Y")
const iconOnF = document.getElementById("icon-On-F")
const iconOffF = document.getElementById("icon-Off-F")
const iconOnM = document.getElementById("icon-On-M")
const iconOffM = document.getElementById("icon-Off-M")

function botonWON(){
    iconOnY.style.display = "none"
    iconOnM.style.display = "none"
    iconOnF.style.display = "none"
    iconOffY.style.display = "block"
    iconOffM.style.display = "block"
    iconOffF.style.display = "block"
    iconOffW.style.display = "none"
    iconOnW.style.display = "block"
    console.log("botonWOn Funcionando")
}
function botonWOFF(){
    iconOnW.style.display = "none"
    iconOffW.style.display = "block"
    console.log("botonWOff Funcionando")
}
function botonYON(){
    iconOnW.style.display = "none"
    iconOnM.style.display = "none"
    iconOnF.style.display = "none"
    iconOffW.style.display = "block"
    iconOffM.style.display = "block"
    iconOffF.style.display = "block"
    iconOffY.style.display = "none"
    iconOnY.style.display = "block"
    console.log("botonWOn Funcionando")
}
function botonYOFF(){
    iconOnY.style.display = "none"
    iconOffY.style.display = "block"
    console.log("botonWOff Funcionando")
}
function botonFON(){
    iconOnY.style.display = "none"
    iconOnM.style.display = "none"
    iconOnW.style.display = "none"
    iconOffY.style.display = "block"
    iconOffM.style.display = "block"
    iconOffW.style.display = "block"
    iconOffF.style.display = "none"
    iconOnF.style.display = "block"
    console.log("botonWOn Funcionando")
}
function botonFOFF(){
    iconOnF.style.display = "none"
    iconOffF.style.display = "block"
    console.log("botonWOff Funcionando")
}
function botonMON(){
    iconOnY.style.display = "none"
    iconOnW.style.display = "none"
    iconOnF.style.display = "none"
    iconOffY.style.display = "block"
    iconOffW.style.display = "block"
    iconOffF.style.display = "block"
    iconOffM.style.display = "none"
    iconOnM.style.display = "block"
    console.log("botonWOn Funcionando")
}
function botonMOFF(){
    iconOnM.style.display = "none"
    iconOffM.style.display = "block"
    console.log("botonWOff Funcionando")
}


window.addEventListener("load", iniciarPage)
