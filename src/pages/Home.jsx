import React, { useState } from "react";
import Todo from "../components/Todo";
import Inputbox from "../components/Inputbox";
import Layout from "../components/Layout";
import "../App.css"; // ๐ฅ ๋ฐ๋์ App.css ํ์ผ์ import ํด์ค์ผ ํฉ๋๋ค.
import { addTodo, deleteTodo, toggleTodo } from "../redux/modules/todos";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
const TodoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-start;
`;
const TodoText = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const ListContainer = styled.div`
  padding: 0 24px;
`;

const Home = () => {
  const dispatch = useDispatch(); // store ๊ฐ์ ์์ ํ๊ธฐ ์ํ dispatch ์ ์ธ
  const todolist = useSelector((state) => state.todos.todolist); //state(store)์ ์๋ todos๋ผ๋ ๋ชจ๋์ todolist๊ฐ์ ๊ณ ๋ฆ
  const num = useSelector((state) => state.todos.num);
  const [title, setTitle] = useState("");
  const [content, setConTent] = useState("");
  // const [num, setNum] = useState(6);
  const addTodoHandler = (e) => {
    // ์ด๊ธฐ๊ฐ0 ์๋๊ฒ
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") return;
    const todo = {
      // id: num + 1,
      id: num,
      title: title,
      content: content,
      isDone: false,
    };
    // ์๋ ฅ๊ฐ ์ด๊ธฐํ
    setTitle("");
    setConTent("");
    // setNum(num + 1);
    dispatch(addTodo(todo));
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id)); //module์ ์๋ ํจ์
  };
  const doneTodoHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <Layout>
      <Inputbox
        title={title}
        content={content}
        setTitle={setTitle}
        setConTent={setConTent}
        addTodoHandler={addTodoHandler}
      ></Inputbox>
      <ListContainer>
        <TodoText> Working...๐ฅ</TodoText>
        <TodoWrapper>
          {todolist.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todo
                  handleDelete={deleteTodoHandler}
                  todo={todo}
                  key={todo.id}
                  handleDone={doneTodoHandler}
                ></Todo>
              );
            } else {
              return null;
            }
          })}
        </TodoWrapper>
        <TodoText> Done...๐</TodoText>
        <TodoWrapper>
          {todolist.map((todo) => {
            if (todo.isDone) {
              return (
                <Todo
                  handleDelete={deleteTodoHandler}
                  todo={todo}
                  key={todo.id}
                  handleDone={doneTodoHandler}
                ></Todo>
              );
            } else {
              return null;
            }
          })}
        </TodoWrapper>
      </ListContainer>
    </Layout>
  );
};

export default Home;
