/*nav*/

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
  enlaces.classList.toggle('activado');
  barras.forEach(child => {child.classList.toggle('animado')});
  ham.classList.toggle('girar');
});


/*form*/

function validate(){
  var name = document.getElementById("Nombre").value;
  var subject = document.getElementById("Asunto").value;
  var phone = document.getElementById("Telefono").value;
  var email = document.getElementById("Mail").value;
  var message = document.getElementById("Mensaje").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Por favor escriba un nombre válido";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Por favor escriba un asunto válido";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Por favor escriba un teléfono válido";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Por favor escriba un mail válido";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 10){
    text = "Por favor escriba mas de 10 caracteres";
    error_message.innerHTML = text;
    return false;
  }
  alert("Formulario enviado!");
  return true;
}

