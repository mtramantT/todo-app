import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store";
import { deleteTodos, selectNextId, selectTodos, sortTodos } from "../../store/todo";
import ActionBar from "../action-bar/ActionBar";
import TodoCard from "./TodoCard";

const Wrapper = styled.div`
    border: 2px solid black;
    box-sizing: border-box;
    margin: 10px;
    padding: 5px;
    width: 95%;
    background-color: #F2F9FF;
`;

interface Props {
    children?: React.ReactNode | React.ReactNode[];
}


const TodoContainer: React.FC<Props> = (props: Props) => {
    const dispatch = useAppDispatch();
    const todos = useAppSelector(selectTodos)

    return (
        <Wrapper>
            {/* <div><ActionBar /></div> */}
            <div>
                <button onClick={() => dispatch(deleteTodos())}>Clear</button>
                <button onClick={() => dispatch(sortTodos())}>Sort</button>
            </div>
            {todos.map((todo, index) => {
                return <TodoCard 
                            title={todo?.title || ""} 
                            description={todo?.description || ""} 
                            completed={todo?.completed || false} key={`todo:${index}`}
                            categories={todo?.categories || [""]}/>
            })}
        </Wrapper>
    );
}

export default TodoContainer;