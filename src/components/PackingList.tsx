import { PackingItem } from "./PackingItem";
import { IPackingItem } from "./types";

interface PackingListProps {
  items: IPackingItem[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const PackingList: React.FC<PackingListProps> = ({
  items,
  onToggle,
  onDelete,
}) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingItem
            key={item.id}
            item={item}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
