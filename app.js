// Selecting the elements by class name

let smallImages = document.getElementsByClassName("oldImg");

for(let i=0; i<smallImages.length; i++) {
    // console.dir(smallImages[i]);
    console.dir(smallImages[i].src);
}

// for(let i=0; i<smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no ${i} is changed`);
// };

let links = document.querySelectorAll(".box a");

// for(let i=0; i<links.length; i++) {
//     links[i].style.color = "green";
// }

for(link of links) {
    link.style.color= "purple";
}

