//for appointment.html, checkbox functionality
function validate(event) {
    event.preventDefault();
    if ((document.getElementById('option1').checked || document.getElementById('option2').checked || document.getElementById('option3').checked || document.getElementById('option4').checked || document.getElementById('option5').checked)) {
        window.location.href="appointment2.html";
    } else if(document.getElementById('option6').checked){
        window.location.href="appointment3.html";
    }else if((document.getElementById('option6').checked) && (document.getElementById('option1').checked || document.getElementById('option2').checked || document.getElementById('option3').checked || document.getElementById('option4').checked || document.getElementById('option5').checked)){
        
        window.location.href="appointment2.html";

}
}

//for appointment2.html, button functionality
function gotoAppointment3(link){
    console.log(link.value);
    location.href="appointment3.html";

}
