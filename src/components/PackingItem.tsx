import { IPackingItem } from "./types"

export interface IPackingItemProps {
  item: IPackingItem
}

export const PackingItem: React.FC<IPackingItemProps> = ({ item }) => {
  return (
    <li>
       <span style={item.packed ? {textDecoration: 'line-through'}: {}}>{item.quantity} {item.description}</span>
       <button>❌</button>
    </li>
  )
}
