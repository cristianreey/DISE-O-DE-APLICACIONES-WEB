// MOSTRAR EL CONTENIDO DE CONSULTAS REALIZADAS CUANDO EL BOTON CORRESPONDIENTE ESTE SELECCIONADO
$(document).ready(function () {
  // Oculta el contenido al cargar la página
  $("#content-consult").hide();

  // Maneja el evento de cambio del checkbox btn-check1
  $("#btn-check1").change(function () {
    if (this.checked) {
      // Muestra el contenido si el checkbox está marcado
      $("#content-consult").slideDown();
    } else {
      // Oculta el contenido si el checkbox está desmarcado
      $("#content-consult").slideUp();
    }
  });
});

$(document).ready(function () {
  // Oculta el contenido al cargar la página
  $("#content-consult").hide();

  // Maneja el evento de cambio del checkbox btn-check1
  $("#btn-check2").change(function () {
    if (this.checked) {
      // Muestra el contenido si el checkbox está marcado
      $("#content-consult").slideDown();
    } else {
      // Oculta el contenido si el checkbox está desmarcado
      $("#content-consult").slideUp();
    }
  });
});

$(document).ready(function () {
  // Oculta el contenido al cargar la página
  $("#content-consult1").hide();

  // Maneja el evento de cambio del checkbox btn-check1
  $("#btn-check3").change(function () {
    if (this.checked) {
      // Muestra el contenido si el checkbox está marcado
      $("#content-consult1").slideDown();
    } else {
      // Oculta el contenido si el checkbox está desmarcado
      $("#content-consult1").slideUp();
    }
  });
});
