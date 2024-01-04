import { IPackingItem } from "./types";

export interface IPackingItemProps {
  item: IPackingItem;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const PackingItem: React.FC<IPackingItemProps> = ({
  item,
  onToggle,
  onDelete,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
};
