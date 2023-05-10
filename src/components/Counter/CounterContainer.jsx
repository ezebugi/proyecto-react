import { useEffect, useState } from "react";
import CounterPresentation from "./CounterPresentation";
import Swal from 'sweetalert2'

const CounterContainer = ({ stock, onAdd, initial=1 }) => {

  const [counter, setCounter] = useState(initial);


  useEffect(()=>{
    setCounter(initial)
  }, [initial])
  

  const sumar = () => {
    counter < stock ? setCounter(counter + 1): Swal.fire("Maximo alcanzado");
    
  };

  const restar = () => {
    if(counter > 1){
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <CounterPresentation counter={counter} sumar={sumar} restar={restar} onAdd={onAdd} />
    </div>
  );
};

export default CounterContainer;