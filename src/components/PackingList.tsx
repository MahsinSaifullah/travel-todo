import { PackingItem } from "./PackingItem";
import { IPackingItem } from "./types";

const initialItems: IPackingItem[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Laptops", quantity: 2, packed: false },
];

export const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <PackingItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
