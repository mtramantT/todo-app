export interface ICategory {
    id: number;
    name: string;
    toggled: boolean;
}

export type CategoryState = {
    categories: ICategory[];
}

export const sampleCategories: ICategory[] = [
        {
            id: 1,
            name: 'New', 
            toggled: false},
        {
            id: 2, 
            name: 'Important', 
            toggled: false}
]
