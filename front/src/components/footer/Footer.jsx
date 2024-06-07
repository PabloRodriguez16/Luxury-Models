import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    
    <div className={styles.footerDiv}>
    <img className={styles.img} src="../../../public/car.svg"/>
    <div className={styles.divs}>
    <p>Te invito a ver mi gitHub</p>
    <a href="https://github.com/PabloRodriguez16" target="_blank"><img className={styles.img} src="../../../public/logo gh.png"/></a>
    </div>
    <div  className={styles.divs}>
    <p> Podés contactarme mediante <br/> mi email: <br/> <br/> <a href="#">pablorodriguez6002@gmail.com</a></p>
    </div>
    <div  className={styles.divs}>
    <p>Tecnologías usadas</p>
      <Link to="/about"><img className={styles.tools} src="../../../public/icons8-tools-100.png"/></Link>
    </div>
    </div>
  )
}
