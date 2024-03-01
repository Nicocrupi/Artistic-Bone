
const botonWOn = document.getElementById("boton-wOn")
const botonWBack = document.getElementById("boton-wBack")
const botonYOn = document.getElementById("boton-yOn")
const botonYBack = document.getElementById("boton-yBack")
const botonFOn = document.getElementById("boton-fOn")
const botonFBack = document.getElementById("boton-fBack")
const botonMOn = document.getElementById("boton-mOn")
const botonMBack = document.getElementById("boton-mBack")
const botonEOn = document.getElementById("boton-eOn")
const botonEBack = document.getElementById("boton-eBack")


botonWOn.addEventListener("click", botonWON)
botonWBack.addEventListener("click", botonWOFF)
botonYOn.addEventListener("click", botonYON)
botonYBack.addEventListener("click", botonYOFF)
botonFOn.addEventListener("click", botonFON)
botonFBack.addEventListener("click", botonFOFF)
botonMOn.addEventListener("click", botonMON)
botonMBack.addEventListener("click", botonMOFF)
botonEOn.addEventListener("click", botonEON)
botonEBack.addEventListener("click", botonEOFF)


const iconOnW = document.getElementById("icon-On-W")
const iconOffW = document.getElementById("icon-Off-W")
const iconOnY = document.getElementById("icon-On-Y")
const iconOffY = document.getElementById("icon-Off-Y")
const iconOnF = document.getElementById("icon-On-F")
const iconOffF = document.getElementById("icon-Off-F")
const iconOnM = document.getElementById("icon-On-M")
const iconOffM = document.getElementById("icon-Off-M")
const iconOnE = document.getElementById("icon-On-E")
const iconOffE = document.getElementById("icon-Off-E")
const pjSkelW = document.getElementById("pjSkeletonW")
const pjSkelF = document.getElementById("pjSkeletonF")
const pjSkelE = document.getElementById("pjSkeletonE")
const pjSkelY = document.getElementById("pjSkeletonY")
const pjSkelM = document.getElementById("pjSkeletonM")
const pjSkelCell = document.getElementById("pjSkeletonCell")

const linkY = document.getElementById("link-Y")
const linkW = document.getElementById("link-W")
const linkE = document.getElementById("link-E")
const linkF = document.getElementById("link-F")

