const formulario = $("formulario")
const resultado = $("resultado")

formulario.addEventListener("submit", (e)=> {
    const ladoA = +formulario["ladoA"].value
    const ladoB = +formulario["ladoB"].value
    const ladoC = +formulario["ladoC"].value
    if (ladoA > ladoC){
    const AreaTriangulo = (ladoB * (ladoA-ladoC))/2
    const AreaRectangulo = (ladoB * ladoC)
    const Total = AreaRectangulo + AreaTriangulo
    resultado.innerText += Total
}
else{
    alert("Lado C no puede ser igual o mayor que Lado A")
}
    e.preventDefault()
})

function $(elemento) {
    return document.getElementById(elemento)
}