import { Link } from 'react-router-dom'
import styles from './perfileButton.module.css'

export default function PorfileButtons() {
  return (
    <div className={styles.divButtons}>
    
    {location.pathname === "/login" ? null : (<Link to="/login"><button className={styles.porfileButton}>Login</button></Link>)}
    {location.pathname === "/register" ? null : (<Link to="/register"><button className={styles.porfileButton}>Register</button></Link>)}
    </div>
  )
}
