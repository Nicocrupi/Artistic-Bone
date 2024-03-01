const buttonAmarillo = document.getElementById("button-amarillo")
const buttonRojo = document.getElementById("button-rojo")
const buttonAzul = document.getElementById("button-azul")
const buttonVerde = document.getElementById("button-verde")
const buttonInicio = document.getElementById("button-inicio")



const sectionAmarillo = document.getElementById("section-amarillo")
const sectionRojo = document.getElementById("section-rojo")
const sectionAzul = document.getElementById("section-azul")
const sectionVerde = document.getElementById("section-verde")
const sectionPrincipal = document.getElementById("section-principal")
const sectionInitial = document.getElementById("section-initial")
const sectionLoading = document.getElementById("loading")

buttonAmarillo.addEventListener("click", activeSectionAmarillo)
buttonRojo.addEventListener("click", activeSectionRojo)
buttonAzul.addEventListener("click", activeSectionArtistas)
buttonVerde.addEventListener("click", activeSectionProyectos)
buttonInicio.addEventListener("click", activeSectionInicio)


function iniciarPage(){
    sectionLoading.style.display = "none"
    sectionAmarillo.style.display = "none"
    sectionRojo.style.display = "none"
    sectionAzul.style.display = "none"
    sectionVerde.style.display = "none"
    sectionPrincipal.style.display = "block"
    console.log("Page Lista")
    
}
function activeSectionInicio(){
    sectionInitial.style.display = "block"
    sectionAmarillo.style.display = "none"
    sectionRojo.style.display = "none"
    sectionAzul.style.display = "none"
    sectionVerde.style.display = "none"
    console.log("Todo ok en Inicio")
}
function activeSectionAmarillo(){
    linkY.style.display = "none"
    linkW.style.display = "none"
    linkE.style.display = "none"
    linkF.style.display = "none"
    botonEBack.style.display = "none"
    botonFBack.style.display = "none"
    botonWBack.style.display = "none"
    botonMBack.style.display = "none"
    botonYBack.style.display = "none"
    pjSkelM.style.display = "none"
    pjSkelF.style.display = "none"
    pjSkelY.style.display = "none"
    pjSkelW.style.display = "none"
    pjSkelE.style.display = "none"
    iconOnE.style.display = "none"
    iconOnW.style.display = "none"
    iconOnY.style.display = "none"
    iconOnF.style.display = "none"
    iconOnM.style.display = "none"
    iconOffW.style.display = "block"
    iconOffY.style.display = "block"
    iconOffF.style.display = "block"
    iconOffM.style.display = "block"
    iconOffE.style.display = "block"
    pjSkelCell.style.display = "block"

    sectionInitial.style.display = "none"
    sectionRojo.style.display = "none"
    sectionAzul.style.display = "none"
    sectionVerde.style.display = "none"
    sectionAmarillo.style.display = "block"
    console.log("Todo ok en Home")
}

function activeSectionRojo(){
    sectionInitial.style.display = "none"
    sectionAmarillo.style.display = "none"
    sectionRojo.style.display = "block"
    sectionAzul.style.display = "none"
    sectionVerde.style.display = "none"
    console.log("Todo ok en Nosotros")
}

function activeSectionArtistas(){
    sectionInitial.style.display = "none"
    sectionAmarillo.style.display = "none"
    sectionRojo.style.display = "none"
    sectionAzul.style.display = "block"
    sectionVerde.style.display = "none"
    console.log("Todo ok en Artistas")
}

function activeSectionProyectos(){
    sectionInitial.style.display = "none"
    sectionAmarillo.style.display = "none"
    sectionRojo.style.display = "none"
    sectionAzul.style.display = "none"
    sectionVerde.style.display = "block"
    console.log("Todo ok en Proyectos")
}

window.addEventListener("load", iniciarPage)