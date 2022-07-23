import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectCategories, selectNextId } from "../../store/category";
import SidebarCard from "./SidebarCard";

interface Props {
}

const Wrapper = styled.div`
    border: 2px solid black;
    box-sizing: border-box;
    margin: 10px;
    padding: 5px;
    width: 95%;
`;

const SidebarContainer: React.FC<Props> = (props: Props) => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(selectCategories);
    const nextId = useAppSelector(selectNextId);

    return (
        <Wrapper>
            <div style={{textAlign: 'center'}}>
                <h2>Quick Access</h2>
            </div>
            {categories.map((category, index) => <SidebarCard name={category.name} key={`c${index}`}/>)}
        </Wrapper>
    );
}

export default SidebarContainer;