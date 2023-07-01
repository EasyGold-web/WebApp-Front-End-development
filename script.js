const hamburger = document.querySelector(".hamburger")
    hamburger.addEventListener('click',function(){
        var navbar = document.querySelector(".nav-bar")
        navbar.classList.toggle("active")
        var header = document.querySelector("header")
        header.classList.toggle("hactive")
    })

window.addEventListener('scroll',function(){
    var header = document.querySelector("header")
    header.classList.toggle("sticky",(window.scrollY>0 && window.matchMedia("(min-width:800px)").matches))
})

function toggle(){
    var cont = document.getElementById("container")
    cont.classList.toggle('blur')
    var pop = document.getElementById("popup")
    pop.classList.toggle('active')
}

const hamwrap = document.querySelector('.hamwrap')
hamwrap.addEventListener('click', ()=>{
    hamwrap.classList.toggle('clicked')
})