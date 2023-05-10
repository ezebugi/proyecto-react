import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
import CartContainer from "./components/Cart/CartContainer";
import Form from "./components/Form/Form";
import CartContextProvider from "./context/CartContext";
import { FormCheckoutContainer } from "./components/FormCheckout/FormCheckoutContainer";
import { Footer } from "./components/Footer/Footer";

function App() {  
  return (
    <BrowserRouter>    
    <CartContextProvider>     
      <Routes>        
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/form" element={<Form />} />
          <Route path="/checkout" element={<FormCheckoutContainer />} />
          <Route path="*" element={<h1>error</h1>} />          
        </Route>        
      </Routes>     
      </CartContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
