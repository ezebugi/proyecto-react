import { useState, useEffect } from "react";
import ItemList from "./ItemList";


import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { dataBase } from "../FirebaseConfig";
import { getDocs, collection, query, where  } from "firebase/firestore"; //### addDoc (para agregar productos)
// import { products } from "../../productsMock";



const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    let consulta; 
    const itemCollection = collection(dataBase, "products")

    if(categoryName){
      const itemsCollectionFiltered = query( itemCollection, where("category", "==", categoryName ))
      consulta = itemsCollectionFiltered
    }else{
      consulta = itemCollection
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map( product => {
        
          return {
            ...product.data(),
            id: product.id
          }
        })

        setItems(products)
      })
      .catch((err) => console.log(err));

  }, [categoryName]);


  // const addProducts = ()=>{

  //   const productsCollection = collection(dataBase, "products")

  //     products.map( product => (
  //       addDoc(productsCollection, product)
  //     ))

  // }


  return (
    <div>
      <hr></hr>
   <h3 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px', color: 'black', marginBottom: '20px' }}>
      Game Over, Todos tus video juegos
    </h3>
<hr></hr>
      {items.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          
         <PacmanLoader color="rgba(214, 54, 213, 1)" size={40} />
         <h3>cargando...</h3>
         {/* <button onClick={addProducts}>Agregar productos a firebase</button> */}
        </div>
      ) : (
        <ItemList items={items} />
      )}

      
    </div>
  );
};

export default ItemListContainer;