// import logo from './logo.svg';
import './App.css';
import Header from "./my-components/header.js";
import Todos from "./my-components/todos";
import Footer from "./my-components/footer";
import { Addtodo } from "./my-components/addtodo";
import React, { useState, useEffect } from 'react';

function App() {

  let inittodos;
  if (localStorage.getItem("todoslist") === null) {

    inittodos = [];
    console.log("checking condition on loclstorge");
  }
  else {

    inittodos = JSON.parse(localStorage.getItem("todoslist"));
  }

  // Function for delete toto===========================

  const ondelete = (todo) => {

    console.log("clicked ondelete fun with todo :", todo);
    //  let index = todoslist.indexOf(todo);
    //  todoslist.splice(index,1);  //thiese methods will not work in React.
    // So we need to use 'useState' hook in react.

    settodos(todoslist.filter((e) => {
      return e !== todo;
    })
    );
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }

  // Function for adding todos=====================================
  const addtodo = (task, task_name, members) => {

    console.log("u r inside adiing tod in todolist");
    let newtodo = {
      task: task,
      task_name: task_name,
      members: members
    };

    settodos([...todoslist, newtodo]);
  }
  const [todoslist, settodos] = useState([inittodos]);

  useEffect(() => {
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }, [todoslist]);

  return (
    <>
      <Header title="Learnig-React" search_bar={true} />
      <Addtodo addtodo={addtodo} />
      <Todos todos={todoslist} ondelete={ondelete} />
      <Footer />
    </>
  );

}
export default App;
