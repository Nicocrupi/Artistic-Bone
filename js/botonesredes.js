
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
const pjSkelW = document.getElementById("pjSkeletonW")
const pjSkelF = document.getElementById("pjSkeletonF")
const pjSkelY = document.getElementById("pjSkeletonY")
const pjSkelM = document.getElementById("pjSkeletonM")
const pjSkelCell = document.getElementById("pjSkeletonCell")

function botonWON(){
    pjSkelCell.style.display = "none"
    pjSkelM.style.display = "none"
    pjSkelF.style.display = "none"
    pjSkelY.style.display = "none"
    iconOnY.style.display = "none"
    iconOnM.style.display = "none"
    iconOnF.style.display = "none"
    iconOffW.style.display = "none"
    iconOffY.style.display = "block"
    iconOffM.style.display = "block"
    iconOffF.style.display = "block"
    iconOffW.style.display = "none"
    iconOnW.style.display = "block"
    pjSkelW.style.display = "block"
    console.log("botonWOn Funcionando")
}
function botonWOFF(){
    pjSkelCell.style.display = "block"
    pjSkelM.style.display = "none"
    pjSkelF.style.display = "none"
    pjSkelY.style.display = "none"
    iconOnW.style.display = "none"
    pjSkelW.style.display = "none"
    iconOffW.style.display = "block"
    console.log("botonWOff Funcionando")
}
function botonYON(){
    pjSkelCell.style.display = "none"
    pjSkelM.style.display = "none"
    pjSkelF.style.display = "none"
    pjSkelW.style.display = "none"
    iconOnW.style.display = "none"
    iconOnM.style.display = "none"
    iconOnF.style.display = "none"
    iconOffW.style.display = "block"
    iconOffM.style.display = "block"
    iconOffF.style.display = "block"
    iconOffY.style.display = "none"
    iconOnY.style.display = "block"
    pjSkelY.style.display = "block"
    console.log("botonWOn Funcionando")
}
function botonYOFF(){
    pjSkelCell.style.display = "block"
    pjSkelM.style.display = "none"
    pjSkelF.style.display = "none"
    pjSkelY.style.display = "none"
    pjSkelW.style.display = "none"
    iconOnY.style.display = "none"
    iconOffY.style.display = "block"
    console.log("botonWOff Funcionando")
}
function botonFON(){
    pjSkelCell.style.display = "none"
    pjSkelM.style.display = "none"
    pjSkelY.style.display = "none"
    pjSkelW.style.display = "none"
    iconOnY.style.display = "none"
    iconOnM.style.display = "none"
    iconOnW.style.display = "none"
    iconOffY.style.display = "block"
    iconOffM.style.display = "block"
    iconOffW.style.display = "block"
    iconOffF.style.display = "none"
    iconOnF.style.display = "block"
    pjSkelF.style.display = "block"
    console.log("botonWOn Funcionando")
}
function botonFOFF(){
    pjSkelCell.style.display = "block"
    pjSkelM.style.display = "none"
    pjSkelF.style.display = "none"
    pjSkelY.style.display = "none"
    pjSkelW.style.display = "none"
    iconOnF.style.display = "none"
    iconOffF.style.display = "block"
    console.log("botonWOff Funcionando")
}
function botonMON(){
    pjSkelCell.style.display = "none"
    pjSkelF.style.display = "none"
    pjSkelY.style.display = "none"
    pjSkelW.style.display = "none"
    iconOnY.style.display = "none"
    iconOnW.style.display = "none"
    iconOnF.style.display = "none"
    iconOffY.style.display = "block"
    iconOffW.style.display = "block"
    iconOffF.style.display = "block"
    iconOffM.style.display = "none"
    iconOnM.style.display = "block"
    pjSkelM.style.display = "block"
    console.log("botonWOn Funcionando")
}
function botonMOFF(){
    pjSkelCell.style.display = "block"
    pjSkelM.style.display = "none"
    pjSkelF.style.display = "none"
    pjSkelY.style.display = "none"
    pjSkelW.style.display = "none"
    iconOnM.style.display = "none"
    iconOffM.style.display = "block"
    console.log("botonWOff Funcionando")
}


window.addEventListener("load", iniciarPage)
