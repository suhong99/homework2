import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import styled from "styled-components";
const TodoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 280px;
`;

const TodoTitle = styled.div`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;
function Todo(props) {
  // key는 콘솔을 찍을 수 없음

  return (
    <TodoContainer>
      <Link to={`/${props.todo.id}`}>
        <span style={{ cursor: "pointer" }}>상세보기</span>
      </Link>
      <TodoTitle> {props.todo.title}</TodoTitle>
      <div>{props.todo.content}</div>
      <ButtonSet>
        <CustomButton
          color="red"
          onClick={() => {
            props.handleDelete(props.todo.id);
          }}
        >
          삭제하기
        </CustomButton>
        <CustomButton
          color="green"
          onClick={() => {
            props.handleDone(props.todo.id);
          }}
        >
          {props.todo.isDone ? "취소" : "완료"}
        </CustomButton>
      </ButtonSet>
    </TodoContainer>
  );
}

export default Todo;
