import styles from './Appointment.module.css'
import Brands from '../brands/Brands'

export default function Card() {
  return (
    <div>
        <div className={styles.title}>MARCAS CON LAS QUE TRABAJAMOS</div>
        <br/>
        <br/>
        <div className={styles.brands}>
            <Brands/>
        </div>
    </div>
  )
}
