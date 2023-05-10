function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("mensaje").value;


  if (nombre.trim() === "") {
    mostrarAlerta("Por favor, ingrese su nombre.", "danger", "nombre");
    return false;
  } else {
    ocultarAlerta("nombre");
  }

  if (apellido.trim() === "") {
    mostrarAlerta("Por favor, ingrese su apellido.", "danger", "apellido");
    return false;
  } else {
    ocultarAlerta("apellido");
  }
  if (!validarNombre(nombre)) {
    mostrarAlerta("El nombre solo debe contener letras.", "danger", "nombre");
    return false;
  } else {
    ocultarAlerta("nombre");
  }

  if (!validarNombre(apellido)) {
    mostrarAlerta("El apellido solo debe contener letras.", "danger", "apellido");
    return false;
  } else {
    ocultarAlerta("apellido");
  }

  if (correo.trim() === "") {
    mostrarAlerta("Por favor, ingrese su correo electrónico.", "danger", "correo");
    return false;
  } else {
    ocultarAlerta("correo");
  }

  if (!mensaje) {
    mostrarAlerta("Por favor, ingrese su mensaje.", "danger", "mensaje");
    return false;
  } else {
    ocultarAlerta("mensaje");
  }

  var correoExpresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!correoExpresion.test(correo)) {
    mostrarAlerta("Por favor, ingrese un correo electrónico válido.", "danger", "correo");
    return false;
  } else {
    ocultarAlerta("correo");
  }

  mostrarEnvioExitoso();
  return false;
}

function validarNombre(nombre) {
  var regex = /^[A-Za-z]+$/;
  return regex.test(nombre);
}



document.getElementById("nombre").addEventListener("input", function () {
  ocultarAlerta("nombre");
});

document.getElementById("apellido").addEventListener("input", function () {
  ocultarAlerta("apellido");
});

document.getElementById("correo").addEventListener("input", function () {
  ocultarAlerta("correo");
});

document.getElementById("mensaje").addEventListener("input", function () {
  ocultarAlerta("mensaje");
});

function mostrarAlerta(mensaje, tipo, inputId) {
  var div = document.createElement("div");

  if (tipo === "success") {
    div.className = "alert " + tipo + " custom-alert";
    div.appendChild(document.createTextNode(mensaje));
  } else {
    div.className = "alert " + tipo + " custom-alert";
    div.appendChild(document.createTextNode(mensaje));

    var input = document.getElementById(inputId);
    var parent = input.parentElement;
    parent.insertBefore(div, input.nextSibling);
  }
}

function ocultarAlerta(inputId) {
  var input = document.getElementById(inputId);
  var parent = input.parentElement;
  var alert = parent.querySelector(".custom-alert");
  if (alert) {
    parent.removeChild(alert);
  }
}

function mostrarAlerta(mensaje, tipo, inputId) {
  var div = document.createElement("div");

  if (tipo === "success") {
    div.className = "alert " + tipo + " custom-alert";
    div.appendChild(document.createTextNode(mensaje));
  } else {
    div.className = "alert " + tipo + " custom-alert";
    div.appendChild(document.createTextNode(mensaje));

    var input = document.getElementById(inputId);
    var parent = input.parentElement;
    parent.insertBefore(div, input.nextSibling);
  }
}

function mostrarEnvioExitoso() {
  var successModal = document.getElementById("successModal");
  successModal.classList.add("show");

  setTimeout(function () {
    window.location.href = 'home.html';
  }, 3000);

  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("mensaje").value = "";
}







