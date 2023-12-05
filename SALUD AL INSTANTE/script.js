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
