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
    var logo = document.querySelector(".logo");
    
    
    if (x.className === "header myTopnav") {
      x.className += " responsive";
      logo.style.display = "none";
      x.style.padding = "1rem";
      x.style.height = "auto";

    } else {
      x.className = "header myTopnav";
      logo.style.display = "block";
      x.style.padding = "0rem"; // Reset padding to its original value
      x.style.height="3.5rem";
    }
  }
  


  var typed = new Typed('.text', {
    strings: [' Fronted Developer','Coder','Full Stack Developer','Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop: true,
  });
       
