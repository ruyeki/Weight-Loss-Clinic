//button functionality
function gotoAppointment(link){
    console.log(link.value)
    location.href = "appointment.html"
}
function gotoLogin(link){
    console.log(link.value)
    location.href = "login.html"
}


//scrolling animation
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  });

