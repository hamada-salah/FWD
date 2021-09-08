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

// get all sections
const sections = document.querySelectorAll('section');

// add navigation bar
for(i=0; i< (sections.length ) ;i++)
{
let li = document.createElement('li') // create list item
li.innerHTML = 'Section ' + (i+1); // create content of list item
li.setAttribute('id','li'+(i+1)); // add class name to list item
document.getElementById('navbar__list').appendChild(li); // append to UL
let section = sections[i];
document.getElementById('li'+(i+1)).onclick = function () {
  scrollToSection(section);
};

}

// set threshold according to screen size
// add IntersectionObserver

let observer = new IntersectionObserver(activeSection, {threshold: 0.8 }); 

// had to be set using foreach to let the observer realize that it is added to and element
// readd observer to elemenst when resize happen.




sections.forEach(element => {
  observer.observe(element)
});

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


function scrollToSection(section) {

  section.scrollIntoView({behavior: "smooth",block: "start"})
}


// check code performance
const endingTime = performance.now(); // end excution
console.log(endingTime - startingTime)

