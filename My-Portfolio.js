function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var btnabt = document.getElementById("aboutus")
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }



  function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header myTopnav") {
      x.className += " responsive";
    } else {
      x.className = "header myTopnav";
    }
  }
  


  var typed = new Typed('.text', {
    strings: [' Fronted Developer','Coder','Full Stack Developer','Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop: true,
  });
       
