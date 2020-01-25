document.addEventListener('DOMContentLoaded', function(){
  if (window.outerWidth <= 800) {
    document.querySelector('#carouselExampleControls').style.animationPlayState = 'running' ;
    document.querySelector('#connect-section').style.animationPlayState = 'running' ;
    document.querySelector('#skill-head').style.animationPlayState = 'running' ;
  }

  else {
    document.addEventListener('scroll', function(){
      document.querySelector('#carouselExampleControls').style.animationPlayState = 'running' ;
      document.querySelector('#connect-section').style.animationPlayState = 'running' ;
      document.querySelector('#skill-head').style.animationPlayState = 'running' ;
    })
  }
})
