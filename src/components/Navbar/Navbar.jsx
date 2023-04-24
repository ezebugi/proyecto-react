import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          {" "}
          <img
            className={styles.logo}
            src="https://res.cloudinary.com/dfbl1tifi/image/upload/v1680479481/logo_kjsebm.jpg"
            alt="este es el logo de la empresa"
          />
        </Link>
        <div className={styles.categories}>
          <Link to="/">Todos</Link>
          <Link to="/category/Accion">Accion</Link>
          <Link to="/category/Aventura">Aventura</Link>
          <Link to="/category/Plataformas">Plataformas</Link>
          <Link to="/category/Battle Royale">Battle Royale</Link>
          <Link to="/category/Simulación">Simulación</Link>
          <Link to="/category/Shooter">Shooter</Link>
          <Link to="/category/Lucha">Lucha</Link>
          <Link to="/category/Deportes">Deportes</Link>
        </div>
        <CartWidget className={styles.cartWidget} />
      </div>

      <Outlet />
    </div>
  );
};
