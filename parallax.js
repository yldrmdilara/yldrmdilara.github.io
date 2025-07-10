function parallaxScroll(){
  const scrollY = window.scrollY;
  document.querySelector('.bg').style.transform = `translateY(${scrollY * 0.2}px)`;
  document.querySelector('.mid').style.transform = `translateY(${scrollY * 0.5}px)`;
  document.querySelector('.fg').style.transform = `translateY(${scrollY * 0.8}px)`;
}
window.addEventListener('scroll', parallaxScroll);
