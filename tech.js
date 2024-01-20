document.addEventListener('DOMContentLoaded', function () {

  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var Header = document.getElementById('Header');
  var Showcase = document.getElementById('Showcase');
  var CameraSupport = document.getElementById('CameraSupport');
  var PhotoShowcase = document.getElementById('Header');

  if (screenWidth >= 768) {
      Header.style.backgroundImage = 'url("./assets/header-camera.webp")';
      Showcase.style.backgroundImage = 'url("./assets/showcase-camera.webp")';
      CameraSupport.style.backgroundImage = 'url("./assets/camera-support.webp")';
      PhotoShowcase.src ='./assets/photo-showcase.webp';
  }else if (screenWidth >=  567) {
      Header.style.backgroundImage = 'url("./assets/header-camera-md.webp")';
      Showcase.style.backgroundImage = 'url("./assets/showcase-camera.webp")';
      CameraSupport.style.backgroundImage = 'url("./assets/camera-support-md.webp")';
      PhotoShowcase.src = './assets/photo-showcase-md.webp';
  }else{
      Header.style.backgroundImage = 'url("./assets/header-camera-sm.webp")';
      Showcase.style.backgroundImage = 'url("./assets/showcase-camera-sm.webp")';
      CameraSupport.style.backgroundImage = 'url("./assets/camera-support-md.webp")';
      PhotoShowcase.src = './assets/photo-showcase-md.webp';
  }

  const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenterSlow = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation-slow');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenter = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenterFast = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation-fast');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerFadeUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-up-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-up-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-right-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  observerCenter.observe(document.querySelector('.header'));
  observerCenter.observe(document.querySelector('.img-example'));
  observerCenter.observe(document.querySelector('.camera-back'));
  observerCenter.observe(document.querySelector('.faq'));
  observerCenterFast.observe(document.querySelector('.camera-front'));
  observerCenterSlow.observe(document.querySelector('.camera-discount'));
  observerSlideLeft.observe(document.querySelector('.showcase-text-box'));
  observerSlideLeft.observe(document.querySelector('.support-container'));
  observerSlideRight.observe(document.querySelector('.cam-showcase'));
  observerSlideRight.observe(document.querySelector('.camera-support-container'));
  observerSlideUp.observe(document.querySelector('.photo-text-box'));
})
