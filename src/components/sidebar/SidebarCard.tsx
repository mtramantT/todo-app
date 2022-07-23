import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../store";
import { filterByCategory } from "../../store/todo";

interface Props {
    name: string;
}

const Wrapper = styled.div<{ selected: boolean }>`
    border: 2px solid green;
    box-sizing: border-box;
    text-align: center;
    margin: 0.5em 1.5em;
    padding: 1.5em 1.2em;
    cursor: pointer;

    background-color: ${({selected}) => selected ? '#9DBFAC' : '#C6F7DC'};
`;

const SidebarCard: React.FC<Props> = (props: Props) => {
    const { name } = props;
    const [selected, setSelected] = React.useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(filterByCategory(name));
        setSelected(!selected);
    }
    return <Wrapper selected={selected} onClick={handleClick}>{name}</Wrapper>
}

export default SidebarCard;