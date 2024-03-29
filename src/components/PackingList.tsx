import { useState } from 'react';
import { PackingItem } from './PackingItem';
import { IPackingItem } from './types';

interface PackingListProps {
  items: IPackingItem[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onClearList: () => void;
}

export const PackingList: React.FC<PackingListProps> = ({
  items,
  onToggle,
  onDelete,
  onClearList,
}) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems: IPackingItem[] = [];

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <PackingItem
            key={item.id}
            item={item}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};
