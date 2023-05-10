import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";
import { dataBase } from "../FirebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";



export const Navbar = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    const categoriesCollection = collection(dataBase, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoriesResult);
      })
      .catch((err) => console.log(err));
  }, []);



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
          {categories.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        </div>
        <CartWidget className={styles.cartWidget} />
      </div>

      <Outlet />
    </div>
  );
};
