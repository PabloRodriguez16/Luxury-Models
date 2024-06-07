import { Link } from "react-router-dom"
import styles from "./NoAppointments.module.css"

export default function NoAppointments() {
  return (
    <div className={styles.div}>
    <h1 className={styles.h1}>SIN TURNOS</h1>
    <Link to="/AppointmentForm"><button className={styles.button}>Agregar Turno</button></Link>
    </div>
  )
}
