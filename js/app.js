/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// check code performance
const startingTime = performance.now(); // start excution

// alwas go to top when refreshed
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// get all sections
const sections = document.querySelectorAll('section');

// add navigation bar
for(i=0; i< (sections.length ) ;i++)
{
let li = document.createElement('li') // create list item
li.innerHTML = 'S' + (i+1); // create content of list item
li.setAttribute('id','li'+(i+1)); // add class name to list item
document.getElementById('navbar__list').appendChild(li); // append to UL
let section = sections[i];
document.getElementById('li'+(i+1)).onclick = function () {
  scrollToSection(section);
};

}

// scroll to section when nav bar clicked
function scrollToSection(section) {
  section.scrollIntoView({behavior: "smooth",block: "start"})
}

// add observer upon window load , check screen size first, then adjust threshold
window.onload = checksize;
window.onresize = checksize;

function checksize(){
 
  if (screen.width < 280) {
    let observer = new IntersectionObserver(activeSection, {threshold: 0.2 }); 
    sections.forEach(element => {
      observer.observe(element)
    });
    console.log('<280');
  } 
  else if (screen.width < 600 && screen.width >= 280) {
    let observer = new IntersectionObserver(activeSection, {threshold: 0.3 }); 
    sections.forEach(element => {
      observer.observe(element)
    });
    console.log('<600 >280');
  }

  else if (screen.width < 800 && screen.width >= 600) {
    let observer = new IntersectionObserver(activeSection, {threshold: 0.5 }); 
    sections.forEach(element => {
      observer.observe(element)
    });
    console.log('<800 >600');
  }

  else if (screen.width < 1200 && screen.width >= 800) {
    let observer = new IntersectionObserver(activeSection, {threshold: 0.6 }); 
    sections.forEach(element => {
      observer.observe(element)
    });
    console.log('<1200 >800');
  }
    
  else {

    let observer = new IntersectionObserver(activeSection, {threshold: 0.8 }); 
    sections.forEach(element => {
      observer.observe(element)
    });
    console.log('large');

  }
}
// readd observer to elements when resize happen.

// const changeObserver = window.matchMedia('(max-width: 1200px)');
// changeObserver.addEventListener('change', event => {
 
//   if (event.matches) {
//     checksize();
//   }
  // if (event.matches) {
  //   let observer = new IntersectionObserver(activeSection, {threshold: 0.5 }); 
  //   sections.forEach(element => {
  //     observer.observe(element)
  //   });
  //   console.log('small');

  // } 
  // else if (screen.width < 290) {
  //   let observer = new IntersectionObserver(activeSection, {threshold: 0.2 }); 
  //   sections.forEach(element => {
  //     observer.observe(element)
  //   });
  //   console.log('small');
  // } 
  // else if (screen.width < 600) {
  //   let observer = new IntersectionObserver(activeSection, {threshold: 0.3 }); 
  //   sections.forEach(element => {
  //     observer.observe(element)
  //   });
  //   console.log('small');
  // }

   
  // else
  // {

  //   let observer = new IntersectionObserver(activeSection, {threshold: 0.8 }); 
  //   sections.forEach(element => {
  //     observer.observe(element)
  //   });
  //   console.log('large');

  // }
// })

// active section formatting function

function activeSection(elements){

let activated = elements[0].target.id;
console.log(activated);
let sections = document.querySelectorAll('section');
let li = document.querySelectorAll('li');


for(i=0; i< (sections.length ) ;i++)
{
  if (sections[i].id == activated)
    {
      elements[0].target.setAttribute('class','your-active-class')
      li[i].setAttribute('class','Active_link')
    }
  else
    {
    sections[i].setAttribute('class','Not_Active')
    li[i].setAttribute('class','Not_Active_link')
    }
  }
}

// check code performance
const endingTime = performance.now(); // end excution
console.log(endingTime - startingTime)


/**
 * general add observer
 * add IntersectionObserver and observer , threshold is 0.8
 * had to be set using foreach to let the observer realize that it is added to and element
 * let observer = new IntersectionObserver(activeSection, {threshold: 0.8 }); 
//  * sections.forEach(element => {
//  * observer.observe(element)
//  * })
0
*/



