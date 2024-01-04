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

  const handleFormSubmit = (formData: IFormData) => {
    setPackingItems([...packingItems, createPackingItem(formData)]);
  };

  const handleItemPackedToggle = (id: number) => {
    setPackingItems(
      packingItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleFormSubmit} />
      <PackingList items={packingItems} onToggle={handleItemPackedToggle} />
      <Stats />
    </div>
  );
};
