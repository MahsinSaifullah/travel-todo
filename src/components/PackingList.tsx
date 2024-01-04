import { PackingItem } from "./PackingItem";
import { IPackingItem } from "./types";

interface PackingListProps {
  items: IPackingItem[];
}

export const PackingList: React.FC<PackingListProps> = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
