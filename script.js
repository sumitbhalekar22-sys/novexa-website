// Scroll to compare section
function startCompare() {
  const section = document.getElementById("compare");
  if(section){
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Get insurance quote
function getQuote() {

  const vehicle = document.getElementById("vehicle").value;
  const mobile = document.getElementById("mobile").value;

  if(vehicle === "" || mobile === ""){
    alert("Please enter vehicle number and mobile number");
    return;
  }

  alert("Your quote request has been submitted. Our Novexa advisor will contact you shortly.");

}

// Contact form example
function contactForm(){

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if(name === "" || phone === ""){
    alert("Please fill all details");
    return;
  }

  alert("Thank you for contacting Novexa. Our team will reach you soon.");

}
