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
    //0
    {
        name: "chiara",
        src: "images/about.jpg"
    },
    //1
    {
        name: "chiara2",
        src: "images/about.jpg"
    },
    {
        name: "praga",
        src: "images/IMG_6423.JPG"
    },
    {
        name: "praga2",
        src: "images/IMG_4616.jpg"
    },
    {
        name: "praga3",
        src: "images/IMG_4890.jpg"
    },
]

document.getElementById("chiara").src = images[0].src;
document.getElementById("chiara2").src = images[1].src;
document.getElementById("praga").src = images[2].src;
document.getElementById("praga2").src = images[3].src;
document.getElementById("praga3").src = images[3].src;