function botonWON(){
    linkY.style.display = "none"
    linkW.style.display = "block"
    linkE.style.display = "none"
    linkF.style.display = "none"
    botonYBack.style.display = "none"
    botonEBack.style.display = "none"
    botonMBack.style.display = "none"
    botonFBack.style.display = "none"
    botonWBack.style.display = "block"
    botonWOn.style.display = "none"
    botonEOn.style.display = "block"
    botonYOn.style.display = "block"
    botonFOn.style.display = "block"
    botonMOn.style.display = "block"
    pjSkelCell.style.display = "none"
    pjSkelM.style.display = "none"
    pjSkelF.style.display = "none"
    pjSkelY.style.display = "none"
    pjSkelE.style.display = "none"
    iconOnE.style.display = "none"
    iconOnY.style.display = "none"
    iconOnM.style.display = "none"
    iconOnF.style.display = "none"
    iconOffW.style.display = "none"
    iconOffY.style.display = "block"
    iconOffM.style.display = "block"
    iconOffF.style.display = "block"
    iconOffE.style.display = "block"
    iconOnW.style.display = "block"
    pjSkelW.style.display = "block"
    console.log("botonWOn Funcionando")
}
function botonWOFF(){
    linkW.style.display = "none"
    botonWOn.style.display = "block"
    botonWBack.style.display = "none"
    pjSkelCell.style.display = "block"
    pjSkelW.style.display = "none"
    iconOnW.style.display = "none"
    iconOffW.style.display = "block"
    console.log("botonWOff Funcionando")
}
function botonYON(){
    linkY.style.display = "block"
    linkW.style.display = "none"
    linkE.style.display = "none"
    linkF.style.display = "none"
    botonEBack.style.display = "none"
    botonWBack.style.display = "none"
    botonMBack.style.display = "none"
    botonFBack.style.display = "none"
    botonYBack.style.display = "block"
    botonWOn.style.display = "block"
    botonEOn.style.display = "block"
    botonYOn.style.display = "none"
    botonFOn.style.display = "block"
    botonMOn.style.display = "block"
    pjSkelCell.style.display = "none"
    pjSkelM.style.display = "none"
    pjSkelF.style.display = "none"
    pjSkelW.style.display = "none"
    pjSkelE.style.display = "none"
    iconOnE.style.display = "none"
    iconOnW.style.display = "none"
    iconOnM.style.display = "none"
    iconOnF.style.display = "none"
    iconOffY.style.display = "none"
    iconOffW.style.display = "block"
    iconOffM.style.display = "block"
    iconOffF.style.display = "block"
    iconOffE.style.display = "block"
    iconOnY.style.display = "block"
    pjSkelY.style.display = "block"
    console.log("botonYOn Funcionando")
}
function botonYOFF(){
    linkY.style.display = "none"
    botonYOn.style.display = "block"
    botonYBack.style.display = "none"
    pjSkelCell.style.display = "block"
    pjSkelY.style.display = "none"
    iconOnY.style.display = "none"
    iconOffY.style.display = "block"
    console.log("botonYOff Funcionando")
}
function botonEON(){
    linkY.style.display = "none"
    linkW.style.display = "none"
    linkE.style.display = "block"
    linkF.style.display = "none"
    botonYBack.style.display = "none"
    botonWBack.style.display = "none"
    botonMBack.style.display = "none"
    botonFBack.style.display = "none"
    botonEBack.style.display = "block"
    botonWOn.style.display = "block"
    botonEOn.style.display = "none"
    botonYOn.style.display = "block"
    botonFOn.style.display = "block"
    botonMOn.style.display = "block"
    pjSkelCell.style.display = "none"
    pjSkelM.style.display = "none"
    pjSkelF.style.display = "none"
    pjSkelY.style.display = "none"
    pjSkelW.style.display = "none"
    iconOnY.style.display = "none"
    iconOnM.style.display = "none"
    iconOnF.style.display = "none"
    iconOnW.style.display = "none"
    iconOffE.style.display = "none"
    iconOffW.style.display = "none"
    iconOnE.style.display = "block"
    iconOffW.style.display = "block"
    iconOffY.style.display = "block"
    iconOffM.style.display = "block"
    iconOffF.style.display = "block"
    pjSkelE.style.display = "block"
    console.log("botonEOn Funcionando")
}
function botonEOFF(){
    linkE.style.display = "none"
    botonEOn.style.display = "block"
    botonEBack.style.display = "none"
    pjSkelCell.style.display = "block"
    pjSkelE.style.display = "none"
    iconOnW.style.display = "none"
    iconOffE.style.display = "block"
    iconOnE.style.display = "none"
    console.log("botonEOff Funcionando")
}
function botonFON(){
    linkY.style.display = "none"
    linkW.style.display = "none"
    linkE.style.display = "none"
    linkF.style.display = "block"
    botonYBack.style.display = "none"
    botonWBack.style.display = "none"
    botonMBack.style.display = "none"
    botonEBack.style.display = "none"
    botonFBack.style.display = "block"
    botonWOn.style.display = "block"
    botonEOn.style.display = "block"
    botonYOn.style.display = "block"
    botonFOn.style.display = "none"
    botonMOn.style.display = "block"
    pjSkelCell.style.display = "none"
    pjSkelM.style.display = "none"
    pjSkelW.style.display = "none"
    pjSkelY.style.display = "none"
    pjSkelE.style.display = "none"
    iconOnE.style.display = "none"
    iconOnY.style.display = "none"
    iconOnM.style.display = "none"
    iconOnW.style.display = "none"
    iconOffE.style.display = "block"
    iconOffY.style.display = "block"
    iconOffM.style.display = "block"
    iconOffW.style.display = "block"
    iconOffF.style.display = "none"
    iconOnF.style.display = "block"
    pjSkelF.style.display = "block"
    console.log("botonWOn Funcionando")
}
function botonFOFF(){
    linkF.style.display = "none"
    botonFOn.style.display = "block"
    botonFBack.style.display = "none"
    pjSkelCell.style.display = "block"
    pjSkelF.style.display = "none"
    iconOnF.style.display = "none"
    iconOffF.style.display = "block"
    console.log("botonWOff Funcionando")
}
function botonMON(){
    botonYBack.style.display = "none"
    botonWBack.style.display = "none"
    botonEBack.style.display = "none"
    botonFBack.style.display = "none"
    botonMBack.style.display = "block"
    botonWOn.style.display = "block"
    botonEOn.style.display = "block"
    botonYOn.style.display = "block"
    botonFOn.style.display = "block"
    botonMOn.style.display = "none"
    pjSkelCell.style.display = "none"
    pjSkelW.style.display = "none"
    pjSkelF.style.display = "none"
    pjSkelY.style.display = "none"
    pjSkelE.style.display = "none"
    iconOnE.style.display = "none"
    iconOnY.style.display = "none"
    iconOnW.style.display = "none"
    iconOnF.style.display = "none"
    iconOffE.style.display = "block"
    iconOffY.style.display = "block"
    iconOffW.style.display = "block"
    iconOffF.style.display = "block"
    iconOffM.style.display = "none"
    iconOnM.style.display = "block"
    pjSkelM.style.display = "block"
    console.log("botonWOn Funcionando")
}
function botonMOFF(){
    botonMOn.style.display = "block"
    botonMBack.style.display = "none"
    pjSkelCell.style.display = "block"
    pjSkelM.style.display = "none"
    iconOnM.style.display = "none"
    iconOffM.style.display = "block"
    console.log("botonWOff Funcionando")
}


window.addEventListener("load", iniciarPage)
