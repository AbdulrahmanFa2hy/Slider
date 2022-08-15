let sliderImg = document.querySelectorAll('.slider-container img')
let slideNumber = document.querySelector('.slide-number')
let indicatiors = document.getElementById('indicators')
let bulletNumber = sliderImg.length

let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')
let currentSlide = 6

// Events
nextButton.onclick = nextSlide
prevButton.onclick = prevslide

function nextSlide() {
  if (nextButton.classList.contains('disabled')) {
    return false
  } else {
    currentSlide++
    theChecker()
  }
}
function prevslide() {
  if (prevButton.classList.contains('disabled')) {
    return false
  } else {
    currentSlide--
    theChecker()
  }
}

// Create Ul Element
let paginationElement = document.createElement('ul')
paginationElement.setAttribute('id', 'pagination-ul')
indicatiors.appendChild(paginationElement)
// Create li Elements and append to ul
for (let i = 1; i <= bulletNumber; i++) {
  let li = document.createElement('li')
  li.setAttribute('data-index', i)
  let liText = document.createTextNode(i)
  li.appendChild(liText)
  paginationElement.appendChild(li)
}
let liElements = document.querySelectorAll('#pagination-ul li')

for (let i = 0; i < liElements.length; i++) {
  liElements[i].addEventListener('click', function () {
    currentSlide = parseInt(this.getAttribute('data-index'))
    theChecker()
  })
}

// Checker function
function theChecker() {
  slideNumber.textContent = `Slide #` + currentSlide + ' of ' + bulletNumber
  removeAllActive()
  sliderImg[currentSlide - 1].classList.add('active')
  paginationElement.children[currentSlide - 1].classList.add('active')

  // Check if This is the first Slide
  if (currentSlide == 1) {
    // Add disabled class to preveious Button
    prevButton.classList.add('disabled')
  } else {
    // Remove disabled class from preveious Button
    prevButton.classList.remove('disabled')
  }

  // Check if This is the Last Slide
  if (currentSlide == bulletNumber) {
    // Add disabled class to Next Button
    nextButton.classList.add('disabled')
  } else {
    // Remove disabled class from Next Button
    nextButton.classList.remove('disabled')
  }
}

theChecker()

// remove active classes from All element
function removeAllActive() {
  sliderImg.forEach(function (img) {
    img.classList.remove('active')
  })
  liElements.forEach((e) => e.classList.remove('active'))
}

// let currentSlide = 1
// function nexSlide() {
//   for (let i = 0; i < bulletNumber; i++) {
//     sliderImg[i].classList.remove('active');
//   };
//   slideNumber.innerHTML = `Slide ${currentSlide + 1} of ${bulletNumber}`;
//   sliderImg[currentSlide - 1].classList.add('active');
//   console.log(currentSlide);
//   currentSlide++;
//   if (currentSlide == sliderImg.length) {
//     currentSlide = 0
//   }
//   console.log(sliderImg.length)
// }

// currentSlide = 0;
// function prevslide() {
//   for (let i = 0; i < bulletNumber; i++) {
//     sliderImg[i].classList.remove('active')
//   }
//   slideNumber.innerHTML = `Slide ${currentSlide + 1} of ${bulletNumber}`;
//   currentSlide--;
//   if (currentSlide == -1) {
//     currentSlide = sliderImg.length - 1;
//   }
//   console.log(currentSlide)
//   sliderImg[currentSlide - 1].classList.add('active')
//   slideNumber.innerHTML = `Slide ${currentSlide + 1}`;
// }
