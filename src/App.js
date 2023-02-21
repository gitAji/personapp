import Person from "./components/Person";
import './App.css';

function App() {
  return (
   <>
   <div>
    <h1>Famous People</h1><hr></hr>
    <div class="person">
    <Person firstName="David" lastName="Beckham" city="Holland Park"/>
    <Person firstName="Tiger" lastName=" Woods" city="California"/>
    <Person firstName="Cristiano" lastName="Ronaldo" city="Funchal"/>
    <Person firstName="Lionel" lastName="Messi" city="Santa Fe"/>
    <Person firstName="Erna" lastName="Solberg" city="Bergen"/>
    <Person firstName="Paul" lastName="Walker" city="California"/>

</div>
     


   </div>
   </>
  );
}

export default App;
