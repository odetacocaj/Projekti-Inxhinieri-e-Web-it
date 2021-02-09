

function changeForm(number) {
  var format = document.getElementsByClassName('forms');
  if (number == 0) {
    format[0].classList.remove("hidden");
    format[0].classList.add("form-style");
    format[1].classList.add("hidden");
    format[1].classList.remove("form-style");
  } else {
    format[1].classList.remove("hidden");
    format[1].classList.add("form-style");
    format[0].classList.add("hidden");
    format[0].classList.remove("form-style");
  }
}



function validations_Login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("pasw").value;

  if (username == "" || password == "") {
    alert("Ploteso te gjitha te dhenat!");
    return false;
  }
  else{
    alert("Jeni kycur me sukses ne llogarine tuaj!");
  }
}

function validations_Register() {
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lname").value;
  var password = document.getElementById("pw").value;
  var email = document.getElementById("email").value;

  if (name == "" || lastname == "" || password == "" || email == "") {
    alert("Ploteso te gjitha te dhenat");
    return false;
  }
  else{
    alert("Regjistrimi u krye me sukses!");
  }
}


