$(document).ready(function() {
  $('.toggle').click(function() {
    $('.toggle').toggleClass('active')
  })
})

document.querySelector('.contact-form').addEventListener('submit', submitForm);
function submitForm(e) {
  e.preventDefault();
  let name = document.querySelector('.f-name').value;
  let email = document.querySelector('.f-email').value;
  let message= document.getElementsByName('message').value;
}