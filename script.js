function Send(){
    var params={
      name : document.getElementById("Name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("Message").value
    }
  
        // Get the form element by ID
    var form = document.getElementById("contactForm");
  
       // Send the form data via emailjs
    emailjs.send("service_yk9tgrm", "template_by9okxe", params).then(function (res){
      console.log("Success!", res.status, res.text)
      alert("Email Send Successfully!" + res.status)
      form.reset()
      
    },
    (error) => {
      console.log('FAILED...', error);
      alert("Message failed to send. Please try again later.");
  }
  );
  }