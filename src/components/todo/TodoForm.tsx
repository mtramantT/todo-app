import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectCategories } from "../../store/category";
import { addTodo, selectNextId } from "../../store/todo";

const Wrapper = styled.div`
    margin: 10px;
    padding: 5px;
    width: 95%;
    border: 2px solid black;
    background-color: #F2F9FF;
`;

interface Props {

}

const FormRow = styled.div`
    display: block;
    margin-left: 10px;
    margin-top: 5px;
`

const Label = styled.label`
    display: block;
    font-weight: bold;
`;

const initialFormValues = {
    title: '',
    description: '',
    category: 'New',
}

const TodoForm: React.FC<Props> = (props: Props) => {
    const dispatch = useAppDispatch();
    const latestId = useAppSelector(selectNextId)
    const [values, setValues] = React.useState<typeof initialFormValues>(initialFormValues);
    const categories = useAppSelector(selectCategories);
 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleAddTodo = () => {
        const nextId = latestId + 1;
        const {title, description, category} = values;
        if(title !== '' && description !== '') {
            dispatch(addTodo({
                id: nextId,
                title,
                description,
                completed: false,
                categories: [category],
            }))
        }
    }

    return (
        <Wrapper>
            <FormRow className="form-row" style={{textAlign: 'center'}}>
                <h2>New Todo</h2>
            </FormRow>
            <FormRow className="form-row">
                <Label htmlFor="title">Title:</Label>
                <input 
                    type="text" 
                    name="title"
                    id="tile" 
                    value={values.title}
                    onChange={handleChange}
                    style={{width: '95%', }}/>
            </FormRow>
            <FormRow className="form-row">
                <Label htmlFor="description">Description:</Label>
                <input 
                    type="text" 
                    name="description" 
                    id="description" 
                    value={values.description}
                    onChange={handleChange}
                    style={{width: '95%', }}/>
            </FormRow>
            <FormRow>
                <label htmlFor="category" style={{marginRight: '5px', fontWeight: 'bold'}}>Category:</label>
                <select name="category" id="category" value={values.category} onChange={handleChange}>
                    {categories.map((category, index) => <option key={`c${index}`}>{category.name}</option>)}
                </select>
            </FormRow>
            <FormRow className="form-row" style={{textAlign: 'center'}}>
                <button onClick={handleAddTodo}>Add Todo</button>
                <button onClick={() => setValues(initialFormValues)}>Reset</button>
            </FormRow>
        </Wrapper>
    );
}


export default TodoForm;