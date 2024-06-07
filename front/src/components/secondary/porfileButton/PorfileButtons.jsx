import { Link } from 'react-router-dom'
import styles from './perfileButton.module.css'

export default function PorfileButtons() {
  return (
    <div className={styles.divButtons}>
      <Link to="/login"><button className={styles.porfileButton}>Login</button></Link>
      <Link to="/register"><button className={styles.porfileButton}>Register</button></Link>
    </div>
  )
}
