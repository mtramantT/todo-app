import categorySlice from "./categoreSlice";

export * from './selectors';

export const { addCategory } = categorySlice.actions;

const categoryReducer = categorySlice.reducer;
export default categoryReducer;