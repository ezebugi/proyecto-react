// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
// import imglogo from "../../assets/images"

export const Navbar = ({ color }) => {
  return (
    <div className={styles.containerNavbar}>
      <img
        className={styles.logo}
        src="https://res.cloudinary.com/dfbl1tifi/image/upload/v1680479481/logo_kjsebm.jpg"
        alt="este es el logo de la empresa"
      />

      <ul className={styles.linea}>
        <li>juegos</li>
        <li>Accion</li>
        <li>Aventura</li>
      </ul>
      <CartWidget />
    </div>
  );
};
