import { useEffect, useMemo } from 'react';
import styles from './Appointment.module.css';
import axios from 'axios';
import classNames from 'classnames';


// eslint-disable-next-line react/prop-types
export default function Appointment({ id, date, time, service, status, onCancel }) {
  const currentDate = useMemo(() => new Date(), []);
  const appointmentDate = useMemo(() => new Date(date), [date]);
  appointmentDate.setDate(appointmentDate.getDate() + 1);
  const oneDay = 24 * 60 * 60 * 1000;
  const differenceInDays = Math.round((appointmentDate - currentDate) / oneDay);

  useEffect(() => {
    const handleExpired = async () => {
      try {
        await axios.put(`http://localhost:3000/appointments/expired`, { id: id });
      } catch (error) {
        console.log("Hubo un error al expirar el turno", error)
      }
    }

    if (appointmentDate < currentDate && status !== "expired") {
      handleExpired();
    }
  }, [appointmentDate, currentDate, status, id, onCancel]);

  const handleCancelClick = async () => {
    try {
      await axios.put(`http://localhost:3000/appointments`, { id: id });
      onCancel(); 
      alert("¡El turno ha sido cancelado exitosamente!");
    } catch (error) {
      alert("Hubo un error al cancelar el turno. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <>
      <button 
        className={styles.cancel} 
        onClick={handleCancelClick} 
        disabled={
          status === "Expired" ||status === "Cancelled" || 
          differenceInDays <= 0 || 
          differenceInDays === 1  
        }
      >
        Cancelar turno
      </button>
      <div className={classNames(styles.AppointmentDiv, { [styles.AppointmentDivCancelled]: status === "Cancelled" || status === "Expired" })}>
        <div className={styles.Appointment}> ID: {id} </div>
        <div className={styles.Appointment}> {date} </div>
        <div className={styles.Appointment}> {time} </div>
        <div className={styles.Appointment}>{service}</div>
        <div className={classNames(styles.AppointmentActive, { [styles.AppointmentCancelled]: status === "Cancelled",
        [styles.AppointmentExpired]: status === "Expired" })}>{status}</div>
      </div>
    </>
  );
}
