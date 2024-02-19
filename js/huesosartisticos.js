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
    iconOnW.style.display = "none"
    iconOnY.style.display = "none"
    iconOnF.style.display = "none"
    iconOnM.style.display = "none"
    iconOffW.style.display = "block"
    iconOffY.style.display = "block"
    iconOffF.style.display = "block"
    iconOffM.style.display = "block"
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