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
    {
        name: "praga6",
        src: "images/IMG_6423.JPG"
    },
]

document.getElementById("praga").src = images[1].src;
document.getElementById("praga2").src = images[2].src;
document.getElementById("praga3").src = images[3].src;
document.getElementById("praga4").src = images[4].src;
document.getElementById("praga5").src = images[5].src;
document.getElementById("praga6").src = images[6].src;





