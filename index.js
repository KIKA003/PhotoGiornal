var homeButton = document.getElementById('homepage');
var aboutButton = document.getElementById('about');

var path = window.location.pathname
// console.log(path)

if(path=='/index.html'){
    homeButton.classList.add('fixed-underline')
}else if(path =='/about.html'){
    aboutButton.classList.add('fixed-underline')
}

