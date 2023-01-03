import React, { useState } from "react";
import Todo from "../components/Todo";
import Inputbox from "../components/Inputbox";
import Layout from "../components/Layout";
import "../App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
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
  const dispatch = useDispatch(); // store 값을 수정하기 위한 dispatch 선언
  const todolist = useSelector((state) => state.todos.todolist); //state(store)에 있는 todos라는 모듈의 todolist값을 고름
  const num = useSelector((state) => state.todos.num);
  const [title, setTitle] = useState("");
  const [content, setConTent] = useState("");
  // const [num, setNum] = useState(6);
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") return;
    const todo = {
      // id: num + 1,
      id: num,
      title: title,
      content: content,
      isDone: false,
    };

    setTitle("");
    setConTent("");
    // setNum(num + 1);
    dispatch(addTodo(todo));
    // console.log(num);
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id)); //module에 있는 함수
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
        <TodoText> Working...🔥</TodoText>
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
        <TodoText> Done...🎉</TodoText>
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
