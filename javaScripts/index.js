$(document).ready(function() {
  $('.toggle').click(function() {
    $('.toggle').toggleClass('active')
  })
})

const myForm = document.getElementById('contact-form');
myForm.addEventListener('submit', submitForm);
function submitForm(e) {
  e.preventDefault();
  let name = document.querySelector('.nam').value;
  let email = document.querySelector('.email').value;
  let message= document.getElementsByName('message').value;

  saveContactInfo(name, email, message);

  document.querySelector('.contact-form').reset();
}
2
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();
  
  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
  retrieveInfos();
}


let ref = firebase.database().ref('infos');
ref.on('value', gotData);

function gotData(data) {
  let info = data.val()
  let
}

function sendEmail(name, email, message) {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'guymoustapha@gmail.com',
    Password: '' ,//to be generate from app passwords,
    To : 'guymoustapha@gmail.com',
    From: 'guymoustapha@gmail.com',
    Subject: `${name} sent you a message`,
    Body : `Name: ${name} </br> Email: ${email} </br> message: ${message}`
  }).then((mesaage)=> alert('mail sent successfully'))
}