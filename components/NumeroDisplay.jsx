export default function NumeroDisplay(props) {
  const estilo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    color: "darkblue",
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    margin: "10px",
  };

  return (
    <div style={estilo}>
      <h3>{props.numero}</h3>
    </div>
  );
}
