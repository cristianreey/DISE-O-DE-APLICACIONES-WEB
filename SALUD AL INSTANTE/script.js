document.addEventListener("DOMContentLoaded", function () {
  const contenedorCalendario = document.getElementById("calendario-container");
  const fechaSeleccionada = document.querySelector(".fecha-seleccionada");
  const btnConfirmarCita = document.getElementById("btnConfirmarCita");

  flatpickr(".calendario", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    appendTo: contenedorCalendario,
    onClose: function () {
      contenedorCalendario.style.display = "none";
    },
    onOpen: function () {
      contenedorCalendario.style.display = "block";
    },
    onChange: function (selectedDates, dateStr, instance) {
      // Actualiza el contenido debajo del icono con la fecha seleccionada
      fechaSeleccionada.textContent = `Fecha seleccionada: ${dateStr}`;
      fechaSeleccionada.classList.add("mostrar"); // Agrega la clase mostrar
      btnConfirmarCita.style.display = "block"; // Muestra el botón de confirmar cita
    },
    onReady: function (selectedDates, dateStr, instance) {
      // Lógica para resaltar las fechas disponibles (puedes personalizar según tus necesidades)
      const fechasDisponibles = ["2023-12-10", "2023-12-15", "2023-12-20"];
      const calendario = instance.calendarContainer;

      fechasDisponibles.forEach((fecha) => {
        const dateElement = calendario.querySelector(`[data-date="${fecha}"]`);
        if (dateElement) {
          dateElement.classList.add("fecha-disponible");
        }
      });
    },
  });

  // Oculta el contenedor y el botón al principio
  contenedorCalendario.style.display = "none";
  btnConfirmarCita.style.display = "none";

  // Agrega un evento de clic al botón de confirmar cita (puedes personalizar según tus necesidades)
  btnConfirmarCita.addEventListener("click", function () {
    // Lógica para confirmar la cita
    alert("Cita confirmada. ¡Gracias!");
  });
});

//Creamos el evento para que se habran las observaciones cuando hagamos clic
document.addEventListener("DOMContentLoaded", function () {
  const observacionIcono = document.querySelector(".observacion");
  const observacionesContainer = document.getElementById("observaciones-container");

  observacionIcono.addEventListener("click", function () {
    observacionesContainer.classList.toggle("mostrar-observaciones");
  });
});
function toggleObservaciones() {
  var observacionesContainer = document.getElementById("observaciones-container");
  observacionesContainer.classList.toggle("mostrar");
}

function mostrarFormulario() {
  var formularioObservacion = document.getElementById("formularioObservacion");
  formularioObservacion.style.display = "block";
}

function enviarObservacion() {
  // Obtén el valor de la valoración seleccionada
  var valoracion = obtenerValoracion();

  // Aquí puedes obtener los valores del formulario y hacer lo que necesites con ellos
  var nombreUsuario = document.getElementById("nombreUsuario").value;
  var textoObservacion = document.getElementById("textoObservacion").value;

  // Cambia el color de las estrellas seleccionadas
  var estrellasSeleccionadas = document.querySelectorAll('input[name="valoracion"]:checked + label');
  estrellasSeleccionadas.forEach(function (label) {
    label.style.color = "gold";
  });

  // Añade lógica para mostrar la observación en el lugar adecuado
  var observacionesContainer = document.getElementById("observaciones-container");
  var nuevaObservacion = document.createElement("div");
  nuevaObservacion.classList.add("div-observaciones");
  nuevaObservacion.innerHTML = `
    <p>${nombreUsuario} <span style="color: gold;">${"\u2605".repeat(parseInt(valoracion))}</span>${"\u2606".repeat(
    5 - parseInt(valoracion)
  )}</p>
    <div style="border: 1px solid #ccc; padding: 10px; border-radius: 20px; margin-bottom: 10px;"> ${textoObservacion}</div>`;
  observacionesContainer.appendChild(nuevaObservacion);

  // Oculta el formulario después de enviar la observación
  var formularioObservacion = document.getElementById("formularioObservacion");
  formularioObservacion.style.display = "none";
}

function obtenerValoracion() {
  var valoracionRadios = document.querySelectorAll('input[name="valoracion"]');
  var valoracionSeleccionada;

  for (var i = 0; i < valoracionRadios.length; i++) {
    if (valoracionRadios[i].checked) {
      valoracionSeleccionada = valoracionRadios[i].value;
      break;
    }
  }

  return valoracionSeleccionada;
}

document.addEventListener("DOMContentLoaded", function () {
  const menuObservaciones = document.querySelector(".menu-desplegable-observaciones");
  const pies = document.querySelector(".pies");

  function ajustarPosicionMenu() {
    const alturaMenu = menuObservaciones.offsetHeight;
    const alturaPies = pies.offsetHeight;
    const alturaVentana = window.innerHeight;

    if (alturaMenu + alturaPies > alturaVentana) {
      const nuevaAlturaMenu = alturaVentana - alturaPies;
      menuObservaciones.style.maxHeight = nuevaAlturaMenu + "px";
    } else {
      menuObservaciones.style.maxHeight = "";
    }
  }

  // Ajustar la posición del menú cuando la ventana cambia de tamaño
  window.addEventListener("resize", ajustarPosicionMenu);

  // Ajustar la posición inicial
  ajustarPosicionMenu();
});
