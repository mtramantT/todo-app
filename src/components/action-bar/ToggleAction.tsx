import React from "react";
import styled, {css} from "styled-components";

interface Props {
    selected: boolean;
    display: string;
}

const Wrapper = styled.button<{selected: boolean}>`
    /* box-sizing: border-box;
    display: inline-block;
    border: 1px solid #ccc;
    vertical-align:middle;
    padding: 3px;
    text-align: center;
    cursor:pointer; */

    border: 1px solid white;

    ${ ({selected}) => 
        selected 
            ? css`
                background-color: #ddd;
                box-shadow: 0 0 5px -1px rgba(0,0,0,0.6);
            ` 
            : css`
                background-color: #fff2e7;
                box-shadow: 0 0 5px -1px rgba(0,0,0,0.2);
            `
    }
`;

const ToggleAction: React.FC<Props> = (props: Props) => {
    const {selected, display} = props;
    return (
        <Wrapper selected={selected}>
            {display}
        </Wrapper>
    );
}

export default ToggleAction;
