// function sendMail() {
//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       mobileno: document.getElementById("mobileno").value,
//       service: document.getElementById("service").value,
//       message: document.getElementById("message").value,
//     };
  
//     const serviceID = "service_kdkr7uk";
//     const templateID = "template_uk12zeu";
  
//       emailjs.send(serviceID, templateID, params)
//       .then(res=>{
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("mobileno").value = "";
//           document.getElementById("service").value = "";
//           document.getElementById("message").value = "";
//           console.log(res);
//           alert("Your message sent successfully!!")
  
//       })
//       .catch(err=>console.log(err));
  
//   }