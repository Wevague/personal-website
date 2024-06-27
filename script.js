var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('messsage-error');
var subjectError = document.getElementById('subject-error');

function validateName() {
    var name = document.getElementById('contact-name').value.trim(); 
    

    if (name.length == 0) {
        nameError.textContent = 'Name is required'; 
        return false;
    }

   
    if (!name.match(/^[A-Za-z]*\s[A-Za-z]*$/)) {
        nameError.textContent= 'Please enter your full name';
        return false;
    }
    
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    // Check if the email field is empty
    if (email.length == 0) {
        emailError.textContent = 'Email is required';
        return false;
    }

    // Regular expression pattern to validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email format';
        return false;
    }

    // If email is valid, display a check mark icon
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length;
    var messageError = document.getElementById('message-error'); 

    if (left > 0) {
        messageError.textContent = left + ' more characters required'; 
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;
}
function validateSubject() {
    var subject = document.getElementById('contact-subject').value.trim();
    var required = 6;
    var left = required - subject.length;
    var subjectError = document.getElementById('subject-error'); 

    if (left > 0) {
        subjectError.textContent = left + ' more characters required'; 
        return false;
    }

    subjectError.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;
}









  
  