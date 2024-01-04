import { useLocalStorage } from "../hooks/useLocalStorage";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import { IFormData, IPackingItem } from "./types";

const createPackingItem = (formData: IFormData): IPackingItem => {
  return {
    id: Date.now(),
    packed: false,
    ...formData,
  };
};

export const App = () => {
  const [packingItems, setPackingItems] = useLocalStorage<IPackingItem[]>(
    "packingItem",
    []
  );

  const numOfItems = packingItems.length;
  const numOfPackedItems = packingItems.filter((item) => item.packed).length;
  const percentageOfItemsPacked = Math.floor(
    (numOfPackedItems / (numOfItems || 1)) * 100
  );

  const handleFormSubmit = (formData: IFormData) => {
    setPackingItems([...packingItems, createPackingItem(formData)]);
  };

  const handlePackedToggle = (id: number) => {
    setPackingItems(
      packingItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setPackingItems(packingItems.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleFormSubmit} />
      <PackingList
        items={packingItems}
        onToggle={handlePackedToggle}
        onDelete={handleDelete}
      />
      <Stats
        totalItems={numOfItems}
        totalPackedItems={numOfPackedItems}
        percentageOfItemsPacked={percentageOfItemsPacked}
      />
    </div>
  );
};
