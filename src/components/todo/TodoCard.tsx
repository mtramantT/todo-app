import React from "react";
import styled from 'styled-components'

interface Props {
    title: string;
    description: string;
    completed: boolean;
    categories: string[];
}

const Wrapper = styled.div`
    text-align: center;
    border: 2px solid black;
    margin: 10px;
    padding: 10px;
    background-color: #C6F7F4;
`;

const Header = styled.div`
    font-weight: bold;
    font-size: 20px;
    border-bottom: 2px dashed gray;
`;
const Body = styled.div`
    font-size: 16px;
`;
const Tag = styled.span`
    font-weight: bold;
    font-size: 12px;
    background-color: white;
    padding: 4px 5px;
    border: 1px solid blue;
    border-radius: 10px;
`;
const TagBody = styled.div``;

const TodoCard:React.FC<Props> = (props: Props) => {
    const {title, description, completed, categories} = props;
    return (
        <Wrapper>
            <Header>
                {title}
            </Header>
            <Body>
                <div>{description}</div>
                <div>{completed ? 'COMPLETED' : 'NOT COMPLETED'}</div>
            </Body>
            <TagBody>
                <div>{categories.map((category) => <Tag>{category}</Tag>)}</div>
            </TagBody>
        </Wrapper>
    );
}

export default TodoCard;