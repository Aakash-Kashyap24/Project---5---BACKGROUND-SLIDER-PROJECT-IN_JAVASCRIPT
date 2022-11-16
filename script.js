let slides = document.getElementsByClassName("slide");
let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");

let count = 0;
console.log(slides);


let showSlides = (number) => {
    if (count == slides.length) {
        count = 0;
        number=0;
    }else if(count<0)
{
    count=slides.length-1;
    number=slides.length-1;
}    for (let y of slides) {

        y.style.display = 'none';
    }
    console.log(number)
    slides[number].style.display = 'block';

}

showSlides(count);



let controller = (number) => {


    count = count + number;
    showSlides(count);

}