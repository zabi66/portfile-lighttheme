
 let slideIndex = 1;
 showSlides(slideIndex);

 function nextSlide() {
     showSlides(slideIndex += 1);
 }

 function previousSlide() {
     showSlides(slideIndex -= 1);  
 }

function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
     if (n > slides.length) {
       slideIndex = 1
    }
     else if (n < 1) {
         slideIndex = slides.length
    }
    

     for (let slide of slides) {
         slide.style.display = "none";
     }   
     slides[slideIndex - 1].style.display = "block"; 
 }

//  tiny slider

let slider = tns({
    container : ".my-tslider",
    "slideBy" : "1",
    "speed" : 400,
    "nav" : false,
    autoplay : true,
    controls: false,
    autoplayButtonOutput : false,
    responsive : { 
        1600 : {
            items : 4,
            gutter : 20
        },
        1024: {
            items : 3,
            gutter : 20
        },
        768: {
            items : 2,
            gutter: 20
        },
        480: {
            items : 1
        }
    }

})