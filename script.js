document.getElementById("campForm").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("successMessage").innerHTML =
"🎉 Registration Submitted Successfully! We will contact you soon.";

this.reset();

});