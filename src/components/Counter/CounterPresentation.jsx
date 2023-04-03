const CounterPresentation = ({
  user,
  reiniciar,
  sumar,
  restar,
  counter,
  sumar10,
  login,
}) => {
  return (
    <div>
      {user.length > 0 ? <h2>Bienvenido {user}</h2> : <h2>Ingresa</h2>}
      <button onClick={login}>Login</button>
      <h1>Contador de juegos</h1>
      <button onClick={restar}>Restar</button>
      <button onClick={sumar}>Sumar</button>
      <button onClick={sumar10}>Sumar 10</button>
      <h3>{counter}</h3>

      <button onClick={reiniciar}>Reiniciar contador</button>
    </div>
  );
};

export default CounterPresentation;
