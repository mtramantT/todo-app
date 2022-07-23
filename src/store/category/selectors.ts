import { RootState } from "../store";

export const selectNextId = (state: RootState) => {
    if(state.categories.categories.length !== 0) {
        return state.categories.categories.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id + 1;
    }
    return 1;
}

export const selectCategories = (state: RootState) => {
    return state.categories.categories;
}