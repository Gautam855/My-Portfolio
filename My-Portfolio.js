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






  

  const f = document.querySelector("form");
  const  nameInput = document.querySelector("#name");
  const  emailInput = document.querySelector("#email");
  const  messageTextarea=document.querySelector('#plholder');
  const  mobile=document.querySelector('#mnum');
  const  sject=document.querySelector('#sub');

      function sendEmail() {
        const bodymessage = 
        `<b>Name:</b> ${nameInput.value} <br> <b>Email:</b> ${emailInput.value}
        <br><b>Mobile no.:</b> ${mobile.value} <br>
        <br><br><b>Message:</b> ${messageTextarea.value}`;
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "gv8860022@gmail.com",
          Password: "F839FE25B50A71ED3E02931BE60F0D100740",
          To: "gv8860022@gmail.com",
          From: "gv8860022@gmail.com",
          Subject: sject.value,
          Body: bodymessage,
        }).then( 
          message => {
          if(message == "OK"){
            Swal.fire({
              title: "Good job!",
              text: "Message Sent Successfully",
            });


           }else{
             Swal.fire({
               title: 'Oops...',
               text: 'Something went wrong!'
             })
           }
         },
       );
     };
         

      f.addEventListener("submit", (e) => {
        e.preventDefault();
        sendEmail();

        nameInput.value="";
        emailInput.value="";
          mobile.value="";
            sject.value="";
           messageTextarea.value=""
      });





      ScrollReveal({ 
        reset: true,
      distance: '80px',
    duration:2000,
  delay:200 
});

ScrollReveal().reveal('.img-box, .about p, .inp1',{origin:'right' });
ScrollReveal().reveal('.data ,h2, .projects h2, .textarea',{origin:'top' });
ScrollReveal().reveal('.image, .inp2',{origin:'left' });
