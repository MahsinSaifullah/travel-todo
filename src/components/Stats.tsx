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
  if (!totalItems) {
    <p className="stats">
      <em>Start adding some items to your packing list 🚀</em>
    </p>;
  }

  return (
    <footer className="stats">
      <em>
        {percentageOfItemsPacked === 100
          ? 'You got everything! Ready to go ✈️'
          : `💼 You have ${totalItems} items on your list, and you already packed
          ${totalPackedItems} (${percentageOfItemsPacked}%)`}
      </em>
    </footer>
  );
};
