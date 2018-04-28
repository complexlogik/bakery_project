let c = document.querySelector("#p2");
let slide1 = c.style.background = `url("/images/slide1_t.jpg")`;
let slide2 = (c.style.background = `url("/images/slide2.jpg")`);
let slide3 = (c.style.background = `url("/images/slide3.jpg")`);
let slide4 = (c.style.background = `url("/images/slide4.jpg")`);
let slide5 = (c.style.background = `url("/images/slide5.jpg")`);

let slides = [slide1, slide2, slide3, slide4, slide5];



// function carousel() {
//   let currentSlide = slide1
//   for (let i = 0; i < slides.length; i++) {
//     if (currentSlide == slide1) {
//       slides[i + 1]
//     } else {
//       slides[i]
//     }
//     setTimeout(carousel, 2000); // Change image every 2 seconds
//   }
// }

// carousel();