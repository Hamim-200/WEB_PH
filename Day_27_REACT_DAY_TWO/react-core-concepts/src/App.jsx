import './App.css'
import Counter from './Counter';
import Batsman from './Batesman';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friendship';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())


  const fetchFriends = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();
  }


function App() {

  const friendsPromise = fetchFriends();

  function handleClick() {
    alert('I am clicked');
  }

  const handleClick3 = () => {
    alert('Clicked 3 button')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <h3>Vite + React</h3>

      <Suspense fallback={<h3>loading......</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      {/* <Suspense fallback={<h3>loading friends......</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}


      <Counter></Counter>
      <Batsman></Batsman>

      <button onClick={handleClick}>Click me</button>

      <button onClick={function handleClick2() {
        alert('Clicked 2')
      }}>click me 2</button>

      <button onClick={handleClick3}>Click me3</button>


      <button onClick={() => alert('click 4')}>Click me 4</button>

      <button onClick={() => handleAdd5(10)}>Click add 5 </button>


    </>
  )
}
export default App
