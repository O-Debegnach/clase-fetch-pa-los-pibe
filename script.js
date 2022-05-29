let lista = document.querySelector('#lista');

fetch("https://jsonplaceholder.typicode.com/posts")
.then((huevo) => huevo.json())
.then(asd => {
    console.log(asd)
    asd.forEach(a => {
        lista.innerHTML += `<li> ${a.title} <br> ${a.body} </li>`
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