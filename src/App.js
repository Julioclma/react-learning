export default function App() {

  const Bemvindo = (props) => {
    return (
      <div>
        <h2>Bem-vindo {props.name} - Tenho {props.age}</h2>
      </div>
    );
  }


  return (
    <div>
      <Bemvindo name="Julio" age="23" />
      <Bemvindo name="Marcos" age="25" />
      <h2>Olá</h2>
    </div>
  )
}