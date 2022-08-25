import React, { useState } from 'react';
import Counter from './components/Counter';
import Input from './components/Input';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';
/* //Первый способ используем хуки
function App() {
  const initialCount =0;
  const [count, setCount] = useState(initialCount)
  const initialValue = 'text';
  const [value, setValue] = useState(initialValue);
 // + - buttons
  function increment () {
      setCount(count + 1)
  }
  function decrement () {
    setCount(count - 1)
  }
return (
  <div className="App">
    <h1>{count}</h1>
    <button onClick={() => setCount(initialCount)}>Сбросить</button>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    <h1>{value}</h1>
    <input type='text' value={value} onChange={event => setValue(event.target.value)}/>
  </div>
);
// text 
}
export default App;
*/

//второй способ, используем jsx компонент который будем использовать внустри вместо кода
function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'Javascript 1', body:'Description'},
    {id:2, title:'Javascript 2', body:'Description'},
    {id:3, title:'Javascript 3', body:'Description'}]
  )
  const [posts2, setPosts2] = useState([
    {id:1, title:'Python 1', body:'Description'},
    {id:2, title:'Python 2', body:'Description'},
    {id:3, title:'Python 3', body:'Description'}]
  )

return (
  <div className="App">
    <form>
      <input type = 'text' placeholder='Name of post'></input>
      <input type = 'text' placeholder='Discription of post'></input>
      <MyButton>Create post</MyButton>

    </form>
    <PostList posts={posts} title='list 1'/>
    <PostList posts={posts2} title='list 2'/>
  </div>

);
// text 
}
export default App;

/*
//третий способ, используем класс, без использования хуков //не сработало 'ClassCounter' is not defined
function App() {
  const initialValue = 'text';
  const [value, setValue] = useState(initialValue);
return (
  <div className="App">
    <ClassCounter/>
    <h1>{value}</h1>
    <input type='text' value={value} onChange={event => setValue(event.target.value)}/>
  </div>
);
// text 
}
export default App;
*/