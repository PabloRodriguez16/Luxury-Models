const validateAppointment = (input) => {
    const errors = {};
  
    if (!input.date) {
      errors.date = "Campo obligatorio.";
    }
  
    if (!input.time) {
      errors.time = "Campo obligatorio.";
    }
  
    if (!input.service) {
      errors.service = "Campo obligatorio.";
    }

    if (input.date) {
      const today = new Date();
      const currentYear = today.getFullYear();
  
      const selectedDate = new Date(input.date);
      selectedDate.setDate(selectedDate.getDate() + 1);
      const selectedYear = selectedDate.getFullYear();
  
      if (selectedYear > currentYear) {
        errors.date = "La fecha del turno debe ser dentro del año actual (" + currentYear + ").";
      } else if (selectedDate < today) {
        errors.date = "La fecha del turno no puede ser anterior o igual a la fecha actual.";
      }
    }
  
    return errors;
  };
  
  export default validateAppointment;
  