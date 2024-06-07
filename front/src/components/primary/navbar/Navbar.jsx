import styles from './Navbar.module.css'
import { Link, useNavigate  } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import PorfileButtons from '../../secondary/porfileButton/PorfileButtons';
import { setUserData, setUserAppointments } from "../../../redux/reducer";

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const userData = useSelector(state => state.user.userData.login);

  const handleLogout = () => {
    if(window.confirm("Seguro que quieres cerrar sesión?"))
    dispatch(setUserData({}));
    dispatch(setUserAppointments({}));
    navigate("/")
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.iconAndA}>
        <div className={styles.navbar_info_app}>
          <img src="../../../../public/car.svg" alt="CarService Logo" className={styles.CarServiceLogo}/>
        </div>
        <div className={styles.navbar__buttons_nav}>
          <Link to="/" className={styles.navbar__button_nav}>
            Home
          </Link>
          <Link to="/about" className={styles.navbar__button_nav}>
            About this website
          </Link>
          {userData && <Link to="/appointments" className={styles.navbar__button_nav}>
            Appointments
          </Link>}
        </div>
      </div>
      <div className={styles.divButtons}>
      {!userData && <PorfileButtons />}
      {userData && <button onClick={handleLogout} className={styles.porfileButtonLogout}>Cerrar sesión</button>}
      </div>
    </div>
  );
}

export default Navbar;
