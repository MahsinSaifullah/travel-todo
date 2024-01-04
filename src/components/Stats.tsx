interface StatsProps {
  totalItems: number;
  totalPackedItems: number;
  percentageOfItemsPacked: number;
}

export const Stats: React.FC<StatsProps> = ({
  totalItems,
  totalPackedItems,
  percentageOfItemsPacked,
}) => {
  return (
    <footer className="stats">
      <em>
        💼 You have {totalItems} items on your list, and you already packed{" "}
        {totalPackedItems} ({percentageOfItemsPacked}%)
      </em>
    </footer>
  );
};
