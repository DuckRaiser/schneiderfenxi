// Prevent zooming on the webpage
window.addEventListener("wheel", (e)=> {
  const isPinching = e.ctrlKey
  if(isPinching) e.preventDefault()
}, { passive: false })

// Prevent pinch zoom on mobile
document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) { 
    event.preventDefault(); 
  }
}, { passive: false });

// Disable context menu
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
