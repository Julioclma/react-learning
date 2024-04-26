export default function App() {

  const About = (props) => {
    return(
<div>
  <p>{props.name} - {props.responsability} - {props.age}</p>
</div>

    )
  }

  const Social = (props) => {
    return(
      <div>
        <p>Meu Instagram: <a href="">{props.instagram}</a></p>
        </div>
    )
  }

  const Equipe = (props) => {
   return (
    <div>
      <About name={props.name} responsability={props.responsability} age={props.age}/>
      <Social instagram={props.instagram}/>
      <hr/>
    </div>
   );
  }
  
  return (
    <div>
   <h1>Conheça nossa equipe: </h1>
   <Equipe name="Julio" responsability="Developer" age="23" instagram="julioclmafra"/>
   <Equipe name="Lara" responsability="Developer" age="21" instagram="laramsal"/>
   <Equipe name="Matheus" responsability="Developer" age="28" instagram="mattdev"/>
    </div>
  )
}