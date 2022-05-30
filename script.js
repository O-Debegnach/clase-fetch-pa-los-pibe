let lista = document.querySelector('#lista');

fetch("http://127.0.0.1:5500/data.json")
.then((response) => response.json())
.then(data => {
    console.log(data)
    data.forEach(objeto => {
        lista.innerHTML += `<li> ${objeto.nombre} <br> ${objeto.edad} </li>`
    })
})

console.log("segundo log");

const objeto = {
    clave: "valor",
    funcion: function(){
        console.log("funcion");
    },
}

console.log(objeto);