

document.getElementById("boton_color").addEventListener("click", function () {
    document.body.style.backgroundColor="#C49BFC"  
})
document.getElementById("boton_default").addEventListener("click", function () {
   document.body.style.backgroundColor="#87cefa"
})

document.getElementById("boton_ocultar").addEventListener("click", function () {
    document.getElementById("demo").style.display ="none";
})

document.getElementById("boton_aparecer").addEventListener("click", function () {
    document.getElementById("demo").style.display = "block";
})