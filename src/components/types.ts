export interface IPackingItem {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
}

export interface IFormData {
    description: string;
    quantity: number;
}
