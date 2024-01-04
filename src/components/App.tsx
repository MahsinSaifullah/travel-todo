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

  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleFormSubmit} />
      <PackingList items={packingItems} />
      <Stats />
    </div>
  );
};
