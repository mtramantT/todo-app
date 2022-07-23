import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryState, ICategory, sampleCategories } from './types';

const initialState: CategoryState = {
    categories: sampleCategories,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<ICategory>) => {
            const index = state.categories.findIndex((category) => category.name.toLocaleLowerCase() === action.payload.name.toLocaleLowerCase());
            if(index === -1) {
                state.categories.push(action.payload);
            } else {
                state.categories[index] = action.payload;
            }
        },
    },
})

export default categorySlice;