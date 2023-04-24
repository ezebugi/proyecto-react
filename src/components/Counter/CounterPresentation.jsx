import { Button } from "@mui/material";

const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
      <Button variant="contained" color="success" onClick={sumar}>
        Sumar
      </Button>
      <h2>{counter}</h2>
      <Button variant="contained" color="success" onClick={restar}>
        Restar
      </Button>
      <Button variant="outlined" color="error" onClick={() => onAdd(counter)}>
        Agregar
      </Button>
    </div>
  );
};

export default CounterPresentation;
