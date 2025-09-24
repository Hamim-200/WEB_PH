import './App.css'
import ToDo from './Todo';
import Actor from './actor';
import Liberay from './Liberary';

function App() {
  // const time = 50;
  const actors = ['Afif', 'Salman', 'Rahat', 'Fahad', 'Ratul']

  const books = [
    { id: 1, name: 'Physics', price: 250 },
    { id: 2, name: 'Chemistry', price: 300 },
    { id: 3, name: 'Mathematics', price: 280 },
    { id: 4, name: 'Biology', price: 270 },
    { id: 5, name: 'English', price: 200 },
    { id: 6, name: 'Computer Science', price: 350 },
    { id: 7, name: 'History', price: 220 },
    { id: 8, name: 'Geography', price: 240 }
  ]
  return (
    <>
      {/* <h1>Actors</h1> */}
      <Liberay books={books}></Liberay>

      {/* {
        actors.map(actor => <Actor actor={actor}></Actor>)
      } */}


      {/* <h1>React Core Concepts Part 1</h1>
      <ToDo task="learn react" isDone ={true} time={time}></ToDo>
      <ToDo task="learn JS" isDone ={false} time="100"></ToDo>
      <ToDo task="learn HTML" isDone ={true}></ToDo> */}

      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Ashik" tech="js"></Developer>
      <Developer name="Anis" tech="python"></Developer>
      <Developer name="Obvishkeh" tech="apps"></Developer>
      <Car cname="Bmw" cprize="1cr"></Car>
      <Car cname="Honda" cprize="3lakh"></Car>
      <Car cname="Prado" cprize="1.3cr"></Car> */}
    </>
  )
}

function Player() {
  return (
    <div className='student'>
      <h3>Name: </h3>
      <p>Runs: </p>
    </div>
  )
}

function Person() {
  const age = 17;
  const name = 'Anis'

  const personStyle = {
    color: 'yellow',
    textAlign: 'left'
  }
  return (
    <p style={personStyle}>I am a Person : {name} my age is:  {age}</p>
  )
}

function Sports() {
  return (
    <div>
      <h1>Cricket</h1>
      <ol>
        <li>Batsman</li>
        <li>Bowlar</li>
        <li>Umpair</li>
      </ol>
    </div>
  )
}

function Pet() {
  return (
    <h2>Cats</h2>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name : </p>
      <p>Dept : </p>
    </div>
  )
}

function Developer(props) {
  console.log(props);
  return (
    <div style={{
      border: '2px solid green',
      padding: '3px',
      margin: '10px'
    }}>
      <h3>Developer: {props.name}</h3>
      <h4>Technology: {props.tech} </h4>
    </div>
  )
}

function Car({ cname, cprize }) {
  return (
    <div style={{
      border: '2px solid brown',
      padding: '3px',
      margin: '10px'
    }}>
      <h2>Car Name :{cname}</h2>
      <h4>Prize : {cprize}</h4>

    </div>
  )
}

export default App
