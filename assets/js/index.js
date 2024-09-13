  
//   document.addEventListener('DOMContentLoaded', () => {

//     const nextBtn = document.getElementById('nextBtn');
//     const sliderWrapper = document.querySelector('.slider-wrapper');

//     nextBtn.addEventListener('click', () => {
//         // Move the first card to the end to create a continuous loop
//         const firstCard = sliderWrapper.firstElementChild;
//         sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
//         sliderWrapper.style.transform = 'translateX(-33.33%)';

//         // Wait for the transition to complete before rearranging the cards
//         sliderWrapper.addEventListener('transitionend', () => {
//             sliderWrapper.style.transition = 'none';
//             sliderWrapper.appendChild(firstCard); // Move first card to the end
//             sliderWrapper.style.transform = 'translateX(0)'; // Reset the position
//         }, { once: true }); // Event listener runs once
//     });
    
// });



// document.addEventListener('DOMContentLoaded', () => {
//   const nextBtn = document.getElementById('nextBtn');
//   const sliderWrapper = document.querySelector('.slider-wrapper');
//   const dots = document.querySelectorAll('.dot');
//   let currentSlide = 0;
//   const totalSlides = dots.length;

//   // Function to update the active dot
//   function updateActiveDot(index) {
//       dots.forEach(dot => dot.classList.remove('active'));
//       dots[index].classList.add('active');
//   }

//   nextBtn.addEventListener('click', () => {
//       const firstCard = sliderWrapper.firstElementChild;
//       sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
//       sliderWrapper.style.transform = 'translateX(-33.33%)';

//       // Wait for the transition to complete before rearranging the cards
//       sliderWrapper.addEventListener('transitionend', () => {
//           sliderWrapper.style.transition = 'none';
//           sliderWrapper.appendChild(firstCard); // Move first card to the end
//           sliderWrapper.style.transform = 'translateX(0)'; // Reset the position
          
//           // Update the current slide index
//           currentSlide = (currentSlide + 1) % totalSlides;
//           updateActiveDot(currentSlide); // Update the active dot
//       }, { once: true }); // Event listener runs once
//   });

//   // Initially set the first dot as active
//   updateActiveDot(currentSlide);
// });


// document.addEventListener('DOMContentLoaded', () => {
//   // Function to initialize a slider
//   function initSlider(sliderWrapperSelector, nextBtnSelector) {
//       const sliderWrapper = document.querySelector(sliderWrapperSelector);
//       const nextBtn = document.querySelector(nextBtnSelector);

//       nextBtn.addEventListener('click', () => {
//           const firstCard = sliderWrapper.firstElementChild;
//           const sliderWidth = sliderWrapper.offsetWidth; // Get the width of the slider wrapper
//           const cardWidth = firstCard.offsetWidth; // Get the width of one card
//           const translatePercentage = (cardWidth / sliderWidth) * 100; // Calculate translateX based on card width

//           sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
//           sliderWrapper.style.transform = `translateX(-${translatePercentage}%)`;

//           sliderWrapper.addEventListener('transitionend', () => {
//               sliderWrapper.style.transition = 'none';
//               sliderWrapper.appendChild(firstCard); // Move first card to the end
//               sliderWrapper.style.transform = 'translateX(0)'; // Reset the position
//           }, { once: true });
//       });
//   }

//   // Initialize the sliders for both sections
//   initSlider('#pricingSlider .slider-wrapper', '#nextBtnPricing');
//   initSlider('#servicesSlider .slider-wrapper', '#nextBtnServices');
// });


document.addEventListener('DOMContentLoaded', () => {

    const navbarToggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.collapse');
    const header = document.querySelector('.header');
    
    navbarToggler.addEventListener('click', function () {
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            // If navbar is collapsed, expand it
            header.classList.add('header-toggle-style');
            collapse.classList.add('collapse-toggle-style');
        } else {
            // If navbar is expanded, collapse it
            header.classList.remove('header-toggle-style');
            collapse.classList.remove('collapse-toggle-style');
        }
    });

  // Function to initialize a slider
  function initSlider(sliderWrapperSelector, nextBtnSelector, dotsContainerSelector) {
      const sliderWrapper = document.querySelector(sliderWrapperSelector);
      const nextBtn = document.querySelector(nextBtnSelector);
      const dots = document.querySelectorAll(`${dotsContainerSelector} .dot`);
      let activeIndex = 0;
      const totalCards = sliderWrapper.children.length;

      // Function to update the active dot
      function updateActiveDot(index) {
          dots.forEach((dot, i) => {
              dot.classList.toggle('active', i === index);
          });
      }

      // Set the initial active dot
      updateActiveDot(activeIndex);

      nextBtn.addEventListener('click', () => {
          const firstCard = sliderWrapper.firstElementChild;
          const sliderWidth = sliderWrapper.offsetWidth; // Get the width of the slider wrapper
          const cardWidth = firstCard.offsetWidth; // Get the width of one card
          const translatePercentage = (cardWidth / sliderWidth) * 100; // Calculate translateX based on card width

          sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
          sliderWrapper.style.transform = `translateX(-${translatePercentage}%)`;

          sliderWrapper.addEventListener('transitionend', () => {
              sliderWrapper.style.transition = 'none';
              sliderWrapper.appendChild(firstCard); // Move first card to the end
              sliderWrapper.style.transform = 'translateX(0)'; // Reset the position

              // Update the active dot
              activeIndex = (activeIndex + 1) % totalCards;
              updateActiveDot(activeIndex);
          }, { once: true });
      });
  }

  // Initialize the sliders
  // For the Pricing section, the dots container is outside of the #pricingSlider
  initSlider('#pricingSlider .slider-wrapper', '#nextBtnPricing', '.dots-container');
  // For the Services section, the dots container is inside the #servicesSlider
  initSlider('#servicesSlider .slider-wrapper', '#nextBtnServices', '#servicesSlider .dots-container');
});


