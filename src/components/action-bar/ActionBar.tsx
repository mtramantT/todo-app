import React from "react";
import styled from 'styled-components'
import ToggleAction from "./ToggleAction";

interface Props {
    children?: {
        
    }[]
}

const Wrapper = styled.div``;
const ButtonRow = styled.div`
    display: flex;
`;
const FormRow = styled.div`
    display: block;
`;

const ActionBar: React.FC<Props> = (props: Props) => {
    const {children} = props;
    const [toggled, setToggled] = React.useState(false);
    
    return (
        <Wrapper>
            <ButtonRow>
                <ToggleAction selected={false} display="clear"></ToggleAction>
            </ButtonRow>
            {toggled
                ? <FormRow></FormRow>
                : <></>}
        </Wrapper>
    );
}

export default ActionBar;