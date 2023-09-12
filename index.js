const backToTopButton = document.getElementById('back-to-top-button');

window.addEventListener('scroll', () => {
   console.log('Scroll event detected.');

   if (window.scrollY > 200) {
       console.log('Showing button.');
       backToTopButton.style.display = 'block';
   } else {
       console.log('Hiding button.');
       backToTopButton.style.display = 'none';
   }
});

backToTopButton.addEventListener('click', () => {
   console.log('Button clicked.');

   window.scrollTo({
       top: 0,
       behavior: 'smooth'
   });
});

function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
