$(document).ready(function() {
  $('.toggle').click(function() {
    $('.toggle').toggleClass('active')
  })
})

document.querySelector('.contact-form').addEventListener('submit', submitForm);
function submitForm(e) {
  e.preventDefault();
  let name = document.querySelector('.name').value;
  let email = document.querySelector('.email').value;
  let message= document.getElementsByName('message').value;

  saveContactInfo(name, email, message);

  document.querySelector('.contact-form').requestFullscreen();
}

function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();
  
  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
  retrieveInfos();
}


function sendemail(name, email, message) {
  email.send({
    Host: 'smtp.gmail.com',
    Username: 'guymoustapha@gmai.com',
    Password: '' ,//to be generate from app passwords,
    To : 'guymoustapha@gmai.com',
    From: 'guymoustapha@gmai.com'

  })
}