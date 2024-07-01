var homeButton = document.getElementById('homepage');
var aboutButton = document.getElementById('about');

var path = window.location.pathname
// console.log(path)

if(path=='/index.html'){
    homeButton.classList.add('fixed-underline')
}else if(path =='/about.html'){
    aboutButton.classList.add('fixed-underline')
}

let images = [
    //1
        {
        name: "praga",
        src: "images/IMG_4616.jpg"
    },
    {
        name: "praga2",
        src: "images/IMG_4890.jpg"
    },
    {
        name: "praga3",
        src: "images/IMG_4840.jpg"
    },
    {
        name: "praga4",
        src: "images/IMG_4648.jpg"
    },
    {
        name: "praga5",
        src: "images/IMG_4961.jpg"
    },
  
]
 
let penombra = [
        { 
        name: "penombra1",
        src: "penombra/IMG_6636-2.jpg"
    },   
    { 
        name: "penombra2",
        src: "penombra/IMG_6641-2-2.jpg"
    },
    { 
        name: "penombra3",
        src: "penombra/IMG_6664-2.jpg"
    },   
    { 
        name: "penombra4",
        src: "penombra/IMG_6670-2-3.jpg"
    }, 
    { 
        name: "penombra5",
        src: "penombra/IMG_6653-2.jpg"
    },  
    { 
        name: "penombra6",
        src: "penombra/IMG_6682-2.jpg"
    },
    { 
        name: "penombra7",
        src: "penombra/IMG_6825-3.jpg"
    },  
    { 
        name: "penombra8",
        src: "penombra/IMG_6656-2.jpg"
    },    
    { 
        name: "penombra9",
        src: "penombra/IMG_6800-2.jpg"
    },  
    { 
        name: "penombra10",
        src: "penombra/IMG_6854-2.jpg"
    },
    { 
        name: "penombra11",
        src: "penombra/IMG_6830-3.jpg"
    },  
    { 
        name: "penombra12",
        src: "penombra/IMG_6755-2.jpg"
    },    
]


document.getElementById("penombra1").src = penombra[0].src;
document.getElementById ("penombra2"). src = penombra[1].src;
document.getElementById ("penombra3"). src = penombra[2].src;
document.getElementById ("penombra4"). src = penombra[3].src;
document.getElementById ("penombra5"). src = penombra[4].src;
document.getElementById ("penombra6"). src = penombra[5].src;
document.getElementById ("penombra7"). src = penombra[6].src;
document.getElementById ("penombra8"). src = penombra[7].src;
document.getElementById ("penombra9"). src = penombra[8].src;
document.getElementById ("penombra10"). src = penombra[9].src;
document.getElementById ("penombra11"). src = penombra[10].src;
document.getElementById ("penombra12"). src = penombra[11].src;

document.getElementById("praga").src = images[0].src;
document.getElementById("praga2").src = images[1].src;
document.getElementById("praga3").src = images[2].src;
document.getElementById("praga4").src = images[3].src;
document.getElementById("praga5").src = images[4].src;








