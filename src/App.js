import React, { useState, useRef } from 'react';
import Counter from './components/Counter';
import Input from './components/Input';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MyInputForwardRef from './components/UI/input/MyInputForwardRef';
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
    const [post, setPost] = useState({title:"",body:''}) 
  //const [title, setTitle] = useState(''); /*двусторонее связывание, получение данных из управляемый компонент*/
  //const [body, setBody] = useState('');
  //const bodyInputRef = useRef(); 
  function addNewPost(e){
    const newPost = {
      id: Date.now(), //в миллисекундах, гарантируется уникальность айди
     // title,
     // body
    }
   // setPosts([...posts, newPost]) //разворачиваем существующий ...постс с неизвестным количесвом элементов и добавляем новый пост в конец //всегда так делай когда хочешь добавать элемент в массив //можно добавить напрямую ([...posts, {...post, id.Date.now()}])
   setPosts([...posts, {...post, id:Date.now()}]);
   // setTitle('');
   // setBody('');
    setPost('');
    e.preventDefault(); //предотращаем дефолтное поведение браузера.. страница не обновляется
    console.log(newPost);

    //console.log(bodyInputRef.current.value);
  }

return (
  <div className="App">
    <form>
      {/*<MyInput type = 'text' placeholder='Name of post' value={post.title} onChange={e => setTitle(e.target.value)}></MyInput> {/*двусторонее связывание, получение данных из управляемый компонент*/}
      {/*<MyInput type = 'text' placeholder='Discription of post' value={post.body} onChange={e => setBody(e.target.value)}></MyInput> {/*двусторонее связывание, получение данных из управляемый компонент*/}

      <MyInput type = 'text' placeholder='Name of post' value={post.title} onChange={e => setPost({...post, title: e.target.value})}></MyInput> {/*развовачиваем пост и меняем только то что нужно*/}
      <MyInput type = 'text' placeholder='Discription of post' value={post.body} onChange={e => setPost({...post, body: e.target.value})}></MyInput> {/*двусторонее связывание, получение данных из управляемый компонент*/}



      {/*<input ref={bodyInputRef}></input> без управляемого компонента - не рекомендуется напрямую управлять элементами дом дерева */}
      {/*<MyInputForwardRef type = 'text' placeholder='Discription of post' ref={bodyInputRef}></MyInputForwardRef> {/*неуправляемый компонент, неконтролируемый, лучше делать связываемый вариант */}
      <MyButton onClick={addNewPost}>Create post</MyButton>

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