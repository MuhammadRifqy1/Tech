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
})
