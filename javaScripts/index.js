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