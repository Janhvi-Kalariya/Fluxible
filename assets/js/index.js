
document.addEventListener('DOMContentLoaded', () => {

    var new_scroll_position = 0;
    var last_scroll_position;
    var headerBar = document.querySelector('.header');

    window.addEventListener('scroll', function(e) {
    last_scroll_position = window.scrollY;

    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
    // header.removeClass('slideDown').addClass('slideUp');
    headerBar.classList.remove("slideDown");
    headerBar.classList.add("slideUp");

    // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
    // header.removeClass('slideUp').addClass('slideDown');
    headerBar.classList.remove("slideUp");
    headerBar.classList.add("slideDown");
    }

    new_scroll_position = last_scroll_position;
    });

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

    const monthlyToggle = document.getElementById('monthly-toggle');
    const yearlyToggle = document.getElementById('yearly-toggle');
    const monthlyCards = document.getElementById('monthly-cards');
    const yearlyCards = document.getElementById('yearly-cards');

    // Initially ensure that monthly cards are visible, yearly are hidden
    yearlyCards.classList.add('hide');
    monthlyCards.classList.remove('hide');

    monthlyToggle.addEventListener('click', function(e) {
    e.preventDefault();
    // Show monthly cards and hide yearly cards
    monthlyCards.classList.remove('hide');
    yearlyCards.classList.add('hide');

    // Toggle active class for buttons
    monthlyToggle.classList.add('active');
    yearlyToggle.classList.remove('active');
    });

    yearlyToggle.addEventListener('click', function(e) {
    e.preventDefault();
    // Show yearly cards and hide monthly cards
    yearlyCards.classList.remove('hide');
    monthlyCards.classList.add('hide');

    // Toggle active class for buttons
    yearlyToggle.classList.add('active');
    monthlyToggle.classList.remove('active');
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
  
  // initSlider('#pricingSlider .slider-wrapper', '#nextBtnPricing', '.dots-container');
  initSlider('#servicesSlider .slider-wrapper', '#nextBtnServices', '#servicesSlider .dots-container');
});


